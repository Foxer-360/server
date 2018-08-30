import { Resolver, Mutation, Query, Subscription } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

@Resolver('pageChat')
export class PageChatResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('pageChat')
  public async getPageChat(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pageChat(args, info);
  }
  @Query('pageChats')
  public async getPageChats(obj, args, context, info): Promise<any> {
    return await this.prisma.query.pageChats(args, info);
  }

  @Mutation('createPageChat')
  public async createPageChat(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createPageChat(args, info);
  }

  @Mutation('updatePageChat')
  public async updatePageChat(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updatePageChat(args, info);
  }

  @Mutation('deletePageChat')
  public async deletePageChat(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deletePageChat(args, info);
  }

  @Subscription('pageChat')
  public pageChat() {
    return {
      subscribe: (obj, args, context, info) => {
        return this.prisma.subscription.pageChat(args, info);
      }
    }
  }

}
