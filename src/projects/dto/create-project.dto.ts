import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateProjectDto {

    @IsNotEmpty()
    organizationId: string;

    @IsNotEmpty()
    projectName: string;

    @MaxLength(4)
    @MinLength(2)
    @IsNotEmpty()
    projectKey: string;


    @IsNotEmpty()
    projectDesc: string;

    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase())
    projectAdmin: string;
    // @IsNotEmpty()
    projectMembers: Array<any>;
    
}
