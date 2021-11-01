import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import RegionController from './Region.controller';
import Region, { RegionSchema } from './Region.schema';
import RegionService from './Region.service';

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
