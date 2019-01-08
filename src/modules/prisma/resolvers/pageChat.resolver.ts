import { Resolver, Mutation, Query, Subscription } from '@nestjs/graphql';
import { Prisma, PageChatSubscriptionPayload } from 'generated/prisma';
import { request } from 'graphql-request';

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

@Resolver('pageChat')
export class PageChatResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('pageChat')
  public async getPageChat(obj, args, context, info): Promise<any> {

    const users: any = await getUsers();

    const pageChat: any = await this.prisma.query.pageChat(args, info);
    const pageChatWithAuth0id = await this.prisma.query.pageChat({ where: { id: pageChat.id } }, '{ id auth0id }');
    pageChat.user = users.find(user => user.auth0id === pageChatWithAuth0id.auth0id);
    return pageChat;
  }

  @Query('pageChats')
  public async getPageChats(obj, args, context, info): Promise<any> {

    const users: any = await getUsers();

    const pageChats = await this.prisma.query.pageChats(args, info);
    const pageChatsWithAuth0id = await this.prisma.query.pageChats(args, '{ id auth0id }');

    return pageChats
      .map((pageChat: any) => ({ ...pageChat, ...(pageChatsWithAuth0id.find(p => p.id === pageChat.id) || {}) }))
      .map((pageChat: any) => {
        if (pageChat.auth0id) {
          pageChat.user = users.find(user => user.auth0id === pageChat.auth0id);
        } else {
          pageChat.user = null;
        }
        return pageChat;
    });
  }

  @Mutation('createPageChat')
  public async createPageChat(obj, args, context, info): Promise<any> {

    const users: any = await getUsers();

    const auth0id = context.user && context.user.sub.split('|')[1];
    const pageChat: any = await this.prisma.mutation.createPageChat({ ...args, data: { ...args.data, auth0id } }, info);
    const pageChatWithAuth0id = await this.prisma.query.pageChat({ where: { id: pageChat.id } }, '{ id auth0id }');
    pageChat.user = users.find(user => user.auth0id === pageChatWithAuth0id.auth0id);
    return pageChat;
  }

  @Mutation('updatePageChat')
  public async updatePageChat(obj, args, context, info): Promise<any> {

    const users: any = await getUsers();

    const pageChat: any = await this.prisma.mutation.updatePageChat(args, info);
    const pageChatWithAuth0id = await this.prisma.query.pageChat({ where: { id: pageChat.id } }, '{ id auth0id }');
    pageChat.user = users.find(user => user.auth0id === pageChatWithAuth0id.auth0id);
    return pageChat;
  }

  @Mutation('deletePageChat')
  public async deletePageChat(obj, args, context, info): Promise<any> {

    const pageChat: any = await this.prisma.mutation.deletePageChat(args, info);
    return pageChat;
  }

  @Subscription('pageChat')
  public pageChat() {
    return {
      resolve: async (payload, args, context, info) => {
        const users: any = await getUsers();
        const { pageChat } = payload;
        if (pageChat.node.id) {
          const pageChatWithAuth0id = await this.prisma.query.pageChat({ where: { id: pageChat.node.id } }, '{ id auth0id }');
          pageChat.node.user = users.find(user => user.auth0id === pageChatWithAuth0id.auth0id);
        }

        return pageChat;
      },
      subscribe: (obj, args, context, info) => {
        return this.prisma.subscription.pageChat(args, info);
      },
    };
  }

}
