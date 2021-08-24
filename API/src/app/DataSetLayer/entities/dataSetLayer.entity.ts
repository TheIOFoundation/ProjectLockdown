import {
    Entity,
    ObjectID,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { Category } from '../../Category/entities/category.entity';

@Entity()
export class DataSetLayer {
    @PrimaryGeneratedColumn() id: ObjectID;
    @Column() name: string;
    @Column() version: string;
    @Column() status: string;
    @Column() type: string;
    @Column() description?: string;
    @CreateDateColumn({ name: 'createdAt' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt: Date;
    @OneToMany(() => Category, (category) => category.dsl)
    categories: Category[];
}
