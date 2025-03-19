// export class CreateTaskDto {

import { Optional } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

// }
export class CreateTaskDto {

  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsNumber()
  priority: number;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  status: string;

  @IsOptional()
  @Transform(value => {
    return new Date(String(value))
})
  dueDate: Date;
  
  @IsNotEmpty()
  createdBy: string;

  @IsEmail()
  @IsNotEmpty()
  createdByEmail: string;

  @IsNotEmpty()
  assignedTo: string;

  @IsEmail()
  @IsNotEmpty()
  assignedToEmail: string;
  
}