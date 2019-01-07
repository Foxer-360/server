import { Resolver, Mutation, Query, Subscription } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';
import { request } from 'graphql-request';
import { lookupService } from 'dns';

// TODO place to service
const getUsers = async () => {
  const { users }: any = await request(
    process.env.AUTHORIZATION_API_ADDRESS,
    `
    query {
      users {
        name
        avatar
        email
        auth0id
      }
    }
    `,
  );

  return users;
};

@Resolver('pageTask')
export class PageTaskResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('pageTask')
  public async getPageTask(obj, args, context, info): Promise<any> {

    const users: any = await getUsers();

    const pageTask: any = await this.prisma.query.pageTask(args, info);
    const pageTaskWithAuth0id = await this.prisma.query.pageTask({ where: { id: pageTask.id } }, '{ id auth0id }');
    pageTask.user = users.find(user => user.auth0id === pageTaskWithAuth0id.auth0id);
    return pageTask;
  }

  @Query('pageTasks')
  public async getPageTasks(obj, args, context, info): Promise<any> {

    const users: any = await getUsers();

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

    const users: any = await getUsers();

    const auth0id = context.user && context.user.sub.split('|')[1];
    const pageTask: any = await this.prisma.mutation.createPageTask({ ...args, data: { ...args.data, auth0id } }, info);
    const pageTaskWithAuth0id = await this.prisma.query.pageTask({ where: { id: pageTask.id } }, '{ id auth0id }');
    pageTask.user = users.find(user => user.auth0id === pageTaskWithAuth0id.auth0id);
    return pageTask;
  }

  @Mutation('updatePageTask')
  public async updatePageTask(obj, args, context, info): Promise<any> {

    const users: any = await getUsers();

    const pageTask: any = await this.prisma.mutation.updatePageTask(args, info);
    const pageTaskWithAuth0id = await this.prisma.query.pageTask({ where: { id: pageTask.id } }, '{ id auth0id }');
    pageTask.user = users.find(user => user.auth0id === pageTaskWithAuth0id.auth0id);
    return pageTask;
  }

  @Mutation('deletePageTask')
  public async deletePageTask(obj, args, context, info): Promise<any> {

    const users: any = await getUsers();

    const pageTask: any = await this.prisma.mutation.deletePageTask(args, info);
    const pageTaskWithAuth0id = await this.prisma.query.pageTask({ where: { id: pageTask.id } }, '{ id auth0id }');
    pageTask.user = users.find(user => user.auth0id === pageTaskWithAuth0id.auth0id);
    return pageTask;
  }

  @Subscription('pageTask')
  public pageTask() {
    return {
      resolve: async (payload, args, context, info) => {
        const users: any = await getUsers();
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
