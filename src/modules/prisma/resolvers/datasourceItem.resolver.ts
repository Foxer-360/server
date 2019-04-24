import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

import { AuthGuard } from 'common/guards/auth.guard';

@Resolver('datasourceItem')
@UseGuards(AuthGuard)
export class DatasourceItemResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('datasourceItem')
  public async getDatasourceItem(obj, args, context, info): Promise<any> {
    return await this.prisma.query.datasourceItem(args, info);
  }
  @Query('datasourceItems')
  public async getDatasourceItems(obj, args, context, info): Promise<any> {
    return await this.prisma.query.datasourceItems(args, info);
  }

  @Mutation('createDatasourceItem')
  public async createDatasourceItem(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createDatasourceItem(args, info);
  }

  @Mutation('updateDatasourceItem')
  public async updateDatasourceItem(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updateDatasourceItem(args, info);
  }

  @Mutation('deleteDatasourceItem')
  public async deleteDatasourceItem(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deleteDatasourceItem(args, info);
  }

}
