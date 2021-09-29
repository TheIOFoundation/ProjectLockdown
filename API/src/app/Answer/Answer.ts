import {
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('Answer')
export default class Answer {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    refId: string;
    @Column()
    details: string;
    @CreateDateColumn({ name: 'dateStart' })
    dateStart: Date;
    @UpdateDateColumn({ name: 'dateEnd' })
    dateEnd: Date;
    @CreateDateColumn({ name: 'createdAt' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt: Date;

    @Column((_type) => ObjectID)
    categoryId: ObjectID;
    @Column((_type) => ObjectID)
    dataPointId: ObjectID;
    @Column((_type) => ObjectID)
    dslId: ObjectID;
}
