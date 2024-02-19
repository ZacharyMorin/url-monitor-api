import { Test, TestingModule } from '@nestjs/testing';
import { MonitorLinkController } from './monitor-link.controller';
import { MonitorLinkService } from './monitor-link.service';

describe('MonitorLinkController', () => {
  let controller: MonitorLinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonitorLinkController],
      providers: [MonitorLinkService],
    }).compile();

    controller = module.get<MonitorLinkController>(MonitorLinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
