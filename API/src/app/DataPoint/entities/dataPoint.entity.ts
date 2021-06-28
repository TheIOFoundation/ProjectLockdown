import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Category } from '../../Category/entities/category.entity';

@Entity('DataPoint')
export class DataPoint {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nameShort: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    iconID: string;
    @Column()
    tags: string[];
    @Column()
    order: number;
    @CreateDateColumn({ name: 'createdAt' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt: Date;
    @ManyToOne(() => Category, (category) => category.dataPoints)
    category: Category;
}
