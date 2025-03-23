import { Module } from '@nestjs/common';
import { SprintsService } from './sprints.service';
import { SprintsController } from './sprints.controller';
import { MongoModule } from 'src/database/mongo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { Sprint } from './entities/sprint.entity';

@Module({
  imports: [MongoModule, TypeOrmModule.forFeature([Project, Sprint])],
  controllers: [SprintsController],
  providers: [SprintsService],
})
export class SprintsModule {}
