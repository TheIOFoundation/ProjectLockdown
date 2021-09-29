import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategoryController from './CategoryController';
import Category from './Category';
import CategoryService from './CategoryService';

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers: [CategoryService],
    controllers: [CategoryController],
})
export default class CategoryModule {}
