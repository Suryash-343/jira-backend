import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { Organization } from 'src/organizations/entities/organization.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
    @InjectRepository(Organization) private organizationRepository: Repository<Organization>,
  ){}

  async create(createProjectDto: CreateProjectDto) {
    console.log('totaldata: ', await this.organizationRepository.find({}))
    const orgObj=  await this.organizationRepository.findOne({where: {_id: new ObjectId(createProjectDto.organizationId)}})
    console.log(orgObj, '--->', createProjectDto.organizationId)
    if(!orgObj) {
      throw new HttpException('Organization not found', HttpStatus.NOT_FOUND);
    }

    return await this.projectRepository.save(createProjectDto)
  }

  async findAll() {
    return await this.projectRepository.find({})
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
