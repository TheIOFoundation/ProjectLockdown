import { Module } from '@nestjs/common';
import CategoryController from './CategoryController';
import Category, { CategorySchema } from './Category';
import CategoryService from './CategoryService';
import { MongooseModule } from '@nestjs/mongoose';
import { DataPoint, DataPointService } from '../DataPoint';
import { DataSetLayer } from '../DataSetLayer';
import { DataPointSchema } from '../DataPoint/DataPoint';
import { DataSetLayerSchema } from '../DataSetLayer/DataSetLayer';
import DataSetLayerService from '../DataSetLayer/DataSetLayerService';
@Module({
    imports: [
    MongooseModule.forFeature([
        { name: Category.name, schema: CategorySchema },
        { name: DataPoint.name, schema: DataPointSchema},
        { name: DataSetLayer.name, schema: DataSetLayerSchema },
    ]),
],
    providers: [CategoryService,DataPointService, DataSetLayerService],
    controllers: [CategoryController],
})
export default class CategoryModule {}
