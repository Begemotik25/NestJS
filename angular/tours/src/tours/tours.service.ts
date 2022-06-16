import { Tour } from './entity/tour.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tours } from './dto/db';

import { TourDto } from './dto/tour.dto';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class ToursService {
    private toursList = tours;

    constructor(@InjectRepository(Tour) 
    private tourRepository: Repository<Tour>,
    private conn:Connection) {}

    getTours(): Promise<Tour[]> {
        return this.tourRepository.find();
    }

    getTour(id: number): Promise<Tour> {
        return this.tourRepository.findOne(id);
    }
    
    async addTour(tour: TourDto): Promise<Tour[]> { 
        let dbTour = new Tour();
        dbTour.name = tour.name;
        dbTour.country = tour.country;
        dbTour.cost = tour.cost;
        dbTour.days = tour.days;
        await this.tourRepository.save(dbTour);

        return this.getTours();
    }

    async editTour(tour: TourDto): Promise<Tour[]> {
        let dbTour = await this.getTour(tour.id);
        dbTour.name = tour.name;
        dbTour.country = tour.country;
        dbTour.cost = tour.cost;
        dbTour.days = tour.days;
        await this.tourRepository.save(dbTour);
        return this.getTours();
    }
    
    async removeTour(tour: TourDto): Promise<Tour[]> {
        let dbTour = await this.getTour(tour.id);
        await this.tourRepository.remove(dbTour);
        return this.getTours();
    }
}
