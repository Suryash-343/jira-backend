import { IsNotEmpty } from "class-validator";

export class CreateOrganizationDto {
    @IsNotEmpty()
    organizationName: string;
    @IsNotEmpty()
    organizationKey: string;

    organizationDesc: string;
    
    @IsNotEmpty()
    organizationAdmin: string;
    
    // @IsNotEmpty()
    organizationProfilePic: string;

}
