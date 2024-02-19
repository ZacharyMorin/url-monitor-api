import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  password: string;

  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly email: string;
}
