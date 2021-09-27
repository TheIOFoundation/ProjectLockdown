import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Region, RegionSchema } from '../Region/region.schema';
import RegionService from '../Region/region.service';
import TerritoryController from './territory.controller';
import { Territory, TerritorySchema } from './territory.schema';
import TerritoryService from './territory.service';

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
