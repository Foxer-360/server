import request from 'supertest';
import { Test } from '@nestjs/testing';
import { ApplicationModule } from './../src/modules/application/app.module';
import { INestApplication } from '@nestjs/common';

describe('ApplicationController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [ApplicationModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Server for Composer CMS is running...');
  });
});
