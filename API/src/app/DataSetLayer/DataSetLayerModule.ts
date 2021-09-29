import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DataSetLayerController from './DataSetLayerController';
import DataSetLayer from './DataSetLayer';
import DSLService from './DataSetLayerService';

@Module({
    imports: [TypeOrmModule.forFeature([DataSetLayer])],
    providers: [DSLService],
    controllers: [DataSetLayerController],
})
export default class DataSetLayerModule {}
