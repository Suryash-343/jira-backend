import { Injectable } from '@nestjs/common';
import { SendMailDto } from './dto/send-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
  ) {}
 
  async sendMail(sendMailDto: SendMailDto) {
    // Implement your mail sending logic here
    try{
     const resp= await this.mailerService.sendMail({
        to: sendMailDto.to,
        from: sendMailDto.from,
        subject: sendMailDto.subject,
        text: sendMailDto.content,
      })
      console.log(resp, '---->>', sendMailDto)
      return {
        status: 200,
        message: `Mail sent to ${String(sendMailDto.to)} successfully`,
      };
    } catch(error){

      console.error('Error sending mail:', error);
      return {
        status: 500,
        message: `Mail Failed`,
      };
    }
  }
}
