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

@Module({
  imports: [TasksModule, AuthModule, OrganizationsModule, ProjectsModule, SprintsModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
