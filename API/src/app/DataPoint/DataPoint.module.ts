import { Module } from '@nestjs/common';
import DataPointController from './DataPoint.controller';
import DataPoint, { DataPointSchema } from './DataPoint.schema';
import DataPointService from './DataPoint.service';
import { AnswerModel, AnswerService } from '../Answer';
import { AnswerSchema } from '../Answer/Answer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategoryService } from '../Category';
import { CategorySchema } from '../Category/Category.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Category.name, schema: CategorySchema },
            { name: DataPoint.name, schema: DataPointSchema },
            { name: AnswerModel.name, schema: AnswerSchema },
        ]),
    ],
    providers: [DataPointService, CategoryService, AnswerService],
    controllers: [DataPointController],
})
export default class DataPointModule {}
