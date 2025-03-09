// export class CreateTaskDto {

import { Optional } from "@nestjs/common";
import { Transform } from "class-transformer";

// }
export class CreateTaskDto {


  title: string;
  priority: number;
  description: string;
  status: string;
  @Transform(value => {
    console.log(value, '----valueuuuu')
    return new Date(String(value))
})
  dueDate: Date;
  
  createdBy: string;
  assignedTo: string;
  
}