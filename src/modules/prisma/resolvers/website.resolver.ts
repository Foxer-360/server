import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

import { Foxer360AuthService } from '../../../common/services/foxer360auth.service';
import { parseAccessTokenFromHeader } from '../../../utils';
import { AuthGuard } from 'common/guards/auth.guard';

@Resolver('website')
@UseGuards(AuthGuard)
export class WebsiteResolver {

  constructor(private readonly prisma: Prisma,
              private readonly foxer360auth: Foxer360AuthService) {}

  @Query('website')
  public async getWebsite(obj, args, context, info): Promise<any> {
    const accessToken = parseAccessTokenFromHeader(context.headers);
    if (!accessToken) {
      return Promise.resolve(null);
    }

    // Get enabled websites
    const enabledWebsites = await this.foxer360auth.enabledWebsites(accessToken);
    const website = await this.prisma.query.website(args, info);
    if (!website || enabledWebsites.indexOf(website.id) < 0) {
      return Promise.resolve(null);
    }

    return website;
  }

  @Query('websites')
  public async getWebsites(obj, args, context, info): Promise<any> {
    const accessToken = parseAccessTokenFromHeader(context.headers);
    if (!accessToken) {
      return Promise.resolve([]);
    }

    // Get enabled websites
    const enabledWebsites = await this.foxer360auth.enabledWebsites(accessToken);
    const websites = await this.prisma.query.websites(args, info);
    if (!websites || websites.length < 1) {
      return Promise.resolve([]);
    }

    const filteredWebsites = websites.filter((website) => enabledWebsites.indexOf(website.id) >= 0);
    return filteredWebsites;
  }

  @Mutation('createWebsite')
  public async createWebsite(obj, args, context, info): Promise<any> {
    const accessToken = parseAccessTokenFromHeader(context.headers);
    if (!accessToken) {
      return Promise.resolve(null);
    }

    if (!await this.foxer360auth.isUserOwner(accessToken)) {
      return Promise.resolve(null);
    }

    const website = await this.prisma.mutation.createWebsite(args, `{ id title project { id } }`);
    if (!website || !website.id || !website.title || !website.project || !website.project.id) {
      return Promise.resolve(null);
    }

    await this.foxer360auth.createWebsite(website.id, website.title, website.project.id);

    return await this.prisma.query.website({ where: { id: website.id } }, info);
  }

  @Mutation('updateWebsite')
  public async updateWebsite(obj, args, context, info): Promise<any> {
    const accessToken = parseAccessTokenFromHeader(context.headers);
    if (!accessToken) {
      return Promise.resolve(null);
    }

    if (!await this.foxer360auth.isUserOwner(accessToken)) {
      return Promise.resolve(null);
    }

    if (args.data.title) {
      await this.foxer360auth.updateWebsite(args.where.id, args.data.title);
    }

    return await this.prisma.mutation.updateWebsite(args, info);
  }

  @Mutation('deleteWebsite')
  public async deleteWebsite(obj, args, context, info): Promise<any> {
    const accessToken = parseAccessTokenFromHeader(context.headers);
    if (!accessToken) {
      return Promise.resolve(null);
    }

    if (!await this.foxer360auth.isUserOwner(accessToken)) {
      return Promise.resolve(null);
    }

    await this.foxer360auth.deleteWebsite(args.where.id);

    return await this.prisma.mutation.deleteWebsite(args, info);
  }

}
