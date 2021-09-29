import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import RegionController from './RegionController';
import { Region, RegionSchema } from './Region';
import RegionService from './RegionService';

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
