import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DSL } from '../entities/dsl.entity';

@Injectable()
export class DSLService {
    constructor(
        @InjectRepository(DSL)
        private readonly dslRepository: Repository<DSL>,
    ) {}

    async findAll(): Promise<DSL[]> {
        return this.dslRepository.find();
    }
}
