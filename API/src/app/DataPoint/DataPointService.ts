import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import DataPoint from './DataPoint';

@Injectable()
export default class DataPointService {
    constructor(
        @InjectRepository(DataPoint)
        private readonly repository: Repository<DataPoint>,
    ) {}

    async getAll(): Promise<DataPoint[]> {
        return this.repository.find();
    }

    async getOne(id: ObjectID): Promise<DataPoint> {
        return this.repository.findOneOrFail(id);
    }

    async getOneByName(name: string): Promise<DataPoint> {
        return this.repository.findOneOrFail({ name });
    }

    async insertOne(input: DataPoint): Promise<DataPoint> {
        const newDataPoint = this.repository.create(input);
        await this.repository.save(newDataPoint);
        return newDataPoint;
    }

    async updateOne(dataPoint: DataPoint): Promise<DataPoint> {
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
