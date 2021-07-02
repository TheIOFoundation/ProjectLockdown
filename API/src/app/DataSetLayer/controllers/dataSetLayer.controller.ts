import { Controller, Get } from '@nestjs/common';
import { DataSetLayer } from '../entities/dataSetLayer.entity';
import { DSLService } from '../services/dataSetLayer.service';

@Controller('DSL')
export class DataSetLayerController {
    constructor(private readonly dslService: DSLService) {}

    @Get()
    getCategories(): Promise<DataSetLayer[]> {
        return this.dslService.findAll();
    }
}
