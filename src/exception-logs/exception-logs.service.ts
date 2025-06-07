import { Injectable } from '@nestjs/common';
import { CreateExceptionLogDto } from './dto/create-exception-log.dto';
import { UpdateExceptionLogDto } from './dto/update-exception-log.dto';
import { ExceptionLog } from './entities/exception-log.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class ExceptionLogsService {
  constructor(
    @InjectRepository(ExceptionLog)
    private readonly exceptionLogRepository: Repository<ExceptionLog>,
  ) { }
 async findAll(
  filters: {
    search?: string;
    statusCode?: number;
    path?: string;
    method?: string;
    controllerName?: string;
    handlerName?: string;
  },
  sortBy: string = 'timestamp',
  sortOrder: 'ASC' | 'DESC' = 'DESC',
  page: number = 1,
  limit: number = 10,
): Promise<{ data: ExceptionLog[]; total: number; page: number; limit: number }> {
  const filter: any = {};

  // Text search on multiple fields if search string is provided
  if (filters.search) {
    const regex = new RegExp(filters.search, 'i');
    filter.$or = [
      { message: regex },
      { path: regex },
      { controllerName: regex },
      { handlerName: regex },
    ];
  }

  // Exact filters for statusCode, path, method, controllerName, handlerName
  if (filters.statusCode !== undefined) {
    filter.statusCode = filters.statusCode;
  }
  if (filters.path) {
    filter.path = filters.path;
  }
  if (filters.method) {
    filter.method = filters.method.toUpperCase();
  }
  if (filters.controllerName) {
    filter.controllerName = filters.controllerName;
  }
  if (filters.handlerName) {
    filter.handlerName = filters.handlerName;
  }

  // Sorting
  const sortOrderNumber = sortOrder.toUpperCase() === 'ASC' ? 1 : -1;
  const allowedSortFields = ['timestamp', 'statusCode', 'count', 'path', 'method'];
  if (!allowedSortFields.includes(sortBy)) {
    sortBy = 'timestamp';
  }
  const sort = { [sortBy]: sortOrderNumber };

  const total = await this.exceptionLogRepository.count(filter);

  const data = await this.exceptionLogRepository.find({
    where: filter,
    order: sort,
    skip: (page - 1) * limit,
    take: limit,
  });

  return { data, total, page, limit };
}
  findOne(id: number) {
    return `This action returns a #${id} exceptionLog`;
  }


}
