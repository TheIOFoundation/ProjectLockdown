import { Module } from '@nestjs/common';
import DataPointController from './DataPointController';
import DataPoint, { DataPointSchema } from './DataPoint';
import DataPointService from './DataPointService';
import { Answer, AnswerService } from '../Answer';
import { AnswerSchema } from '../Answer/Answer';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategoryService } from '../Category';
import { CategorySchema } from '../Category/Category';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Category.name, schema: CategorySchema },
            { name: DataPoint.name, schema: DataPointSchema},
            { name: Answer.name, schema: AnswerSchema },
        ]),
    ],
    providers: [DataPointService, CategoryService, AnswerService],
    controllers: [DataPointController],
})
export default class DataPointModule {}
