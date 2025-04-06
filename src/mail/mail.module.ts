import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailConfig } from './mailer.config';

@Module({
  imports: [MailerModule.forRoot(mailConfig)],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailerModule]
})
export class MailModule {}
