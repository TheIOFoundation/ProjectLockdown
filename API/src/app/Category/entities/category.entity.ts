import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { DataPoint } from '../../DataPoint/entities/dataPoint.entity';
import { DataSetLayer } from '../../DataSetLayer/entities/dataSetLayer.entity';

@Entity('Category')
export class Category {
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
    @OneToMany(() => DataPoint, (dataPoint) => dataPoint.category)
    dataPoints: DataPoint[];
    @ManyToOne(() => DataSetLayer, (dsl) => dsl.categories)
    dsl: DataSetLayer;
}
