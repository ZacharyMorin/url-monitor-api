import { PartialType } from '@nestjs/mapped-types';
import { CreateMonitorLinkDto } from './create-monitor-link.dto';

export class UpdateMonitorLinkDto extends PartialType(CreateMonitorLinkDto) {}
