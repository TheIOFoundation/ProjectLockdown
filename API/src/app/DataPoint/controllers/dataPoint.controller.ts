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
import { DataPoint } from '../entities/dataPoint.entity';
import { DataPointService } from '../services/dataPoint.service';

@Controller('DataPoint')
export class DataPointController {
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
    async getById(@Param('id') id: string): Promise<DataPoint> {
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
        @Param('id') id: string,
    ): Promise<{ deleted: boolean }> {
        return this.service.deleteOne(id);
    }
}
