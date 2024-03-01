import { Injectable } from '@nestjs/common';
import { CreateMonitorLinkDto } from './dto/create-monitor-link.dto';
import { UpdateMonitorLinkDto } from './dto/update-monitor-link.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MonitorLink } from './entities/monitor-link.entity';
import { Model } from 'mongoose';
import { Readable } from 'stream';
import * as csv from 'csv-parser';

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

  async processCSV(buffer: Buffer) {
    const results: { url: string }[] = [];

    const stream = Readable.from(buffer.toString());
    stream
      .pipe(
        csv({
          headers: ['url'], // Define a header for the data
        }),
      )
      .on('data', (data) => results.push(data))
      .on('end', () => {
        // Now, results contains your CSV file data as JSON
        // You can now insert this into MongoDB
        console.log(results);
      });
  }

  remove(id: string) {
    this.monitorLinkModel.findByIdAndDelete(id).exec();
  }
}
