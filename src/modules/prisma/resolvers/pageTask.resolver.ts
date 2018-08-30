import { Resolver, Mutation, Query, Subscription } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

@Resolver('pageTask')
export class PageTaskResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('pageTask')
  public async getPageTask(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pageTask(args, info);
  }
  @Query('pageTasks')
  public async getPageTasks(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pageTasks(args, info);
  }

  @Mutation('createPageTask')
  public async createPageTask(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createPageTask(args, info);
  }

  @Mutation('updatePageTask')
  public async updatePageTask(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updatePageTask(args, info);
  }

  @Mutation('deletePageTask')
  public async deletePageTask(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deletePageTask(args, info);
  }

  @Subscription('pageTask')
  public pageTask() {
    return {
      subscribe: (obj, args, context, info) => {
        return this.prisma.subscription.pageTask(args, info);
      }
    };
  }

}
