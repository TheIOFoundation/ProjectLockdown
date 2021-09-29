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
import { DataSetEntry, DataSetEntryService } from '.';

@Controller('DataSetEntryController')
export default class DataSetEntryController {
    constructor(private readonly service: DataSetEntryService) {}

    @Get()
    async getDataPoints(): Promise<DataSetEntry[]> {
        return this.service.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: ObjectID): Promise<DataSetEntry> {
        return this.service.getOne(id);
    }

    @Post('/new')
    async newDataPoint(@Body() input: DataSetEntry): Promise<DataSetEntry> {
        return this.service.insertOne(input);
    }

    @Patch('/update')
    async updateDataPoint(
        @Body() input: DataSetEntry,
    ): Promise<DataSetEntry> {
        return this.service.updateOne(input);
    }

    @Delete('/delete/:id')
    async deleteDataPoint(
        @Param('id') id: ObjectID,
    ): Promise<{ deleted: boolean }> {
        return this.service.deleteOne(id);
    }
}
