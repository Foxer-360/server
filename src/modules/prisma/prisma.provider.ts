import { config } from 'dotenv';
import { EnvironmentException } from 'common/exceptions/environment.exception';
import { Prisma } from 'generated/prisma';

// Load config from .env
config();

export const prismaProvider = {
  provide: Prisma,
  useFactory: () => {
    const endpoint = process.env.PRISMA_ENDPOINT;
    if (!endpoint) {
      throw new EnvironmentException('PRISMA_ENDPOINT');
    }

    return new Prisma({
      endpoint,
      debug: false,
    });
  },
};
