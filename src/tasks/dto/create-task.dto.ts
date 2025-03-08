// export class CreateTaskDto {

// }
export class CreateTaskDto {
  title: string;
  priority: number;
  description: string;
  status: string;
  dueDate: Date;
  createdBy: string;
  assignedTo: string;
  
}