import { IsInt, IsNotEmpty } from "class-validator";

export class TourDto {
    @IsInt()
    id: number;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    country: string;
    @IsInt()
    cost: number;
    @IsInt()
    days: number;
}