import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './controllers/Category.controller';
import { Category } from './entities/category.entity';
import { CategoryService } from './services/Category.service';

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers: [CategoryService],
    controllers: [CategoryController],
})
export class CategoryModule {}
