import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSetLayerController } from './controllers/dataSetLayer.controller';
import { DataSetLayer } from './entities/dataSetLayer.entity';
import { DSLService } from './services/dataSetLayer.service';

@Module({
    imports: [TypeOrmModule.forFeature([DataSetLayer])],
    providers: [DSLService],
    controllers: [DataSetLayerController],
})
export class DSLModule {}
