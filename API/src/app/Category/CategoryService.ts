import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { DataPointService } from '../DataPoint';
import { DSLService } from '../DataSetLayer';
import Category from './Category';
import { CategoryInputDTO } from './Category.dto';

@Injectable()
export default class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly model: Model<Category>,
        private readonly dataPointService: DataPointService,
        private readonly dslService: DSLService,
    ) {}

    async getAll(): Promise<Category[]> {
        return this.model.find();
    }

    async getOne(id: string ): Promise<Category | null> {
        return this.model.findById(id).exec();
    }

    async insertOne(input: CategoryInputDTO): Promise<Category> {
        try {
            const {dataPoints, dsl} = input;
            const allDataPoint = dataPoints.map(async (dataPoint) => {
                return this.dataPointService.getOne(dataPoint);
            });
            const dslModel = await this.dslService.getOne(dsl);
            const newC = {input, dataPoint: allDataPoint, dls: dslModel};
            const newCategory =  new this.model(newC);
            return await newCategory.save();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
