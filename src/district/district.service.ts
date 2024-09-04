import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DistrictService {
  constructor(private prisma: PrismaService) {}

  async getDistrictsByCity(cityId: number) {
    return this.prisma.district.findMany({
      where: { cityId },
    });
  }
}
