import { Module } from '@nestjs/common';
import { StorageModule } from 'modules/storage/storage.module';
import { SocketsGateway } from './sockets.gateway';
import { AuthService } from './auth.service';
import { ComposerService } from './composer.service';

@Module({
  imports: [ StorageModule ],
  providers: [ SocketsGateway, AuthService, ComposerService ],
})
export class SocketsModule {}
