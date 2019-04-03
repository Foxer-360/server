import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

import { Foxer360AuthService } from '../../../common/services/foxer360auth.service';

@Resolver('project')
export class ProjectResolver {

  constructor(private readonly prisma: Prisma,
              private readonly foxer360auth: Foxer360AuthService) {}

  @Query('project')
  public async getProject(obj, args, context, info): Promise<any> {
    return await this.prisma.query.project(args, info);
  }

  @Query('projects')
  public async getProjects(obj, args, context, info): Promise<any> {
    // Just get info about context
    // tslint:disable-next-line:no-console
    console.log('Context: ', context.headers.authorization);
    return await this.prisma.query.projects(args, info);
  }

  @Mutation('createProject')
  public async createProject(obj, args, context, info): Promise<any> {
    // ADD CODE HERE !!!
    // To sync created project to Foxer360 Auth System
    const project = await this.prisma.mutation.createProject(args, `{ id name }`);
    if (!project || !project.id || !project.name) {
      return Promise.resolve(null);
    }

    await this.foxer360auth.createProject(project.id, project.name);

    return await this.prisma.query.project({ where: { id: project.id } }, info);
  }

  @Mutation('updateProject')
  public async updateProject(obj, args, context, info): Promise<any> {
    // ADD CODE HERE !!!
    // To sync updated project to Foxer360 Auth System
    if (args.data.name) {
      await this.foxer360auth.updateProject(args.where.id, args.data.name);
    }

    return await this.prisma.mutation.updateProject(args, info);
  }

  @Mutation('deleteProject')
  public async deleteProject(obj, args, context, info): Promise<any> {
    // ADD CODE HERE !!!
    // To sync deleted project to Foxer360 Auth System
    await this.foxer360auth.deleteProject(args.where.id);

    return await this.prisma.mutation.deleteProject(args, info);
  }

}
