import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Category } from '../entities/category.entity';
import { CategoryService } from '../services/Category.service';

@ApiTags('Category')
@Controller('Category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    @ApiOperation({
        summary: 'Get  All Category',
    })
    async getCategories(): Promise<Category[]> {
        return this.categoryService.findAll();
    }
}
