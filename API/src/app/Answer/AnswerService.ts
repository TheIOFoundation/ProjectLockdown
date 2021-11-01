import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryService } from '../Category';
import { DataPointService } from '../DataPoint';
import { DSLService}  from '../DataSetLayer';
import Answer from './Answer';
import { AnswerInputDto } from './Answer.dto';

@Injectable()
export default class AnswerService {
    constructor(
        @InjectModel(Answer.name)
        private readonly model: Model<Answer>,
        private readonly categoryService: CategoryService,
        private readonly dataPointService: DataPointService,
        private readonly dslService: DSLService,
    ) {}

    async getAll(): Promise<Answer[]> {
        return this.model.find();
    }

    async getOne(id: string): Promise<Answer| null> {
        return this.model.findById(id).exec();;
    }

    async insertOne(input: AnswerInputDto): Promise<Answer> {

        try {
            const {category, dataPoint, dsl} = input;
            const categoryModel = await this.categoryService.getOne(category);
            const dataPointModel = await this.dataPointService.getOne(dataPoint);
            const dslModel = await this.dslService.getOne(dsl);
            const newAn = {input, category: categoryModel, dataPoint: dataPointModel, dsl: dslModel}
            const newAnswer = new this.model(newAn);
            return await newAnswer.save();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }

    }
}
