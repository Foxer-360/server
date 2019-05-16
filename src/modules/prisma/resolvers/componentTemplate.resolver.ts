import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

import { AuthGuard } from 'common/guards/auth.guard';

@Resolver('componentTemplate')
// @UseGuards(AuthGuard)
export class ComponentTemplateResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('componentTemplate')
  public async componentTemplate(obj, args, context, info): Promise<any> {
    return await this.prisma.query.componentTemplate(args, info);
  }
  @Query('componentTemplates')
  public async componentTemplates(obj, args, context, info): Promise<any> {
    return await this.prisma.query.componentTemplates(args, info) || [];
  }

  @UseGuards(AuthGuard)
  @Mutation('createComponentTemplate')
  public async createComponentTemplate(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createComponentTemplate(args, info);
  }

  @UseGuards(AuthGuard)
  @Mutation('updateComponentTemplate')
  public async updateComponentTemplate(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updateComponentTemplate(args, info);
  }

  @UseGuards(AuthGuard)
  @Mutation('deleteComponentTemplate')
  public async deleteComponentTemplate(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deleteComponentTemplate(args, info);
  }

}
