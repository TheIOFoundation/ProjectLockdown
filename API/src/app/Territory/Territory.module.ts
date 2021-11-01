import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Region } from '../Region';
import { RegionSchema } from '../Region/Region.schema';
import RegionService from '../Region/Region.service';
import TerritoryController from './Territory.controller';
import Territory, { TerritorySchema } from './Territory.schema';
import TerritoryService from './Territory.service';

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
