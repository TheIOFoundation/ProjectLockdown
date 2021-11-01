import { Module } from '@nestjs/common';
import AnswerController from './AnswerController';
import Answer, { AnswerSchema } from './Answer';
import AnswerService from './AnswerService';
import { Category, CategoryService } from '../Category';
import { CategorySchema } from '../Category/Category.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DataPoint, DataPointService } from '../DataPoint';
import { DataPointSchema } from '../DataPoint/DataPoint.schema';
import {DSLModel,DSLService}  from '../DataSetLayer';
import { DataSetLayerSchema } from '../DataSetLayer/DataSetLayer.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Answer.name, schema: AnswerSchema },
            { name: Category.name, schema: CategorySchema },
            { name: DataPoint.name, schema: DataPointSchema},
            { name: DSLModel.name, schema: DataSetLayerSchema },
        ]),
    ],
    providers: [AnswerService, CategoryService, DataPointService, DSLService],
    controllers: [AnswerController],
})
export default class AnswerModule {}
