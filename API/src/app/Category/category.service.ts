import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import Category from './category.entity';

@Injectable()
export default class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly repository: Repository<Category>,
    ) {}

    async getAll(): Promise<Category[]> {
        return this.repository.find();
    }

    async getOne(id: ObjectID): Promise<Category> {
        return this.repository.findOneOrFail(id);
    }
    async insertOne(input: Category): Promise<Category> {
        const newCategory = this.repository.create(input);
        await this.repository.save(newCategory);
        return newCategory;
    }

    async updateOne(category: Category): Promise<Category> {
        const { id } = category;
        await this.repository.update({ id }, category);
        return this.getOne(id);
    }

    async deleteOne(
        id: ObjectID,
    ): Promise<{ deleted: boolean; message?: string }> {
        try {
            await this.repository.delete(id);
            return { deleted: true };
        } catch (err) {
            return { deleted: false, message: err.message };
        }
    }
}
