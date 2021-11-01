import { Controller, Get, Post } from '@nestjs/common';
import DataPoint from './DataPoint.schema';
import DataPointService from './DataPoint.service';

@Controller('DataPoint')
export default class DataPointController {
    constructor(private readonly service: DataPointService) {}

    @Get()
    async getDataPoints(): Promise<DataPoint[]> {
        return this.service.getAll();
    }

    @Post()
    async newDataPoints(): Promise<DataPoint[]> {
        return this.service.getAll();
    }
}
