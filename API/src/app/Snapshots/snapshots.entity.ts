import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Snapshots {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    DSLId: string;

    @Column()
    TimestampStart: string;

    @Column()
    TimestampEnd: string;
}
