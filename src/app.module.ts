import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaveModule } from './save/save.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [SaveModule],
})
export class AppModule {}
