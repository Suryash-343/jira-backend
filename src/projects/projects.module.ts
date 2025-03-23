import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { MongoModule } from 'src/database/mongo.module';
import { Organization } from 'src/organizations/entities/organization.entity';

@Module({
  imports: [MongoModule, TypeOrmModule.forFeature([Project]), TypeOrmModule.forFeature([Organization])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
