import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';
import { DataPoint } from '../DataPoint';

@Entity('Category')
export default class Category {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    refId: string;
    @Column()
    name: string;
    @Column({ nullable: true, default: null })
    description: string;
    @Column({ nullable: true, default: null })
    iconId: string;
    @Column({ nullable: true, default: [], array: true })
    tags: string[];
    @Column()
    order: number;
    @CreateDateColumn({ name: 'DateCreated' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'DateUpdate' })
    updatedAt: Date;

    @Column()
    dataPoints: DataPoint[];
    @Column((_type) => ObjectID)
    dslId: ObjectID;
}
