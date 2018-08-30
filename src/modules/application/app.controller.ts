import { Get, Controller } from '@nestjs/common';
import { ApplicationService } from './app.service';

@Controller()
export class ApplicationController {

  constructor(private readonly applicationService: ApplicationService) {}

  @Get()
  public root(): string {
    return this.applicationService.root();
  }

}
