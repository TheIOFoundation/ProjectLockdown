import { Injectable } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CategoryRepository } from '../repositories/category.repository';

@Injectable()
export class CategoryService {
    constructor(private repository: CategoryRepository) {}

    async findAll(): Promise<Category[]> {
        return this.repository.find();
    }

    async findById(id: number): Promise<Category> {
        return this.repository.getById(id);
    }

    async create(input: Category): Promise<Category> {
        return this.repository.save(input);
    }
}
