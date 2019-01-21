import {Module, Injectable, NestMiddleware, MiddlewareConsumer, RequestMethod} from '@nestjs/common';

import { InquiryController } from './inquiry.controller';
import { prismaProvider } from '../../prisma/prisma.provider';

@Module({
  imports: [
  ],
  controllers: [InquiryController],
  providers: [
    prismaProvider,
  ],
  exports: [
  ],
})

export class InquiryModule {
}