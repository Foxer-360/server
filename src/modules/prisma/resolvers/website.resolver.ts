import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

import { Foxer360AuthService } from '../../../common/services/foxer360auth.service';

@Resolver('website')
export class WebsiteResolver {

  constructor(private readonly prisma: Prisma,
              private readonly foxer360auth: Foxer360AuthService) {}

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
    // ADD CODE HERE !!!
    // To sync created website to Foxer360 Auth System
    const website = await this.prisma.mutation.createWebsite(args, `{ id title project { id } }`);
    if (!website || !website.id || !website.title || !website.project || !website.project.id) {
      return Promise.resolve(null);
    }

    await this.foxer360auth.createWebsite(website.id, website.title, website.project.id);

    return await this.prisma.query.website({ where: { id: website.id } }, info);
  }

  @Mutation('updateWebsite')
  public async updateWebsite(obj, args, context, info): Promise<any> {
    // ADD CODE HERE !!!
    // To sync updated website to Foxer360 Auth System
    if (args.data.title) {
      await this.foxer360auth.updateWebsite(args.where.id, args.data.title);
    }

    return await this.prisma.mutation.updateWebsite(args, info);
  }

  @Mutation('deleteWebsite')
  public async deleteWebsite(obj, args, context, info): Promise<any> {
    // ADD CODE HERE !!!
    // To Sync deleted website to Foxer360 Auth System
    await this.foxer360auth.deleteWebsite(args.where.id);

    return await this.prisma.mutation.deleteWebsite(args, info);
  }

}
