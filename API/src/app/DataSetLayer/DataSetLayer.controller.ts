import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DataSetLayerDTOInput } from './DataSetLayer.dto';
import DataSetLayer from './DataSetLayer.schema';
import DSLService from './DataSetLayer.service';

@Controller('DSL')
export default class DataSetLayerController {
    constructor(private readonly dslService: DSLService) {}

    @Post()
    create(@Body() input: DataSetLayerDTOInput) {
        console.log('create', input);
        return this.dslService.insertOne(input);
    }
    @Get()
    get(): Promise<DataSetLayer[]> {
        console.log('get');
        return this.dslService.findAll();
    }
    @Get(':id')
    getById(@Param('id') id: string) {
        return this.dslService.getOne(id);
    }
}
