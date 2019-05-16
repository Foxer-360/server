import { UseGuards, Req } from '@nestjs/common';
import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

import { AuthGuard } from 'common/guards/auth.guard';

@Resolver('inquiry')
@UseGuards(AuthGuard)
export class InquiryResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('inquiry')
  public async getInquiry(obj, args, context, info): Promise<any> {
    return await this.prisma.query.inquiry(args, info);
  }

  @Query('inquiries')
  public async getInquiries(obj, args, context, info): Promise<any> {
    return await this.prisma.query.inquiries(args, info);
  }

  @Mutation('createInquiry')
  public async createInquiry(obj, args, context, info): Promise<any> {
    const ip = context.headers['x-forwarded-for'] || context.ip || 'Ip address didn\'t captured.';
    return await this.prisma.mutation.createInquiry({ ...args, data: { ...args.data, ip } }, info);
  }

  @Mutation('updateInquiry')
  public async updateInquiry(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updateInquiry(args, info);
  }

  @Mutation('deleteInquiry')
  public async deleteInquiry(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deleteInquiry(args, info);
  }
}
