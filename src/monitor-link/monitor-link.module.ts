import { Module } from '@nestjs/common';
import { MonitorLinkService } from './monitor-link.service';
import { MonitorLinkController } from './monitor-link.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MonitorLinkSchema } from './entities/monitor-link.entity';

@Module({
  controllers: [MonitorLinkController],
  providers: [MonitorLinkService],
  imports: [
    MongooseModule.forFeature([
      { name: 'MonitorLink', schema: MonitorLinkSchema },
    ]),
  ],
})
export class MonitorLinkModule {}
