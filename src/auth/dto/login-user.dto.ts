import { IsEmail } from "class-validator";

export class LoginUserDto {

    // @IsUnique({tableName: 'user', column: 'email'})
    @IsEmail()
    email: string;
    
    password: string;

}