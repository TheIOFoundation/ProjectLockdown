import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSetLayerDTOInput } from './DataSetLayer.dto';
import DataSetLayer from './DataSetLayer.schema';
import { Model } from 'mongoose';

@Injectable()
export default class DataSetLayerService {
    constructor(
        @InjectRepository(DataSetLayer)
        private readonly model: Model<DataSetLayer>,
    ) {}

    async findAll(): Promise<DataSetLayer[]> {
        return this.model.find();
    }

    async insertOne(input: DataSetLayerDTOInput) {
        
        const newDataSetLayer = {...input };
        const dataSetLayer = new this.model(newDataSetLayer);
        console.log({dataSetLayer});
        return dataSetLayer.save();
    }

    async getOne(id: string) : Promise<DataSetLayer | null> {
        return this.model.findById(id);
    }
}
