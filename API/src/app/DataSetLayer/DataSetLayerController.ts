import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { DataSetLayerDTOInput } from './dataSetLayer.dto';
import DataSetLayer from './DataSetLayer';
import DSLService from './DataSetLayerService';

@Controller('DSL')
export default class DataSetLayerController {
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
    getById(@Param('id') id: ObjectID) {
        return this.dslService.findById(id);
    }
}
