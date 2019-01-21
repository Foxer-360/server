import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Req } from '@nestjs/common';
import { Prisma } from 'generated/prisma';

@Resolver('subscriber')
export class SubscriberResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('subscriber')
  public async getSubscriber(obj, args, context, info): Promise<any> {
    return await this.prisma.query.subscriber(args, info);
  }

  @Query('subscribers')
  public async getSubscribers(obj, args, context, info): Promise<any> {
    return await this.prisma.query.subscribers(args, info);
  }

  @Mutation('createSubscriber')
  public async createSubscriber(obj, args, context, info): Promise<any> {
    const ip = context.headers['x-forwarded-for'] || context.ip || 'Ip address didn\'t captured.';
    return await this.prisma.mutation.createSubscriber({ ...args, data: { ...args.data, ip } }, info);
  }

  @Mutation('updateSubscriber')
  public async updateSubscriber(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updateSubscriber(args, info);
  }

  @Mutation('deleteSubscriber')
  public async deleteSubscriber(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deleteSubscriber(args, info);
  }

}
