import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private authRepository: Repository<User>,
  ) {}
  public async create(createUserDto: CreateUserDto) { 
    await this.authRepository.save(createUserDto);
    return {
        message: 'User created successfully',
        status: 201,
    }
  }

  async findAll() {
    return await this.authRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  async update(id: string, updateUserDto: Partial<UpdateUserDto>) {
      await this.authRepository.update(id, updateUserDto);
      return await this.authRepository.findOne({ where: { id } });
    }
    

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
