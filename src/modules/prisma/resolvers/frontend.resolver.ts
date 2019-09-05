import { Query, Resolver } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';
import { FrontendService } from '../services/frontend.service';
import { PageResolver } from './page.resolver';

@Resolver('frontend')
export class FrontendResolver {

  pageResolver: PageResolver;
  constructor(private readonly prisma: Prisma, private readonly frontendService: FrontendService) {
    this.pageResolver = new PageResolver(prisma);
  }

  @Query('frontend')
  public async getLanguage(obj, args, context, info): Promise<any> {
    let { url } = args.where;

    const emptyRes = null;

    // const hostOriginRegex = /^(http|https):\/\/(.*)/;
    const hostOriginRegex = /^(https?\:\/\/)?(.*)$/gi;

    let origin = context.headers.origin;
    if (context.headers['x-origin']) {
      origin = context.headers['x-origin'];
    }

    if (!origin) {
      // Try to get origin as where param in GraphQL query
      origin = args.where.origin;
    }
    // tslint:disable-next-line:no-console
    console.log(`Finally parsed origin: ${origin}`);

    if (!origin) {
      return Promise.resolve(emptyRes);
    }

    // Remove query from url, to correctly resolve page url
    const queryRegex = /\?.*$/i;
    url = url.replace(queryRegex, '');

    const originWithoutProtocolRegexRes = hostOriginRegex.exec(origin);

    if (!originWithoutProtocolRegexRes[2]) {
      return Promise.resolve(emptyRes);
    }

    const domain = originWithoutProtocolRegexRes[2];

    const resolvedUrl = this.frontendService.resolveUrl(url);
    const pagesUrls = await this.pageResolver.getPagesUrls(null, { where: { languageCode: resolvedUrl.language } }, null, null);

    const datasources = await this.prisma.query.datasources(
      {},
      `{
        type
        datasourceItems {
          id
          content
          slug
          datasource {
            type
          }
        }
      }`,
    );

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
        components
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
      googleTrackingPixel
      settings
    }`;

    let qWs = null;
    let isWebsiteActualyFirstPageSlag = false;
    if (!resolvedUrl.website) {
      qWs = await this.prisma.query.websites({ where: { urlMask_in: ['', '/'], domain } }, websiteInfo);
    } else {
      qWs = await this.prisma.query.websites({ where: { urlMask_in: [resolvedUrl.website, `/${resolvedUrl.website}`], domain } }, websiteInfo);

      if (!resolvedUrl.language && (!qWs || qWs.length < 1)) {
        isWebsiteActualyFirstPageSlag = true;
        qWs = await this.prisma.query.websites({ where: { urlMask_in: ['', '/'], domain } }, websiteInfo);
      }
    }

    if (!qWs || qWs.length < 1) {
      return Promise.resolve(emptyRes);
      // throw new Error('No website found...');
    }

    const websiteObject = qWs[0];
    // Possible datasource items
    const pageDatasourceItems = [];
    // try to find page in pagesUrls
    const pageUrl = pagesUrls.find(item => {
      if (item.url === url && item.websiteId === websiteObject.id) {
        return true;
      }

      const urlFragments = item.url.split('/').filter(slug => slug !== '');
      const askedUrlFragments = [...([websiteObject.urlMask.replace('/', '')].filter(k => k && k.length > 0) || []), resolvedUrl.language, ...(resolvedUrl.pages || [])];
      for (let i = 0; i < askedUrlFragments.length; i++) {
        const res = urlFragments[i] && urlFragments[i].match(/^ds\:(.*)/);

        if (urlFragments[i] !== askedUrlFragments[i] && !(res && res[1])) { return false; }
        if (res && res[1]) {
          const { 1: type } = res;
          const datasource = datasources.find(d => d.type.toLocaleLowerCase() === type);
          if (!datasource) { return false; }
          const datasourceItem = datasource.datasourceItems.find(d => d.slug === askedUrlFragments[i]);

          if (
            datasourceItem
          ) {
            if (!pageDatasourceItems.some(dItem => dItem.id === datasourceItem.id )) {
              pageDatasourceItems.push(datasourceItem);
            }
          } else {
            return false;
          }

        }
      }
      return true;
    });

    // tslint:disable-next-line:no-console
    console.log(`Found page info:`, pageUrl);

    if (!pageUrl) {
      return Promise.resolve(emptyRes);
    }

    // Now Language
    let languageObject = null;
    if (resolvedUrl.language) {
      const lang = websiteObject.languages.find(l => {
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
      pages = [...resolvedUrl.pages];
    }
    if (isWebsiteActualyFirstPageSlag) {
      pages = [resolvedUrl.website, ...pages];
    }

    if (pages.length < 1) {
      // Add '' into pages
      pages.push('');
    }

    const pageInfo = `{
      id
      tags {
        id
        name
      }
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
        createdAt
      },
    }`;
    const p = await this.prisma.query.pages(
      {
        where: {
          website: {
            id_in: [websiteObject.id],
          },
          id: pageUrl.page,
        },
      },
      pageInfo,
    );
    let page;
    if (p[0]) {
      page = {
        ...p[0],
        ...p[0].translations[0],
      };

      delete page.translations;
    } else {
      return Promise.resolve(emptyRes);
    }

    // Get SEO from plugin for page
    const pluginInfo = `{
      id
      content
    }`;

    const pluginWhere = {
      page: {
        id_in: [p[0].id],
      },
      language: {
        id_in: [languageObject.id],
      },
      plugin_contains: 'seo',
    };
    const plugins = await this.prisma.query.pagePlugins({ where: pluginWhere }, pluginInfo);
    const navigations = await this.prisma.query.navigations(
      {
        where: {
          website: {
            id: websiteObject.id,
          },
        },
      },
        `{
          id
          name
          nodes {
            id
            page
            title
            link
            order
            parent
            __typename
          }
          __typename
        }`,
    );
    // tslint:disable-next-line:no-any
    let seo = null as any;
    if (plugins && plugins.length > 0) {
      seo = plugins[0].content;
    }

    const res = {
      website: websiteObject,
      language: languageObject,
      page,
      navigations,
      languages: websiteObject.languages,
      seo,
      datasourceItems: pageDatasourceItems,
      project: websiteObject.project,
    };

    return Promise.resolve(res);
  }
}
