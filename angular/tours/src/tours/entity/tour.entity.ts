import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class Tour {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    country: string;

    @Column()
    cost: number;

    @Column()
    days: number;
}