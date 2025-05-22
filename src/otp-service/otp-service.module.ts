import { Module } from '@nestjs/common';
import { OtpServiceService } from './otp-service.service';
import { OtpServiceController } from './otp-service.controller';

@Module({
  controllers: [OtpServiceController],
  providers: [OtpServiceService],
})
export class OtpServiceModule {}
