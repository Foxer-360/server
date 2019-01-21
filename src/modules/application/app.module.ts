import { Module } from '@nestjs/common';
import { ApplicationController } from './app.controller';
import { ApplicationService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { StorageModule } from 'modules/storage/storage.module';
import { SocketsModule } from 'modules/sockets/sockets.module';
import { InquiryModule } from 'modules/rest/inquiry/inquiry.module';

@Module({
  imports: [PrismaModule, StorageModule, SocketsModule, InquiryModule],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
