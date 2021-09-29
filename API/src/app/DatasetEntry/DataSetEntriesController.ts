import {
    Controller,
    Get,
    Param,
    Body,
    Delete,
    Patch,
    Post,
} from '@nestjs/common';
import { ObjectID } from 'typeorm';
import DataSetEntries from './DataSetEntries';
import DataSetEntriesService from './DataSetEntriesService';

@Controller('DataSetEntryController')
export default class DataSetEntryController {
    constructor(private readonly service: DataSetEntriesService) {}

    @Get()
    async getDataPoints(): Promise<DataSetEntries[]> {
        return this.service.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: ObjectID): Promise<DataSetEntries> {
        return this.service.getOne(id);
    }

    @Post('/new')
    async newDataPoint(@Body() input: DataSetEntries): Promise<DataSetEntries> {
        return this.service.insertOne(input);
    }

    @Patch('/update')
    async updateDataPoint(
        @Body() input: DataSetEntries,
    ): Promise<DataSetEntries> {
        return this.service.updateOne(input);
    }

    @Delete('/delete/:id')
    async deleteDataPoint(
        @Param('id') id: ObjectID,
    ): Promise<{ deleted: boolean }> {
        return this.service.deleteOne(id);
    }
}
