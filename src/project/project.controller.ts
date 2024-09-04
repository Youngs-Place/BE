import { Controller, Get, Query } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getProjectsByStatus(@Query('status') status: string) {
    return this.projectService.getProjectsByStatus(status);
  }
}
