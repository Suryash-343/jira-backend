import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtpServiceService } from './otp-service.service';
import { CreateOtpServiceDto } from './dto/create-otp-service.dto';
import { UpdateOtpServiceDto } from './dto/update-otp-service.dto';

@Controller('otp-service')
export class OtpServiceController {
  constructor(private readonly otpServiceService: OtpServiceService) {}

  @Post()
  create(@Body() createOtpServiceDto: CreateOtpServiceDto) {
    return this.otpServiceService.create(createOtpServiceDto);
  }

  @Get()
  findAll() {
    return this.otpServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.otpServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOtpServiceDto: UpdateOtpServiceDto) {
    return this.otpServiceService.update(+id, updateOtpServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.otpServiceService.remove(+id);
  }
}
