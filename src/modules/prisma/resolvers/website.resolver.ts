import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

@Resolver('website')
export class WebsiteResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('website')
  public async getWebsite(obj, args, context, info): Promise<any> {
    return await this.prisma.query.website(args, info);
  }

  @Query('websites')
  public async getWebsites(obj, args, context, info): Promise<any> {
    return await this.prisma.query.websites(args, info);
  }

  @Mutation('createWebsite')
  public async createWebsite(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createWebsite(args, info);
  }

  @Mutation('updateWebsite')
  public async updateWebsite(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updateWebsite(args, info);
  }

  @Mutation('deleteWebsite')
  public async deleteWebsite(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deleteWebsite(args, info);
  }

}
