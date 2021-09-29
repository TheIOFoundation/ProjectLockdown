import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DataPointController from './DataPointController';
import DataPoint from './DataPoint';
import DataPointService from './DataPointService';

@Module({
    imports: [TypeOrmModule.forFeature([DataPoint])],
    providers: [DataPointService],
    controllers: [DataPointController],
})
export default class DataPointModule {}
