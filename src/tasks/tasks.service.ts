import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import e from 'express';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}
  public async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.save(createTaskDto);
  }

  async findAll(email: string) {
    const data: any= await this.taskRepository.find({ where: { createdByEmail: email } });
    const finalData= {data, total: data.length}
    return finalData
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  async update(id: string, updateTaskDto: Partial<UpdateTaskDto>) {
      await this.taskRepository.update(id, updateTaskDto);
      return await this.taskRepository.findOne({ where: { id } });
    }
    

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
