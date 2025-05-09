import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/register')
    create(@Body() createAuthDto: CreateUserDto) {
        console.log(createAuthDto, '---.BODY')
        return this.authService.create(createAuthDto);
    }
    @Post('/login')
    login(@Body() loginAuthDto: LoginUserDto) {
        console.log(loginAuthDto, '---.BODY')
        return this.authService.login(loginAuthDto);
    }

    // @Get()
    // findAll() {
    //     return this.authService.findAll();
    // }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.authService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.authService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.authService.remove(+id);
    }
}
