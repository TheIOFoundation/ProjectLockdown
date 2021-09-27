import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import RegionController from './region.controller';
import { Region, RegionSchema } from './region.schema';
import RegionService from './region.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Region.name, schema: RegionSchema },
        ]),
    ],
    providers: [RegionService],
    controllers: [RegionController],
})
export default class RegionModule {}
