import { ToursService } from './tours.service'
import { BadRequestException, Body, Controller,Delete,Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes } from '@nestjs/common';
import { TourDto } from './dto/tour.dto'
import { TourValidatorPipe } from './pipe/tour-validation.pipe';
import { Tour } from './entity/tour.entity';
import { AuthGuard } from 'src/users/auth.guard';

@UseGuards(AuthGuard)
@Controller('tours')
export class ToursController {
    constructor(private toursDataService: ToursService) {}

    @Get()
    getToursList(): Promise<Tour[]> {
        return this.toursDataService.getTours();
    }

    @Get(':id')
    getTour(@Param('id', new ParseIntPipe({
        exceptionFactory: error => new BadRequestException(
            `This is custom text. An error is: ${error}`
        )
        })) tourId: number): Promise<Tour>{
            return this.toursDataService.getTour(tourId);
    }

    @Post()
    @UsePipes(new TourValidatorPipe())
    addTour(@Body() body : TourDto): Promise<Tour[]> {
        return this.toursDataService.addTour(body);
    }

    @Put()
    EditTour(@Body() body : TourDto): Promise<Tour[]> {
        return this.toursDataService.editTour(body);
    }

    @Delete()
    RemoveTour(@Body() body : TourDto): Promise<Tour[]> {
        return this.toursDataService.removeTour(body);
    }
 
}
