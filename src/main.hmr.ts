import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from 'modules/application/app.module';
import { config } from 'dotenv';
import { EnvironmentException } from 'common/exceptions/environment.exception';
import * as cors from 'cors';

declare const module: any;

// Load configurations from .env file
config();

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  // Use CORS
  app.use(cors());

  if (!process.env.SERVER_PORT) {
    throw new EnvironmentException('SERVER_PORT');
  }

  await app.listen(process.env.SERVER_PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
