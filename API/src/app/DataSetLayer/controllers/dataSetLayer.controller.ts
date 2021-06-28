import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SwaggerBaseApiResponse } from '../../shared/dtos/base-api-response.dto';
import { DataSetLayer } from '../entities/dataSetLayer.entity';
import { DSLService } from '../services/dataSetLayer.service';

@ApiTags('DSL')
@Controller('DSL')
export class DataSetLayerController {
    constructor(private readonly dslService: DSLService) {}

    @Get()
    @ApiOperation({
        summary: 'Ger All DSL',
    })
    @ApiResponse({
        status: HttpStatus.OK,
        type: SwaggerBaseApiResponse(DataSetLayer),
    })
    getCategories(): Promise<DataSetLayer[]> {
        return this.dslService.findAll();
    }
}
