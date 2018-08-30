import { Composer } from './entities/composer.entity';
import { Auth } from './entities/auth.entity';
import { Prisma } from 'generated/prisma';

/**
 * Define Storage object which can be Injected
 * into constructor via StorageModule
 */
export interface Storage {
  composer: Composer;
  auth: Auth;
}

export const storageProvider = {
  provide: 'Storage',
  useFactory: (prisma: Prisma) => {
    // Create new instance of Composer storage
    const composer = new Composer(prisma);

    // Create new instance of Auth storage
    const auth = new Auth();

    return {
      auth,
      composer,
    } as Storage;
  },
  inject: [Prisma],
};
