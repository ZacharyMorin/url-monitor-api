import { Injectable } from '@nestjs/common';
import { CreateMonitorLinkDto } from './dto/create-monitor-link.dto';
import { UpdateMonitorLinkDto } from './dto/update-monitor-link.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MonitorLink } from './entities/monitor-link.entity';
import { Model } from 'mongoose';

@Injectable()
export class MonitorLinkService {
  constructor(
    @InjectModel(MonitorLink.name) private monitorLinkModel: Model<MonitorLink>,
  ) {}

  create(createMonitorLinkDto: CreateMonitorLinkDto) {
    const createdMonitorLink = this.monitorLinkModel.create({
      url: createMonitorLinkDto.url,
      status: createMonitorLinkDto.status,
      user: createMonitorLinkDto.userId,
      notificationEmails: createMonitorLinkDto.notificationEmails,
    });

    createdMonitorLink.then((monitorLink) => {
      monitorLink.populate('user');
    });
  }

  getUserMonitorLinks(id: string) {
    return this.monitorLinkModel.find({ user: id });
  }

  update(id: string, updateMonitorLinkDto: UpdateMonitorLinkDto) {
    this.monitorLinkModel
      .findByIdAndUpdate(id, updateMonitorLinkDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    this.monitorLinkModel.findByIdAndDelete(id).exec();
  }
}
