import { Module } from '@nestjs/common';
import { storageProvider } from './storage.provider';
import { PrismaModule } from 'modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [storageProvider],
  exports: [storageProvider],
})
export class StorageModule {}
