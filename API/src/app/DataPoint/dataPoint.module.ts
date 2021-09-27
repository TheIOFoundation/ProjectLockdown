import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DataPointController from './dataPoint.controller';
import DataPoint from './dataPoint.entity';
import DataPointService from './dataPoint.service';

@Module({
    imports: [TypeOrmModule.forFeature([DataPoint])],
    providers: [DataPointService],
    controllers: [DataPointController],
})
export default class DataPointModule {}
