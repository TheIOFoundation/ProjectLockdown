import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { ObjectID } from 'typeorm';
import Category from './Category';
import CategoryService from './CategoryService';

@Controller('Category')
export default class CategoryController {
    constructor(private readonly service: CategoryService) {}

    @Get()
    async getDataPoints(): Promise<Category[]> {
        return this.service.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: ObjectID): Promise<Category> {
        return this.service.getOne(id);
    }

    @Post('/new')
    async newDataPoint(@Body() input: Category): Promise<Category> {
        return this.service.insertOne(input);
    }

    @Patch('/update')
    async updateDataPoint(@Body() input: Category): Promise<Category> {
        return this.service.updateOne(input);
    }

    @Delete('/delete/:id')
    async deleteDataPoint(
        @Param('id') id: ObjectID,
    ): Promise<{ deleted: boolean }> {
        return this.service.deleteOne(id);
    }
}
