import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { MongoModule } from 'src/database/mongo.module';
import { User } from 'src/auth/entities/user.entity';

@Module({
  imports: [MongoModule, TypeOrmModule.forFeature([Task]),  TypeOrmModule.forFeature([User])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
