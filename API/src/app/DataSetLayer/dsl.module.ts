import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DataSetLayerController from './dataSetLayer.controller';
import DataSetLayer from './dataSetLayer.entity';
import DSLService from './dataSetLayer.service';

@Module({
    imports: [TypeOrmModule.forFeature([DataSetLayer])],
    providers: [DSLService],
    controllers: [DataSetLayerController],
})
export default class DSLModule {}
