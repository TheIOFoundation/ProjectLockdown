import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DSLEntity } from '../entities/dsl.entity';

@Injectable()
export class DSLService {
    constructor(
        @InjectRepository(DSLEntity)
        private readonly dslRepository: Repository<DSLEntity>,
    ) {}

    async findAll(): Promise<DSLEntity[]> {
        return this.dslRepository.find();
    }
}
