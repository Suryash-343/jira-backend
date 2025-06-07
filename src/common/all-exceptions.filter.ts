import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Logger,
    ExecutionContext,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExceptionLog } from './entity/exception-filter.entity';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name);

    constructor(
        @InjectRepository(ExceptionLog)
        private readonly exceptionLogRepository: Repository<ExceptionLog>,
    ) { }

    async catch(exception: any, host: ArgumentsHost): Promise<void> {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const isHttpException = exception instanceof HttpException;
        const status = isHttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;


        const executionContext = host as ExecutionContext;

        const controllerName = executionContext.getClass()?.name || 'UnknownController';
        const handlerName = executionContext.getHandler()?.name || 'UnknownHandler';
        const logDetails = {
            ip: request.ip,
            path: request.url,
            method: request.method,
            authorization: request.headers['authorization'] || 'No Auth Token',
            statusCode: status,
            payload: request.body || {},
            timestamp: new Date().toISOString(),
            message: isHttpException
                ? exception.message
                : 'An unexpected error occurred',
            stack: exception.stack,
            controllerName,
            handlerName,
            count: 1,
        };

        // Check if a similar log exists
        const existingLog = await this.exceptionLogRepository.findOne({
            where: {
                ip: logDetails.ip,
                path: logDetails.path,
                method: logDetails.method,
                statusCode: logDetails.statusCode,
                authorization: logDetails.authorization,
                controllerName: logDetails.controllerName,
                handlerName: logDetails.handlerName,
            },
        });

        if (existingLog) {
            // Increment count for existing log
            existingLog.count += 1;
            existingLog.timestamp = new Date(); // update last occurred time
            await this.exceptionLogRepository.save(existingLog);
        } else {
            // Create a new log entry
            await this.exceptionLogRepository.save(
                this.exceptionLogRepository.create(logDetails),
            );
        }

        // Log to console
        this.logger.error(`Exception caught: ${JSON.stringify(logDetails)}`);

        // Send the response
        response.status(status).json({
            statusCode: status,
            message: exception.message || 'Internal server error',
            timestamp: new Date().toISOString(),
        });
    }
    
}
