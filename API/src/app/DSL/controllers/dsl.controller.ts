import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SwaggerBaseApiResponse } from '../../shared/dtos/base-api-response.dto';
import { DSL } from '../entities/dsl.entity';
import { DSLService } from '../services/dsl.service';

@ApiTags('DSL')
@Controller('DSL')
export class DSLController {
    constructor(private readonly dslService: DSLService) {}

    @Get()
    @ApiOperation({
        summary: 'Ger All DSL',
    })
    @ApiResponse({
        status: HttpStatus.OK,
        type: SwaggerBaseApiResponse(DSL),
    })
    getCategories(): Promise<DSL[]> {
        return this.dslService.findAll();
    }
}
