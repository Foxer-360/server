import {Module, Injectable, NestMiddleware, MiddlewareConsumer, RequestMethod} from '@nestjs/common';

import { InquiryController } from './inquiry.controller';

import * as multer from 'multer'; // upload application

@Injectable()
export class MulterMiddleware implements NestMiddleware {
  public resolve(): (req, res, next) => void {
    const upload = multer({dest: '/tmp'});
    return upload.any();
  }
}

@Module({
  imports: [
  ],
  controllers: [InquiryController],
  providers: [
  ],
  exports: [
  ],
})

export class InquiryModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MulterMiddleware)
      .forRoutes({path: '/inquiry/upload', method: RequestMethod.POST});
  }
}