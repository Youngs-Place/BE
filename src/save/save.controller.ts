import { Controller, Get, Post, Body } from '@nestjs/common';
import { SaveService } from './save.service';
import { CreateSaveDto } from './dto/create-save-dto';

@Controller('savelist')
export class SaveController {
  constructor(private readonly saveService: SaveService) {}

  @Post()
  create(@Body() createSaveDto: CreateSaveDto) {
    return this.saveService.create(createSaveDto);
  }

  @Get()
  findAll() {
    return this.saveService.findAll();
  }
}
