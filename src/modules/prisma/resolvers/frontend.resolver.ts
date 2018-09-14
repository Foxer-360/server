import { Query, Resolver } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';
import { FrontendService } from '../services/frontend.service';

@Resolver('frontend')
export class FrontendResolver {

  constructor(private readonly prisma: Prisma,
              private readonly frontendService: FrontendService) {}

  @Query('frontend')
  public async getLanguage(obj, args, context, info): Promise<any> {
    const { url } = args.where;

    // tslint:disable-next-line:no-console
    console.log(`Trying to resolve ${url} page...`);

    const emptyRes = null;

    const resolvedUrl = this.frontendService.resolveUrl(url);

    // Flow:
    // Resolve website..
    //   If website is null, then it must have empty prefix ('' or '/')
    //   If website is defined and language is defined, then website is exactly what it is
    //   If website is defined and language is not defined, then website can be ('' or '/') or what it is
    // Resolve language...
    //   If language is defined, then just check, if this language is available in website, if not -> error
    //   If language is not defined, then just get default language for resolved website
    // Resolve page...
    //   If website is defined and language is not defined and we resolve, that website is ('' or '/'), then first page is from website
    //   Then go throught an array of pages and always check if we found this page, this page must have
    //     parent of previous page, website which we resolve and so on
    //   Finally if we found this page, just gather all informations what are necessary and send it to client

    // Now Website
    const websiteInfo = `
    { id
      title
      project {
        id
        name
        languages {
          id
          code
          name
        }
      }
      languages {
        id
        code
        name
      }
      defaultLanguage {
        id
        code
        name
      }
      urlMask
      settings
    }`;

    let qWs = null;
    let isWebsiteActualyFirstPageSlag = false;
    if (!resolvedUrl.website) {
      qWs = await this.prisma.query.websites({ where: { urlMask_in: ['', '/'] } }, websiteInfo);
    } else {
      qWs = await this.prisma.query.websites({ where: { urlMask_in: [resolvedUrl.website, `/${resolvedUrl.website}`] } }, websiteInfo);

      if (!resolvedUrl.language && (!qWs || qWs.length < 1)) {
        isWebsiteActualyFirstPageSlag = true;
        qWs = await this.prisma.query.websites({ where: { urlMask_in: ['', '/'] } }, websiteInfo);
      }
    }

    if (!qWs || qWs.length < 1) {
      return Promise.resolve(emptyRes);
      // throw new Error('No website found...');
    }

    const websiteObject = qWs[0];

    // Now Language
    let languageObject = null;
    if (resolvedUrl.language) {
      const lang = websiteObject.languages.find((l) => {
        return l.code === resolvedUrl.language;
      });

      if (!lang) {
        return Promise.resolve(emptyRes);
        // throw new Error(`Language ${resolvedUrl.language} for this website is not available...`);
      }

      languageObject = { ...lang };
    } else {
      languageObject = { ...websiteObject.defaultLanguage };
    }

    if (!languageObject) {
      return Promise.resolve(emptyRes);
      // throw new Error(`No language for website was found...`);
    }

    // Now page
    let pages = [];
    if (resolvedUrl.pages && resolvedUrl.pages.length > 0) {
      pages = [ ...resolvedUrl.pages ];
    }
    if (isWebsiteActualyFirstPageSlag) {
      pages = [resolvedUrl.website, ...pages];
    }

    if (pages.length < 1) {
      // Add '' into pages
      pages.push('');
    }

    const pageObjects = [];
    const pageInfo = `{
      id,
      translations(
        where: {
          language: {
            code_in: ["${languageObject.code}"]
          }
        }
      ) {
        id
        language {
          id
          code
        }
        url
        name
        status
        content
        publishedFrom
        publishedTo
      },
    }`;

    for (const page of pages) {
      let parent = null;
      if (pageObjects.length > 0) {
        parent = {
          id_in: [pageObjects[pageObjects.length - 1].id],
        };
      }

      const p = await this.prisma.query.pages({
        where: {
          parent,
          website: {
            id_in: [websiteObject.id],
          },
          translations_some: {
            url_in: [page],
          },
        },
      }, pageInfo);

      if (!p || p.length < 1) {
        return Promise.resolve(emptyRes);
        // throw new Error(`Page ${page} was not found...`);
      }

      const pn = {
        ...p[0].translations[0],
        ...p[0],
      };

      delete pn.translations;

      pageObjects.push(pn);
    }

    const res = {
      website: websiteObject,
      language: languageObject,
      page: pageObjects[pageObjects.length - 1],
    };

    return Promise.resolve(res);
  }

}
