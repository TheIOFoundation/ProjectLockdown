import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { DataSetLayerDTOInput } from '../dtos/dataSetLayer.dto';
import { DataSetLayer } from '../entities/dataSetLayer.entity';

@Injectable()
export class DSLService {
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

    async findById(id: string){
        return this.dslRepository.find(id);
    }
}
