import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

@Resolver('pagePlugin')
export class PagePluginResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('pagePlugin')
  public async getPagePlugin(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pagePlugin(args, info);
  }
  @Query('pagePlugins')
  public async getPagePlugins(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pagePlugins(args, info);
  }

  @Mutation('createPagePlugin')
  public async createPagePlugin(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createPagePlugin(args, info);
  }

  @Mutation('updatePagePlugin')
  public async updatePagePlugin(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updatePagePlugin(args, info);
  }

  @Mutation('savePagePlugin')
  public async savePagePlugin(obj, args, context, info): Promise<any> {
    const pagePlugins = await this.prisma.query.pagePlugins(args, info);

    if (pagePlugins.length === 0) {
      return await this.prisma.mutation.createPagePlugin(args, info);

    } else {
      const pagePlugin = pagePlugins[0];
      const updateArgs = {
        where: {
          id: pagePlugin.id,
        },
        data: {
          content: args.data.content,
        },
      };

      return await this.prisma.mutation.updatePagePlugin(updateArgs, info);
    }
  }

  @Mutation('deletePagePlugin')
  public async deletePagePlugin(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deletePagePlugin(args, info);
  }

}
