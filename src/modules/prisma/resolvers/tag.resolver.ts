import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

import { AuthGuard } from 'common/guards/auth.guard';

@Resolver('tag')
@UseGuards(AuthGuard)
export class TagResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('tag')
  public async getTag(obj, args, context, info): Promise<any> {
    return await this.prisma.query.tag(args, info);
  }
  @Query('tags')
  public async getTags(obj, args, context, info): Promise<any> {
    return await this.prisma.query.tags(args, info);
  }

  @Mutation('createTag')
  public async createTag(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createTag(args, info);
  }

  @Mutation('updateTag')
  public async updateTag(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updateTag(args, info);
  }

  @Mutation('deleteTag')
  public async deleteTag(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deleteTag(args, info);
  }

}
