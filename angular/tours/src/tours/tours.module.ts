import { Tour } from './entity/tour.entity';
import { ToursService } from './../tours/tours.service';
import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tour]),UsersModule ],
  controllers: [ToursController],
  providers: [ToursService],
})
export class ToursModule {}
