import { Module } from '@nestjs/common';
import AnswerController from './AnswerController';
import Answer, { AnswerSchema } from './Answer';
import AnswerService from './AnswerService';
import { Category, CategoryService } from '../Category';
import { CategorySchema } from '../Category/Category';
import { MongooseModule } from '@nestjs/mongoose';
import { DataPoint, DataPointService } from '../DataPoint';
import { DataPointSchema } from '../DataPoint/DataPoint';
import { DataSetLayer } from '../DataSetLayer';
import { DataSetLayerSchema } from '../DataSetLayer/DataSetLayer';
import DataSetLayerService from '../DataSetLayer/DataSetLayerService';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Answer.name, schema: AnswerSchema },
            { name: Category.name, schema: CategorySchema },
            { name: DataPoint.name, schema: DataPointSchema},
            { name: DataSetLayer.name, schema: DataSetLayerSchema },
        ]),
    ],
    providers: [AnswerService, CategoryService, DataPointService, DataSetLayerService],
    controllers: [AnswerController],
})
export default class AnswerModule {}
