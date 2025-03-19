import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  public async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.save(createTaskDto);
  }

  async findAll(email: string) {
    const data: any= await this.taskRepository.find({ where: { assignedToEmail: email } });
    // const data: any= await this.taskRepository.find({ });
    const finalData= {data, total: data.length}
    return finalData
  }
  public async fetchTeamMemberList(managerEmail: string){
    const data: any= await this.userRepository.find({where: {managerEmail}})
    const finalData= data.map(({password, ...rest})=> rest)
    return {results: finalData, total: finalData.length}
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
