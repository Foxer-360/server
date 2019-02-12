import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

@Resolver('datasource')
export class DatasourceResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('datasource')
  public async getDatasource(obj, args, context, info): Promise<any> {
    return await this.prisma.query.datasource(args, info);
  }

  @Query('datasources')
  public async getDatasources(obj, args, context, info): Promise<any> {
    return await this.prisma.query.datasources(args, info);
  }

  @Mutation('createDatasource')
  public async createDatasource(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createDatasource(args, info);
  }

  @Mutation('updateDatasource')
  public async updateDatasource(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updateDatasource(args, info);
  }

  @Mutation('deleteDatasource')
  public async deleteDatasource(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deleteDatasource(args, info);
  }

}
