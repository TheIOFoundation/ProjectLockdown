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

    async updateOne(dataPoint: DataSetEntry): Promise<DataSetEntry> {
        const { id } = dataPoint;
        await this.repository.update({ id }, dataPoint);
        return this.getOne(id);
    }

    async deleteOne(
        id: ObjectID,
    ): Promise<{ deleted: boolean; message?: string }> {
        try {
            await this.repository.delete(id);
            return { deleted: true };
        } catch (err) {
            return { deleted: false, message: err.message };
        }
    }
}
