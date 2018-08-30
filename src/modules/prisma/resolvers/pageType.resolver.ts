import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

@Resolver('pageType')
export class PageTypeResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('pageType')
  public async getPageType(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pageType(args, info);
  }
  @Query('pageTypes')
  public async getPageTypes(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pageTypes(args, info);
  }

  @Mutation('createPageType')
  public async createPageType(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createPageType(args, info);
  }

  @Mutation('updatePageType')
  public async updatePageType(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updatePageType(args, info);
  }

  @Mutation('deletePageType')
  public async deletePageType(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deletePageType(args, info);
  }

}
