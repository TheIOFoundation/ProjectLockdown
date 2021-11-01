import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { AnswerService } from '../Answer';
import { CategoryService } from '../Category';
import DataPoint from './DataPoint.schema';
import { DataPointInputDto } from './DataPoint.dto';

@Injectable()
export default class DataPointService {
    constructor(
        @InjectRepository(DataPoint)
        private readonly model: Model<DataPoint>,
        private readonly categoryService: CategoryService,
        private readonly answerService: AnswerService
    ) {}

    async getAll(): Promise<DataPoint[]> {
        return this.model.find();
    }

    async getOne(id: string): Promise<DataPoint | null> {
        return this.model.findById(id);
    }

   

    async insertOne(input: DataPointInputDto): Promise<DataPoint> {
        const {categories, answer} = input;
        const categoryModel = categories.map(async (category) => {
            return this.categoryService.getOne(category);
        });
        const answerModel = await this.answerService.getOne(answer);
        const newDataPoint = {...input, categories: categoryModel, answer: answerModel};
        const dataPoint = new this.model(newDataPoint);
        return dataPoint.save();
    }

}
