import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataPointController } from './controllers/dataPpoint.controller';
import { DataPoint } from './entities/dataPoint.entity';
import { DataPointService } from './services/dataPoint.service';

@Module({
    imports: [TypeOrmModule.forFeature([DataPoint])],
    providers: [DataPointService],
    controllers: [DataPointController],
})
export class DataPointModule {}
