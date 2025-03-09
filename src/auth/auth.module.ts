import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MongoModule } from 'src/database/mongo.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        MongoModule,
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '600s' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule { }
