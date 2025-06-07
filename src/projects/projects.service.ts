import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { Organization } from 'src/organizations/entities/organization.entity';
import { ObjectId } from 'mongodb';
import axios from 'axios';
@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
    @InjectRepository(Organization) private organizationRepository: Repository<Organization>,
  ) { }

  async create(createProjectDto: CreateProjectDto) {
    console.log('totaldata: ', await this.organizationRepository.find({}))
    const orgObj = await this.organizationRepository.findOne({ where: { _id: new ObjectId(createProjectDto.organizationId) } })
    console.log(orgObj, '--->', createProjectDto.organizationId)
    if (!orgObj) {
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
  async inviteToProject(toMail: String) {
    console.log('toMail: ', toMail)
    console.log(toMail, )
    const htmlTemplate = `<!DOCTYPE html>
<html>
  <head>
    <title>Join Project!!</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <h1 style="color: #333;">Join Project!!</h1>
      <p style="font-size: 16px; color: #555;">
        You’ve been invited to join a project. Click the link below to accept the invitation:
      </p>
      <a href="https://your-invite-url.com" style="display: inline-block; margin-top: 20px; padding: 12px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">
        Join Now
      </a>
    </div>
  </body>
</html>`
    const data = await axios.post(`${process.env.BASE_URL}/api/mail/send`, {
      to: toMail,
      content: htmlTemplate,
      from: 'godofcode99@gmail.com',
      subject: 'Invite to Project',
    })
    console.log('data: ', data)
    return {
      status: 'success',
      message: 'Email sent successfully',
    }
  }
}
