import { Module } from '@nestjs/common';
import CategoryController from './Category.controller';
import Category, { CategorySchema } from './Category.schema';
import CategoryService from './Category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DataPoint, DataPointService } from '../DataPoint';
import { DSLModel, DSLService } from '../DataSetLayer';
import { DataPointSchema } from '../DataPoint/DataPoint.schema';
import { DataSetLayerSchema } from '../DataSetLayer/DataSetLayer.schema';
@Module({
    imports: [
    MongooseModule.forFeature([
        { name: Category.name, schema: CategorySchema },
        { name: DataPoint.name, schema: DataPointSchema},
        { name: DSLModel.name, schema: DataSetLayerSchema },
    ]),
],
    providers: [CategoryService,DataPointService, DSLService],
    controllers: [CategoryController],
})
export default class CategoryModule {}
