import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Region, RegionSchema } from '../Region/Region';
import RegionService from '../Region/RegionService';
import TerritoryController from './TerritoryController';
import { Territory, TerritorySchema } from './Territory';
import TerritoryService from './TerritoryService';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Region.name, schema: RegionSchema },
            { name: Territory.name, schema: TerritorySchema },
        ]),
    ],
    providers: [TerritoryService, RegionService],
    controllers: [TerritoryController],
})
export default class TerritoryModule {}
