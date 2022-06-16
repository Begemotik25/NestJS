import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToursModule } from './../tours/tours.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    ToursModule, TypeOrmModule.forRoot(),UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
