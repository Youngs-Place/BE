import { Injectable } from '@nestjs/common';
import { CreateSaveDto } from './dto/create-save-dto';

@Injectable()
export class SaveService {
  private saves: CreateSaveDto[] = [];

  create(createSaveDto: CreateSaveDto) {
    this.saves.push(createSaveDto);
    return createSaveDto;
  }

  findAll() {
    return this.saves;
  }
}
