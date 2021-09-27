import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import DataSetEntries from './dataSetEntries.entity';

@Injectable()
export default class DataSetEntriesService extends Repository<DataSetEntries> {
    constructor(
        @InjectRepository(DataSetEntries)
        private readonly repository: Repository<DataSetEntries>,
    ) {
        super();
    }

    async getAll(): Promise<DataSetEntries[]> {
        return this.repository.find();
    }

    async getOne(id: ObjectID): Promise<DataSetEntries> {
        return this.repository.findOneOrFail(id);
    }

    async insertOne(input: DataSetEntries): Promise<DataSetEntries> {
        const newDataPoint = this.repository.create(input);
        await this.repository.save(newDataPoint);
        return newDataPoint;
    }

    async updateOne(dataPoint: DataSetEntries): Promise<DataSetEntries> {
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
