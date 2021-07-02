import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SwaggerBaseApiResponse } from '../../shared/dtos/base-api-response.dto';
import { DataPoint } from '../entities/dataPoint.entity';
import { DataPointService } from '../services/dataPoint.service';

@ApiTags('DataPoint')
@Controller('DataPoint')
export class DataPointController {
    constructor(private readonly service: DataPointService) {}

    @Get()
    @ApiOperation({
        summary: 'Get  All DataPoint',
    })
    @ApiResponse({
        status: HttpStatus.OK,
        type: SwaggerBaseApiResponse(DataPoint),
    })
    async getDataPoints(): Promise<DataPoint[]> {
        return this.service.getAll();
    }

    @Get('/name')
    @ApiOperation({
        summary: 'Get  Data Point By Name',
    })
    @ApiResponse({
        status: HttpStatus.FOUND,
        type: SwaggerBaseApiResponse(DataPoint),
    })
    async getByName(@Query('name') name: string): Promise<DataPoint> {
        return this.service.getOneByName(name);
    }

    @Get('/:id')
    @ApiOperation({
        summary: 'Get  Data Point By ID',
    })
    @ApiResponse({
        status: HttpStatus.FOUND,
        type: SwaggerBaseApiResponse(DataPoint),
    })
    async getById(@Param('id') id: string): Promise<DataPoint> {
        return this.service.getOne(id);
    }

    @Post('/new')
    @ApiOperation({
        summary: 'Add New Data Point',
    })
    @ApiResponse({
        status: HttpStatus.CREATED,
        type: SwaggerBaseApiResponse(DataPoint),
    })
    async newDataPoint(@Body() input: DataPoint): Promise<DataPoint> {
        return this.service.insertOne(input);
    }

    @Patch('/update')
    @ApiOperation({
        summary: 'Add New Data Point',
    })
    @ApiResponse({
        status: HttpStatus.CREATED,
        type: SwaggerBaseApiResponse(DataPoint),
    })
    async updateDataPoint(@Body() input: DataPoint): Promise<DataPoint> {
        return this.service.updateOne(input);
    }

    @Delete('/delete/:id')
    @ApiOperation({
        summary: 'Delete  Data Point',
    })
    @ApiResponse({
        status: HttpStatus.CREATED,
        type: SwaggerBaseApiResponse(DataPoint),
    })
    async deleteDataPoint(
        @Param('id') id: string,
    ): Promise<{ deleted: boolean }> {
        return this.service.deleteOne(id);
    }
}
