import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

@Resolver('componentTemplate')
export class ComponentTemplateResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('componentTemplate')
  public async componentTemplate(obj, args, context, info): Promise<any> {
    return await this.prisma.query.componentTemplate(args, info);
  }
  @Query('componentTemplates')
  public async componentTemplates(obj, args, context, info): Promise<any> {
    return await this.prisma.query.componentTemplates(args, info) || [];
  }

  @Mutation('createComponentTemplate')
  public async createComponentTemplate(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createComponentTemplate(args, info);
  }

  @Mutation('updateComponentTemplate')
  public async updateComponentTemplate(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updateComponentTemplate(args, info);
  }

  @Mutation('deleteComponentTemplate')
  public async deleteComponentTemplate(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deleteComponentTemplate(args, info);
  }

}
