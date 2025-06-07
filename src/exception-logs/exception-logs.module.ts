import { Module } from '@nestjs/common';
import { ExceptionLogsService } from './exception-logs.service';
import { ExceptionLogsController } from './exception-logs.controller';
import { ExceptionLog } from 'src/common/entity/exception-filter.entity';
import { MongoModule } from 'src/database/mongo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [MongoModule, TypeOrmModule.forFeature([ExceptionLog])],
  controllers: [ExceptionLogsController],
  providers: [ExceptionLogsService],
})
export class ExceptionLogsModule {}
