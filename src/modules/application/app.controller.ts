import { Get, Controller } from '@nestjs/common';
import { ApplicationService } from './app.service';

import { Prisma } from '../../generated/prisma';
import { Foxer360AuthService } from '../../common/services/foxer360auth.service';

@Controller()
export class ApplicationController {

  constructor(private readonly applicationService: ApplicationService,
              private readonly prisma: Prisma,
              private readonly foxer360Service: Foxer360AuthService) {}

  @Get()
  public root(): string {
    return this.applicationService.root();
  }

  @Get('/sync')
  public async sync() {
    const projectsInfo = `{ id name }`;
    const websitesInfo = `{ id title project { id } }`;

    const projects = await this.prisma.query.projects({}, projectsInfo);
    if (!projects) {
      return Promise.resolve('Failed');
    }
    const websites = await this.prisma.query.websites({}, websitesInfo);
    if (!websites) {
      return Promise.resolve('Failed');
    }

    const res = await this.foxer360Service.syncProjectsWebsites(projects, websites);

    return res ? 'Succeed' : 'Failed';
  }

}
