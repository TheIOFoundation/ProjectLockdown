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
import { Region } from './Region';
import { RegionInputDTO } from './region.dto';
import RegionService from './RegionService';

@Controller('Region')
export default class RegionController {
    constructor(private readonly service: RegionService) {}

    @Get()
    async getRegion(): Promise<Region[]> {
        return this.service.getAll();
    }

    @Get('getByName')
    async getByName(
        @Query('name') name: string,
    ): Promise<Region | null> {
        return this.service.getOneByName(name);
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Region | null> {
        return this.service.getOne(id);
    }

    @Post()
    async newRegion(@Body() input: RegionInputDTO): Promise<Region> {
        return this.service.insertOne(input);
    }

    @Put()
    async updateRegion(
        id: string,
        @Body() input: Region,
    ): Promise<Region | null> {
        return this.service.updateOne(id, input);
    }

    @Delete(':id')
    async deleteRegion(@Param('id') id: string): Promise<{ deleted: boolean }> {
        return this.service.deleteOne(id);
    }
}
