import {
    Controller,
    Get,
} from '@nestjs/common';
import Category from './Category';
import CategoryService from './CategoryService';

@Controller('Category')
export default class CategoryController {
    constructor(private readonly service: CategoryService) {}

    @Get()
    async getDataPoints(): Promise<Category[]> {
        return this.service.getAll();
    }
  
}
