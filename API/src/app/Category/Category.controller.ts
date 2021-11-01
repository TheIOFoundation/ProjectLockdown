import { Controller, Get } from '@nestjs/common';
import Category from './Category.schema';
import CategoryService from './Category.service';

@Controller('Category')
export default class CategoryController {
    constructor(private readonly service: CategoryService) {}

    @Get()
    async getDataPoints(): Promise<Category[]> {
        return this.service.getAll();
    }
}
