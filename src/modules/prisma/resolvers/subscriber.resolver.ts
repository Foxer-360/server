import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { SESNotifier } from 'utils/ses-notifier';
import { Prisma } from 'generated/prisma';

import { AuthGuard } from 'common/guards/auth.guard';

@Resolver('subscriber')
@UseGuards(AuthGuard)
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

    // Notification about subscription
    const content =
      `E-mail: ${args.data.email}\n\n` +
      `Source: ${args.data.url}\n` +
      `IP: ${ip}\n`;

    SESNotifier.notify(
      `[subscription] ~ ${args.data.email}`,
      content,
    );

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
