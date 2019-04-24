import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';
import { asyncForEach } from 'utils';

import { AuthGuard } from 'common/guards/auth.guard';

@Resolver('navigation')
@UseGuards(AuthGuard)
export class NavigationResolver {

  constructor(private readonly prisma: Prisma) { }

  // Navigation

  @Query('navigations')
  public async getNavigations(obj, args, context, info): Promise<any> {
    return await this.prisma.query.navigations(args, info);
  }

  @Mutation('createNavigation')
  public async createNavigation(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createNavigation(args, info);
  }

  @Mutation('updateNavigation')
  public async updateNavigation(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updateNavigation(args, info);
  }

  @Mutation('deleteNavigation')
  public async deleteNavigation(obj, args, context, info): Promise<any> {
    const id = args.where.id;
    await this.prisma.mutation.deleteManyNavigationNodes({ where: { navigation: { id } } });
    return await this.prisma.mutation.deleteNavigation(args, info);
  }

  // Nodes

  @Query('navigationNodes')
  public async getNavigationNodes(obj, args, context, info): Promise<any> {
    return await this.prisma.query.navigationNodes(args, info);
  }

  @Mutation('deleteNavigationNode')
  public async deleteNavigationNode(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deleteNavigationNode(args, info);
  }

  @Mutation('createNavigationStructure')
  public async createNavigationStructure(obj, args, context, info): Promise<any> {
    const nodes: Array<any> = args.data;
    const id: string = args.navigation;

    await this.prisma.mutation.deleteManyNavigationNodes({ where: { navigation: { id } } });

    await asyncForEach(nodes, async (node) => {
      await this.prisma.mutation.createNavigationNode({ data: node });
    });

    return await this.prisma.query.navigationNodes({ where: { navigation: { id } } }, info);
  }

}
