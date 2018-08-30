import { Module } from '@nestjs/common';
import { ApplicationController } from './app.controller';
import { ApplicationService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { StorageModule } from 'modules/storage/storage.module';
import { SocketsModule } from 'modules/sockets/sockets.module';

@Module({
  imports: [PrismaModule, StorageModule, SocketsModule],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
