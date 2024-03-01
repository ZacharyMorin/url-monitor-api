import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { MonitorLinkService } from './monitor-link.service';
import { CreateMonitorLinkDto } from './dto/create-monitor-link.dto';
import { UpdateMonitorLinkDto } from './dto/update-monitor-link.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('monitor-link')
export class MonitorLinkController {
  constructor(private readonly monitorLinkService: MonitorLinkService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.monitorLinkService.processCSV(file.buffer);
  }

  @Post()
  create(@Body() createMonitorLinkDto: CreateMonitorLinkDto) {
    return this.monitorLinkService.create(createMonitorLinkDto);
  }

  @Get(':id')
  getUserMonitorLinks(@Param('id') userId: string) {
    return this.monitorLinkService.getUserMonitorLinks(userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMonitorLinkDto: UpdateMonitorLinkDto,
  ) {
    return this.monitorLinkService.update(id, updateMonitorLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monitorLinkService.remove(id);
  }
}
