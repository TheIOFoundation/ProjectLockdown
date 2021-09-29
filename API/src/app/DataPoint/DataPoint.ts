import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Answer } from '../Answer';

@Entity('DataPoint')
export default class DataPoint {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    refId: string;
    @Column()
    nameShort: string;
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
    @CreateDateColumn({ name: 'createdAt' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt: Date;

    @Column((_type) => ObjectID)
    categoryId: ObjectID;

    @Column((_type) => Answer)
    answer: Answer;
}
