import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { hashString, isHashSame } from 'src/utils/hashPassword';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private authRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  public async create(createUserDto: CreateUserDto) { 
    const reqPassword = createUserDto.password;
    const hashedpassword= await hashString(reqPassword);
    createUserDto.password= hashedpassword
    await this.authRepository.save(createUserDto);
    return {
        message: 'User created successfully',
        status: 201,
    }
  }
  public async login(loginAuthDto: LoginUserDto) { 
    const reqEmail = loginAuthDto.email;
    const reqPassword = loginAuthDto.password;

    const user= await this.authRepository.findOne({where:{email: reqEmail}});
    const isPasswordSame= await isHashSame(reqPassword, user.password);
    // console.log(user, '---USER')
    if(!user ){
        return {
            message: 'User not found',
            status: 404,
        }
    }
    if(user && !isPasswordSame){
        return {
            message: 'Password is incorrect',
            status: 404,
        }
    }

    const {password,createdAt, updatedAt, ...payload}= user
    const access_token=  await this.jwtService.signAsync(payload)

    return {
        access_token,
        message: 'User Logged In successfully',
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
