import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

@Resolver('project')
export class ProjectResolver {

  constructor(private readonly prisma: Prisma) {}

  @Query('project')
  public async getProject(obj, args, context, info): Promise<any> {
    return await this.prisma.query.project(args, info);
  }

  @Query('projects')
  public async getProjects(obj, args, context, info): Promise<any> {
    return await this.prisma.query.projects(args, info);
  }

  @Mutation('createProject')
  public async createProject(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.createProject(args, info);
  }

  @Mutation('updateProject')
  public async updateProject(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.updateProject(args, info);
  }

  @Mutation('deleteProject')
  public async deleteProject(obj, args, context, info): Promise<any> {
    return await this.prisma.mutation.deleteProject(args, info);
  }

}
