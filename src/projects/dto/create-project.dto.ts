import { IsNotEmpty } from "class-validator";

export class CreateProjectDto {

    @IsNotEmpty()
    organizationId: string;
    @IsNotEmpty()
    projectName: string;
    @IsNotEmpty()
    projectKey: string;
    @IsNotEmpty()
    projectDesc: string;
    @IsNotEmpty()
    projectAdmin: string;
    // @IsNotEmpty()
    projectMembers: Array<any>;
    
}
