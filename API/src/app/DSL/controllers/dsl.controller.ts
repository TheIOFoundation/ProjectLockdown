import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DSLEntity } from '../entities/dsl.entity';
import { DSLService } from '../services/dsl.service';

ApiTags('v2/');
@Controller('DSL')
export class DSLController {
    constructor(private readonly dslService: DSLService) {}

    @Get()
    findAll(): Promise<DSLEntity[]> {
        return this.dslService.findAll();
    }
}
