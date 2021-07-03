import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    async getById(id: number): Promise<Category> {
        const category = await this.findOne(id);
        if (!category) {
            throw new NotFoundException();
        }

        return category;
    }
}
