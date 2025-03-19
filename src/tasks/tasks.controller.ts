import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto, '---.BODY')
    return this.tasksService.create(createTaskDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Req() req) {
    return this.tasksService.findAll(req.user.email);
  }
  // Temporary
  @UseGuards(AuthGuard)
  @Post('findAllTaskOfTeamMember')
  findAllTaskOfTeamMember(@Body('assignedToEmail') assignedToEmail: string) {
    return this.tasksService.findAllTaskOfTeamMember(assignedToEmail);
  }

  @UseGuards(AuthGuard)
  @Post('fetchTeamMemberList')
  fetchTeamMemberList(@Body('managerEmail') managerEmail: string) {
    console.log(managerEmail, '---.BODY')
    return this.tasksService.fetchTeamMemberList(managerEmail);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
