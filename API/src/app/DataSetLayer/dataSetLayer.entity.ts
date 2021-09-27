import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ObjectID,
    ObjectIdColumn,
} from 'typeorm';
import { Category } from '../Category';

@Entity('DataSetLayer')
export default class DataSetLayer {
    @ObjectIdColumn()
    id: ObjectID;
    @Column() name: string;
    @Column() version: string;
    @Column() status: string;
    @Column() type: string;
    @Column() description?: string;
    @CreateDateColumn({ name: 'createdAt' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt: Date;
    @Column((_type) => Category)
    categories: Category[];
}
