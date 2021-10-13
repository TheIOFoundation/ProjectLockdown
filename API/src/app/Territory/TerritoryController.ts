import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { Territory } from './Territory';
import { TerritoryInputDTO } from './Territory.dto';
import TerritoryService from './TerritoryService';
@Controller('Territory')
export default class TerritoryController {
    constructor(private readonly service: TerritoryService) {}

    @Post()
    async newTerritory(@Body() input: TerritoryInputDTO): Promise<Territory> {
        return this.service.insertOne(input);
    }

    @Get()
    async getDataPoints(): Promise<Territory[]> {
        return this.service.getAll();
    }

    @Get('getByPLD')
    async getByPLD(@Query('code') code: string): Promise<Territory | null> {
        return this.service.getOneByPLD(code);
    }
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Territory | null> {
        return this.service.getOne(id);
    }

    @Put()
    async updateTerritory(
        id: string,
        @Body() input: TerritoryInputDTO,
    ): Promise<Territory | null> {
        return this.service.updateOne(id, input);
    }

    @Delete(':id')
    async deleteTerritory(
        @Param('id') id: string,
    ): Promise<{ deleted: boolean }> {
        return this.service.deleteOne(id);
    }
}
