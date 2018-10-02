import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma, PageTranslationCreateInput } from 'generated/prisma';
import { asyncForEach } from 'utils';

@Resolver('page')
export class PageResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('page')
  public async getPage(obj, args, context, info): Promise<any> {
    return await this.prisma.query.page(args, info);
  }

  @Query('pages')
  public async getPages(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pages(args, info);
  }

  @Query('pagesUrls')
  public async getPagesUrls(obj, args, context, info): Promise<any> {
    const cache = {}; // id => url cache
    const nameCache = {}; // id => name cache

    const ids = args.where.ids;
    if (!ids || ids.length < 1) {
      return Promise.resolve([]);
    }
    const language = args.where.language;
    if (!language) {
      return Promise.resolve([]);
    }

    const getLanguageQuery = `{
      id
      code
    }`;

    const langObject = await this.prisma.query.language({ where: { id: language } }, getLanguageQuery);
    if (!langObject) {
      return Promise.resolve([]);
    }

    const getPageQuery = `{
      id
      parent {
        id
      }
      website {
        id
        urlMask
        defaultLanguage {
          id
          code
        }
      }
      translations(
        where: {
          language: {
            id_in: ["${language}"]
          }
        }
      ) {
        id
        name
        url
      }
    }`;

    const getUrlOfParent = async (parent: string) => {
      if (cache[parent]) {
        return cache[parent];
      }

      const pageInfo = await this.prisma.query.page({ where: { id: parent } }, getPageQuery);
      nameCache[parent] = pageInfo.translations[0].name;

      // Top level page
      if (!pageInfo.parent) {
        let prefix = pageInfo.website.urlMask;
        if (prefix[prefix.length - 1] !== '/') {
          prefix += '/';
        }
        if (pageInfo.website.defaultLanguage.id !== language) {
          prefix += langObject.code + '/';
        }

        cache[parent] = prefix + pageInfo.translations[0].url;
        return prefix + pageInfo.translations[0].url;
      }

      const url = await getUrlOfParent(pageInfo.parent.id) + '/' + pageInfo.translations[0].url;
      cache[parent] = url;
      return url;
    };

    const res = [];
    for (const id of ids) {
      const url = await getUrlOfParent(id);

      res.push({
        page: id,
        url,
        name: nameCache[id],
      });
    }

    return Promise.resolve(res);
  }

  @Mutation('createPage')
  public async createPage(obj, args, context, info): Promise<any> {
    // Parse informations for translation
    const translation = {
      url: '/',
      content: {},
      name: 'New Page',
      status: 'DRAFT',
    };
    if (args.data.url) {
      translation.url = args.data.url;
    }
    if (args.data.content) {
      translation.content = args.data.content;
    }
    if (args.data.name) {
      translation.name = args.data.name;
    }
    if (args.data.status) {
      translation.status = args.data.status;
    }

    // Get page type and than set default content
    const type = await this.prisma.query.pageType({ where: { id: args.data.type.connect.id } }, '{ content }');
    if (type.content && type.content.id === 'root') {
      translation.content = type.content;
    }

    // Get languages for website
    const webId = args.data.website.connect.id;
    const web = await this.prisma.query.website({ where: { id: webId }}, '{ languages { id } }');
    const languages = [] as string[];

    web.languages.forEach((lang) => {
      languages.push(lang.id);
    }, this);

    // Create new Page
    delete args.data.name;
    delete args.data.url;
    delete args.data.status;
    delete args.data.content;
    const res = await this.prisma.mutation.createPage(args, '{ id }');

    // Get page id
    const page = res.id;

    // Create translations
    await asyncForEach(languages, async (lang) => {
      const transArgs = {
        data: {
          ...translation,
          page: {
            connect: { id: page },
          },
          language: {
            connect: { id: lang },
          },
        } as PageTranslationCreateInput,
      };

      await this.prisma.mutation.createPageTranslation(transArgs, '{ id }');
    });

    return await this.prisma.query.page({ where: { id: page }}, info);
  }

  @Mutation('updatePage')
  public async updatePage(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updatePage(args, info);
  }

  @Mutation('deletePage')
  public async deletePage(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deletePage(args, info);
  }

  @Mutation('updatePageTranslation')
  public async updatePageTranslation(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updatePageTranslation(args, info);
  }

}
