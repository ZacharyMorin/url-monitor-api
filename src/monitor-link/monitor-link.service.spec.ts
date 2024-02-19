import { Test, TestingModule } from '@nestjs/testing';
import { MonitorLinkService } from './monitor-link.service';

describe('MonitorLinkService', () => {
  let service: MonitorLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonitorLinkService],
    }).compile();

    service = module.get<MonitorLinkService>(MonitorLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
