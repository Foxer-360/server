import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ApplicationController } from './app.controller';
import { ApplicationService } from './app.service';

describe('ApplicationController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ApplicationController],
      providers: [ApplicationService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Server for Composer CMS is running..."', () => {
      const appController = app.get<ApplicationController>(ApplicationController);
      expect(appController.root()).toBe('Server for Composer CMS is running...');
    });
  });
});
