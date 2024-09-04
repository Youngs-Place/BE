import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async getProjectsByStatus(status: string) {
    return this.prisma.project.findMany({
      where: { status },
    });
  }
}
