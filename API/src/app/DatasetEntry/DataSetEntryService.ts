import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import DataSetEntry from './DataSetEntry';

@Injectable()
export default class DataSetEntryService extends Repository<DataSetEntry> {
    constructor(
        @InjectRepository(DataSetEntry)
        private readonly repository: Repository<DataSetEntry>,
    ) {
        super();
    }

    async getAll(): Promise<DataSetEntry[]> {
        return this.repository.find();
    }

    async getOne(id: ObjectID): Promise<DataSetEntry> {
        return this.repository.findOneOrFail(id);
    }

    async insertOne(input: DataSetEntry): Promise<DataSetEntry> {
        const newDataPoint = this.repository.create(input);
        await this.repository.save(newDataPoint);
        return newDataPoint;
    } 
}
