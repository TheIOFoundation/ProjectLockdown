import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CategoryService } from '../services/Category.service';

@Controller('Category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    async getCategories(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Post()
    async addCategories(@Body() input: Category) {
        const category = await this.categoryService.create(input);
        return {
            data: category,
            meta: {},
        };
    }
}
