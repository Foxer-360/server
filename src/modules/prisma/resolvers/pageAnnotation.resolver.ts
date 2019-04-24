import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

import { AuthGuard } from 'common/guards/auth.guard';

@Resolver('pageAnnotation')
@UseGuards(AuthGuard)
export class PageAnnotationResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('pageAnnotation')
  public async getPageAnnotation(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pageAnnotation(args, info);
  }
  @Query('pageAnnotations')
  public async getPageAnnotations(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pageAnnotations(args, info);
  }

  @Mutation('createPageAnnotation')
  public async createPageAnnotation(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createPageAnnotation(args, info);
  }

  @Mutation('updatePageAnnotation')
  public async updatePageAnnotation(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updatePageAnnotation(args, info);
  }

  @Mutation('deletePageAnnotation')
  public async deletePageAnnotation(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deletePageAnnotation(args, info);
  }

}
