import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { OrganizationsModule } from './organizations/organizations.module';
import { ProjectsModule } from './projects/projects.module';
import { SprintsModule } from './sprints/sprints.module';
import { MailModule } from './mail/mail.module';
import { OtpServiceModule } from './otp-service/otp-service.module';
import { AllExceptionsFilter } from './common/all-exceptions.filter';
import { APP_FILTER } from '@nestjs/core';
import { MongoModule } from './database/mongo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExceptionLog } from './common/entity/exception-filter.entity';
import { ExceptionLogsModule } from './exception-logs/exception-logs.module';

@Module({
  imports: [TasksModule, AuthModule, OrganizationsModule, ProjectsModule, SprintsModule, MailModule, OtpServiceModule, MongoModule, TypeOrmModule.forFeature([ExceptionLog]), ExceptionLogsModule],
  controllers: [AppController],
  providers: [AppService, {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }],
})
export class AppModule {}
