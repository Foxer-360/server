import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma, PageTranslationCreateInput } from 'generated/prisma';
import { asyncForEach } from 'utils';
import cache from 'utils/cache';
import { AuthGuard } from 'common/guards/auth.guard';

@Resolver('page')
// @UseGuards(AuthGuard)
export class PageResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('page')
  public async getPage(obj, args, context, info): Promise<any> {
    return await this.prisma.query.page(args, info);
  }

  @Query('pages')
  public async getPages(obj, args, context, info): Promise<any> {
    const cacheKey = obj.body.variables && (
      obj.body.variables.websiteId ||
      obj.body.variables.projectId ||
      `backoffice/${obj.body.variables.website}`
    );

    let pages = [];

    pages = await cache.get_pages(cacheKey);
    if (pages) {
      return pages;
    }
    pages = await this.prisma.query.pages(args, info);
    cache.save_pages(cacheKey, pages);

    return pages;
  }

  @Query('pagesUrls')
  public async getPagesUrls(obj, args, context, info): Promise<any> {
    const cache = {}; // id => url cache
    const nameCache = {}; // id => name cache
    const descriptionCache = {};
    const websiteIdCache = {}; // pageId => websiteId

    const ids = args && args.where && args.where.ids;

    const language = args && args.where && args.where.language;

    const languageCode = args && args.where && args.where.languageCode;

    const websiteId = args && args.where && args.where.websiteId;

    if (!language && !languageCode) {
      return Promise.resolve([]);
    }

    const getLanguageQuery = `{
      id
      code
    }`;

    const langObjects =  await this.prisma.query.languages(
      (language && { where: { id: language } }) || { where: { code: languageCode } },
      getLanguageQuery);

    if (!langObjects || langObjects.length === 0) {
      return Promise.resolve([]);
    }

    const langObject = langObjects[0];

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
            ${ (language && `id_in: ["${language}"]`) || `code_in: ["${languageCode}"]` }
          }
        }
      ) {
        id
        name
        description
        url
      }
    }`;
    const pages = await this.prisma.query.pages({ where: { ...(websiteId ? { website: { id: websiteId }} : {})}}, getPageQuery);

    const getUrlOfParent = async (parent: string) => {
      if (cache[parent]) {
        return cache[parent];
      }

      const pageInfo = pages.find(p => p.id === parent);

      if (pageInfo && pageInfo.translations && pageInfo.translations.length > 0) {

        nameCache[parent] = pageInfo.translations[0].name;
        descriptionCache[parent] = pageInfo.translations[0].description;
        websiteIdCache[parent] = pageInfo.website.id;

        // Top level page
        if (!pageInfo.parent) {
          let prefix = pageInfo.website.urlMask;
          if (prefix[prefix.length - 1] !== '/') {
            prefix += '/';
          }
          if (pageInfo.website.defaultLanguage.id !== language || pageInfo.website.defaultLanguage.code !== languageCode) {
            prefix += langObject.code + (pageInfo.translations[0].url.length > 0 ? '/' : '');
          }

          cache[parent] = prefix + pageInfo.translations[0].url;
          return prefix + pageInfo.translations[0].url;
        }
        const parentUrl = await getUrlOfParent(pageInfo.parent.id);
        const url =
          parentUrl +
          (pageInfo.translations[0].url.length > 0 ? '/' : '') +
          pageInfo.translations[0].url;

        cache[parent] = url;
        return url;

      } else {
        return null;
      }
    };

    const res = [];

    for (const id of (ids || pages.filter(p => p !== null).map(p => p.id))) {
      if (id) {
        const url = await getUrlOfParent(id);
        if (url) {
          res.push({
            id: `${id}${url}`,
            page: id,
            url,
            name: nameCache[id],
            description: descriptionCache[id],
            websiteId: websiteIdCache[id],
          });
        }
      }
    }

    return Promise.resolve(res);
  }

  @UseGuards(AuthGuard)
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

  @UseGuards(AuthGuard)
  @Mutation('updatePage')
  public async updatePage(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updatePage(args, info);
  }

  @UseGuards(AuthGuard)
  @Mutation('deletePage')
  public async deletePage(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deletePage(args, info);
  }

  @UseGuards(AuthGuard)
  @Mutation('updatePageTranslation')
  public async updatePageTranslation(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updatePageTranslation(args, info);
  }

}
