import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
