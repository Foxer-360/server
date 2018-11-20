import { Resolver, Mutation, Query, Subscription } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

@Resolver('pageTranslation')
export class PageTranslationResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('pageTranslation')
  public async getPageTranslation(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pageTranslation(args, info);
  }
  @Query('pageTranslations')
  public async getPageTranslations(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pageTranslations(args, info);
  }

  @Mutation('createPageTranslation')
  public async createPageTranslation(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createPageTranslation(args, info);
  }

  @Mutation('updatePageTranslation')
  public async updatePageTranslation(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updatePageTranslation(args, info);
  }

  @Mutation('deletePageTranslation')
  public async deletePageTranslation(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deletePageTranslation(args, info);
  }

  @Subscription('pageTranslation')
  public pageTranslation() {
    return {
      subscribe: (obj, args, context, info) => {
        return this.prisma.subscription.pageTranslation(args, info);
      },
    };
  }

}
