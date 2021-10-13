import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSetLayerDTOInput } from './DataSetLayer.dto';
import DataSetLayer from './DataSetLayer';
import { Model } from 'mongoose';
import { CategoryService } from '../Category';

@Injectable()
export default class DataSetLayerService {
    constructor(
        @InjectRepository(DataSetLayer)
        private readonly model: Model<DataSetLayer>,
        private readonly categoryService: CategoryService,
    ) {}

    async findAll(): Promise<DataSetLayer[]> {
        return this.model.find();
    }

    async insertOne(input: DataSetLayerDTOInput) {
        const {categories} = input;
        const allCategory = categories.map((category) => {
            return this.categoryService.getOne(category);
        });
        const newDataSetLayer = {...input , categories: allCategory};
        const dataSetLayer = new this.model(newDataSetLayer);
        return dataSetLayer.save();
    }

    async getOne(id: string) : Promise<DataSetLayer | null> {
        return this.model.findById(id);
    }
}
