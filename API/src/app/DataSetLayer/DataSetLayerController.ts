import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { DataSetLayerDTOInput } from './DataSetLayer.dto';
import DataSetLayer from './DataSetLayer';
import DSLService from './DataSetLayerService';

@Controller('DSL')
export default class DataSetLayerController {
    constructor(private readonly dslService: DSLService) {}

    @Post()
    create(@Body() input: DataSetLayerDTOInput) {
        return this.dslService.insertOne(input);
    }

    @Get()
    get(): Promise<DataSetLayer[]> {
        return this.dslService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.dslService.getOne(id);
    }
}
