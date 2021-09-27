import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Answer } from '../Answer';
import { DSE_SOURCE } from '../shared/constant';

@Entity('DataSetEntries')
export default class DataSetEntries {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    refId: string;

    @Column({
        type: 'enum',
        enum: DSE_SOURCE,
        default: DSE_SOURCE.OTHER,
    })
    role: DSE_SOURCE;
    @Column()
    @CreateDateColumn({ name: 'createdAt' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt: Date;

    @Column((_type) => Answer)
    answers: Answer[];
}
