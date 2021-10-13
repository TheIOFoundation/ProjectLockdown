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
  
}
