import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateMonitorLinkDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsArray()
  @IsString({ each: true })
  notificationEmails: string[];
}
