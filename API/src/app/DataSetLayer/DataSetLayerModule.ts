import { Module } from '@nestjs/common';
import DataSetLayerController from './DataSetLayerController';
import DataSetLayer, { DataSetLayerSchema } from './DataSetLayer';
import DSLService from './DataSetLayerService';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategoryService } from '../Category';
import { CategorySchema } from '../Category/Category';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Category.name, schema: CategorySchema },
            { name: DataSetLayer.name, schema: DataSetLayerSchema },
        ]),
    ],
    providers: [DSLService, CategoryService],
    controllers: [DataSetLayerController],
})
export default class DataSetLayerModule {}
