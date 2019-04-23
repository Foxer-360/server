import { Resolver, Mutation, Query, Subscription } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';
import { lookupService } from 'dns';
import { Foxer360AuthService } from '../../../common/services/foxer360auth.service';

@Resolver('pageTask')
export class PageTaskResolver {
  constructor(private readonly prisma: Prisma,
              private readonly foxer360auth: Foxer360AuthService) {}

  @Query('pageTask')
  public async getPageTask(obj, args, context, info): Promise<any> {
    const users = await this.foxer360auth.getAllUsers();

    const pageTask: any = await this.prisma.query.pageTask(args, info);
    const pageTaskWithAuth0id = await this.prisma.query.pageTask({ where: { id: pageTask.id } }, '{ id auth0id }');
    pageTask.user = users.find(user => user.auth0id === pageTaskWithAuth0id.auth0id);
    return pageTask;
  }

  @Query('pageTasks')
  public async getPageTasks(obj, args, context, info): Promise<any> {
    const users = await this.foxer360auth.getAllUsers();

    const pageTasks = await this.prisma.query.pageTasks(args, info);
    const pageTasksWithAuth0id = await this.prisma.query.pageTasks(args, '{ id auth0id }');
    return pageTasks
      .map((pageTask: any) => ({ ...pageTask, ...(pageTasksWithAuth0id.find(p => p.id === pageTask.id) || {}) }))
      .map((pageTask: any) => {
        if (pageTask.auth0id) {
          pageTask.user = users.find(user => user.auth0id === pageTask.auth0id);
        } else {
          pageTask.user = null;
        }
        return pageTask;
      });
  }

  @Mutation('createPageTask')
  public async createPageTask(obj, args, context, info): Promise<any> {
    const users = await this.foxer360auth.getAllUsers();

    const auth0id = context.user && context.user.sub.split('|')[1];
    const pageTask: any = await this.prisma.mutation.createPageTask({ ...args, data: { ...args.data, auth0id } }, info);
    const pageTaskWithAuth0id = await this.prisma.query.pageTask({ where: { id: pageTask.id } }, '{ id auth0id }');
    pageTask.user = users.find(user => user.auth0id === pageTaskWithAuth0id.auth0id);
    return pageTask;
  }

  @Mutation('updatePageTask')
  public async updatePageTask(obj, args, context, info): Promise<any> {
    const users = await this.foxer360auth.getAllUsers();

    const pageTask: any = await this.prisma.mutation.updatePageTask(args, info);
    const pageTaskWithAuth0id = await this.prisma.query.pageTask({ where: { id: pageTask.id } }, '{ id auth0id }');
    pageTask.user = users.find(user => user.auth0id === pageTaskWithAuth0id.auth0id);
    return pageTask;
  }

  @Mutation('deletePageTask')
  public async deletePageTask(obj, args, context, info): Promise<any> {
    const pageTask: any = await this.prisma.mutation.deletePageTask(args, info);
    return pageTask;
  }

  @Subscription('pageTask')
  public pageTask() {
    return {
      resolve: async (payload, args, context, info) => {
        const users = await this.foxer360auth.getAllUsers();
        const { pageTask } = payload;
        if (pageTask.node.id) {
          const pageTaskWithAuth0id = await this.prisma.query.pageTask({ where: { id: pageTask.node.id } }, '{ id auth0id }');
          pageTask.node.user = users.find(user => user.auth0id === pageTaskWithAuth0id.auth0id);
        }

        return pageTask;
      },
      subscribe: (obj, args, context, info) => {
        return this.prisma.subscription.pageTask(args, info);
      },
    };
  }
}
