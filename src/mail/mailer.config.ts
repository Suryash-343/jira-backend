import { MailerOptions } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";

export const mailConfig : MailerOptions = {
    transport: {
      host: String(process.env.MAIL_HOST),
      port: Number(process.env.MAIL_PORT),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    },
    defaults: {
      from: `"No Reply" <no-reply@localhost>`,
    },
    preview: true,
    template: {
      dir: process.cwd() + './template/',
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }