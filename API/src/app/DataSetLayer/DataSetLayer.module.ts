import { Module } from '@nestjs/common';
import DataSetLayerController from './DataSetLayer.controller';
import DataSetLayer, { DataSetLayerSchema } from './DataSetLayer.schema';
import DataSetLayerService from './DataSetLayer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategoryService } from '../Category';
import { CategorySchema } from '../Category/Category.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Category.name, schema: CategorySchema },
            { name: DataSetLayer.name, schema: DataSetLayerSchema },
        ]),
    ],
    providers: [DataSetLayerService, CategoryService],
    controllers: [DataSetLayerController],
})
export default class DataSetLayerModule {}
