import { IsNotEmpty } from "class-validator";

export class CreateOrganizationDto {
    @IsNotEmpty()
    organizationName: string;
    organizationDesc: string;
    
    @IsNotEmpty()
    organizationProfilePic: string;

}
