import { IsEmail, isEmpty, isNotEmpty, IsNotEmpty } from "class-validator";

export class CreateSprintDto {

    @IsNotEmpty()
    projectId: string;

    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    startDate: Date;



    @IsNotEmpty()
    endDate: Date;


    members: Array<any>;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    @IsEmail()
    sprintAdmin: string;

    description: string;

    @IsNotEmpty()
    sprintKey: string;

}
