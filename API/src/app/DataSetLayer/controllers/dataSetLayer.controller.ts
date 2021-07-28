import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DataSetLayerDTOInput } from '../dto/dataSetLayer.dto';
import { DataSetLayer } from '../entities/dataSetLayer.entity';
import { DSLService } from '../services/dataSetLayer.service';

@Controller('DSL')
export class DataSetLayerController {
    constructor(private readonly dslService: DSLService) {}

    @Post()
    create(@Body() input: DataSetLayerDTOInput) {
        return this.dslService.create(input);
    }

    @Get()
    get(): Promise<DataSetLayer[]> {
        return this.dslService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.dslService.findById(id);
    }
}
