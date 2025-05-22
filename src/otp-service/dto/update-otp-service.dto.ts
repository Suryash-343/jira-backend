import { PartialType } from '@nestjs/mapped-types';
import { CreateOtpServiceDto } from './create-otp-service.dto';

export class UpdateOtpServiceDto extends PartialType(CreateOtpServiceDto) {}
