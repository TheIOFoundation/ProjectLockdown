import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { ObjectID } from 'typeorm';
import DataPoint from './DataPoint';
import DataPointService from './DataPointService';

@Controller('DataPoint')
export default class DataPointController {
    constructor(private readonly service: DataPointService) {}

    @Get()
    async getDataPoints(): Promise<DataPoint[]> {
        return this.service.getAll();
    }

    @Get('/name')
    async getByName(@Query('name') name: string): Promise<DataPoint> {
        return this.service.getOneByName(name);
    }

    @Get('/:id')
    async getById(@Param('id') id: ObjectID): Promise<DataPoint> {
        return this.service.getOne(id);
    }

    @Post('/new')
    async newDataPoint(@Body() input: DataPoint): Promise<DataPoint> {
        return this.service.insertOne(input);
    }

    @Patch('/update')
    async updateDataPoint(@Body() input: DataPoint): Promise<DataPoint> {
        return this.service.updateOne(input);
    }

    @Delete('/delete/:id')
    async deleteDataPoint(
        @Param('id') id: ObjectID,
    ): Promise<{ deleted: boolean }> {
        return this.service.deleteOne(id);
    }
}
