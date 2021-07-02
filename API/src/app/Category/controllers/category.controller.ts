import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SwaggerBaseApiResponse } from '../../shared/dtos/base-api-response.dto';
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
    @ApiResponse({
        status: HttpStatus.OK,
        type: SwaggerBaseApiResponse(Category),
    })
    async getCategories(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Post()
    @ApiOperation({
        summary: 'Add Category',
    })
    @ApiResponse({
        status: HttpStatus.CREATED,
        type: SwaggerBaseApiResponse(Category),
    })
    async addCategories(@Body() input: Category) {
        const category = await this.categoryService.create(input);
        return {
            data: category,
            meta: {},
        };
    }
}
