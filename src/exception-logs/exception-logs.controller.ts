import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ExceptionLogsService } from './exception-logs.service';
import { CreateExceptionLogDto } from './dto/create-exception-log.dto';
import { UpdateExceptionLogDto } from './dto/update-exception-log.dto';
import { ExceptionLog } from './entities/exception-log.entity';

@Controller('exception-logs')
export class ExceptionLogsController {
  constructor(private readonly exceptionLogsService: ExceptionLogsService) {}


  @Get()
async getAll(
  @Query('search') search?: string,
  @Query('statusCode') statusCode?: string,
  @Query('path') path?: string,
  @Query('method') method?: string,
  @Query('controllerName') controllerName?: string,
  @Query('handlerName') handlerName?: string,
  @Query('sortBy') sortBy?: string,
  @Query('sortOrder') sortOrder?: 'ASC' | 'DESC',
  @Query('page') page = '1',
  @Query('limit') limit = '10',
) {
  const pageNum = parseInt(page, 10) || 1;
  const limitNum = parseInt(limit, 10) || 10;
  const statusCodeNum = statusCode ? parseInt(statusCode, 10) : undefined;

  return this.exceptionLogsService.findAll(
    {
      search,
      statusCode: statusCodeNum,
      path,
      method,
      controllerName,
      handlerName,
    },
    sortBy,
    sortOrder,
    pageNum,
    limitNum,
  );
}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exceptionLogsService.findOne(+id);
  }

}
