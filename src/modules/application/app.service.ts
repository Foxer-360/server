import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplicationService {

  public root(): string {
    return 'Server for Composer CMS is running...';
  }

}
