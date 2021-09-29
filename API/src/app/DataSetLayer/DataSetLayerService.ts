import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { ObjectID, Repository } from 'typeorm';
import { DataSetLayerDTOInput } from './dataSetLayer.dto';
import DataSetLayer from './DataSetLayer';

@Injectable()
export default class DSLService {
    constructor(
        @InjectRepository(DataSetLayer)
        private readonly dslRepository: Repository<DataSetLayer>,
    ) {}

    async findAll(): Promise<DataSetLayer[]> {
        return this.dslRepository.find();
    }

    async create(input: DataSetLayerDTOInput) {
        const dataSetLayer = plainToClass(DataSetLayer, input, {
            excludeExtraneousValues: true,
        });
        return this.dslRepository.save(dataSetLayer);
    }

    async findById(id: ObjectID) {
        return this.dslRepository.findOne(id);
    }
}
