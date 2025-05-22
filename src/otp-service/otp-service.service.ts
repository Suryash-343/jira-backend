import { Injectable } from '@nestjs/common';
import { CreateOtpServiceDto } from './dto/create-otp-service.dto';
import { UpdateOtpServiceDto } from './dto/update-otp-service.dto';

@Injectable()
export class OtpServiceService {
  create(createOtpServiceDto: CreateOtpServiceDto) {
    return 'This action adds a new otpService';
  }

  findAll() {
    return `This action returns all otpService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otpService`;
  }

  update(id: number, updateOtpServiceDto: UpdateOtpServiceDto) {
    return `This action updates a #${id} otpService`;
  }

  remove(id: number) {
    return `This action removes a #${id} otpService`;
  }
}
