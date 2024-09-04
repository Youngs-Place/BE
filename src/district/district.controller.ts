import { Controller, Get, Query } from '@nestjs/common';
import { DistrictService } from './district.service';

@Controller('districts')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @Get()
  async getDistrictsByCity(@Query('cityId') cityId: string) {
    return this.districtService.getDistrictsByCity(+cityId);
  }
}
