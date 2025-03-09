import { IsEmail } from "class-validator";

export class CreateUserDto {

    // @IsUnique({tableName: 'user', column: 'email'})
    @IsEmail()
    email: string;
    password: string;
    fullName: string;
    role: string;
}