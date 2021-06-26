import { Injectable } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CategoryRepository } from '../repositories/category.repository';

@Injectable()
export class CategoryService {
    constructor(private repository: CategoryRepository) {}

    async findAll(): Promise<Category[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<Category> {
        return await this.repository.getById(id);
    }
}
