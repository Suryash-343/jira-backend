import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Organization } from 'src/organizations/entities/organization.entity';
import { Project } from 'src/projects/entities/project.entity';
import { Repository } from 'typeorm';
import { Sprint } from './entities/sprint.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class SprintsService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
    @InjectRepository(Sprint) private sprintRepository: Repository<Sprint>,
  ){}

  async create(createSprintDto: CreateSprintDto) {
     console.log('totaldata: ', await this.projectRepository.find({}))
        const projObj=  await this.projectRepository.findOne({where: {_id: new ObjectId(createSprintDto.projectId)}})
        console.log(projObj, '--->', createSprintDto.projectId)
        if(!projObj) {
          throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
        }
    return await this.sprintRepository.save(createSprintDto)
  }

  findAll() {

    return this.sprintRepository.find({})
  }

  findOne(id: number) {
    return `This action returns a #${id} sprint`;
  }

  update(id: number, updateSprintDto: UpdateSprintDto) {
    return `This action updates a #${id} sprint`;
  }

  remove(id: number) {
    return `This action removes a #${id} sprint`;
  }
}
