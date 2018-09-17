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
