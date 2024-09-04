import { Module } from '@nestjs/common';
import { SaveService } from './save.service';
import { SaveController } from './save.controller';

@Module({
  providers: [SaveService],
  controllers: [SaveController]
})
export class SaveModule {}
