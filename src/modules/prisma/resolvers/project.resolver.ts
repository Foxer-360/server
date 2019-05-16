import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { Prisma } from 'generated/prisma';

import { Foxer360AuthService } from '../../../common/services/foxer360auth.service';
import { parseAccessTokenFromHeader } from '../../../utils';
import { AuthGuard } from 'common/guards/auth.guard';

@Resolver('project')
@UseGuards(AuthGuard)
export class ProjectResolver {

  constructor(private readonly prisma: Prisma,
              private readonly foxer360auth: Foxer360AuthService) {}

  @Query('project')
  public async getProject(obj, args, context, info): Promise<any> {
    const accessToken = parseAccessTokenFromHeader(context.headers);
    if (!accessToken) {
      return Promise.resolve(null);
    }

    // Get enabled projects
    const enabledProjects = await this.foxer360auth.enabledProjects(accessToken);
    const enabledWebsites = await this.foxer360auth.enabledWebsites(accessToken);
    const project = await this.prisma.query.project(args, info);
    if (!project || enabledProjects.indexOf(project.id) < 0) {
      return Promise.resolve(null);
    }
    if (project.websites) {
      project.websites = project.websites.filter((web) => enabledWebsites.indexOf(web.id) >= 0);
    }

    return project;
  }

  @Query('projects')
  public async getProjects(obj, args, context, info): Promise<any> {
    const accessToken = parseAccessTokenFromHeader(context.headers);
    if (!accessToken) {
      return Promise.resolve([]);
    }

    // Get enabled projects
    const enabledProjects = await this.foxer360auth.enabledProjects(accessToken);
    const enabledWebsites = await this.foxer360auth.enabledWebsites(accessToken);
    const projects = await this.prisma.query.projects(args, info);
    if (!projects || projects.length < 1) {
      return Promise.resolve([]);
    }

    const filteredProjects = projects.filter((project) => enabledProjects.indexOf(project.id) >= 0);
    filteredProjects.forEach((project) => {
      if (!project.websites) {
        return;
      }
      project.websites = project.websites.filter((web) => enabledWebsites.indexOf(web.id) >= 0);
    });
    return filteredProjects;
  }

  @Mutation('createProject')
  public async createProject(obj, args, context, info): Promise<any> {
    const accessToken = parseAccessTokenFromHeader(context.headers);
    if (!accessToken) {
      return Promise.resolve(null);
    }

    if (!await this.foxer360auth.isUserOwner(accessToken)) {
      return Promise.resolve(null);
    }

    const project = await this.prisma.mutation.createProject(args, `{ id name }`);
    if (!project || !project.id || !project.name) {
      return Promise.resolve(null);
    }

    await this.foxer360auth.createProject(project.id, project.name);

    return await this.prisma.query.project({ where: { id: project.id } }, info);
  }

  @Mutation('updateProject')
  public async updateProject(obj, args, context, info): Promise<any> {
    const accessToken = parseAccessTokenFromHeader(context.headers);
    if (!accessToken) {
      return Promise.resolve(null);
    }

    if (!await this.foxer360auth.isUserOwner(accessToken)) {
      return Promise.resolve(null);
    }

    if (args.data.name) {
      await this.foxer360auth.updateProject(args.where.id, args.data.name);
    }

    return await this.prisma.mutation.updateProject(args, info);
  }

  @Mutation('deleteProject')
  public async deleteProject(obj, args, context, info): Promise<any> {
    const accessToken = parseAccessTokenFromHeader(context.headers);
    if (!accessToken) {
      return Promise.resolve(null);
    }

    if (!await this.foxer360auth.isUserOwner(accessToken)) {
      return Promise.resolve(null);
    }

    await this.foxer360auth.deleteProject(args.where.id);

    return await this.prisma.mutation.deleteProject(args, info);
  }

}
