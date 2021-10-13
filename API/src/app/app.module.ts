import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import RegionModule from './Region/RegionModule';
import TerritoryModule from './Territory/TerritoryModule';
import DataSetLayerModule from './DataSetLayer/DataSetLayerModule';
import { DataSetEntryModule } from './DatasetEntry';
import { DataPointModule } from './DataPoint';
import { CategoryModule } from './Category';
import { AnswerModule } from './Answer';

// load .env
dotenv.config({ path: '.env' });
@Module({
    imports: [
        ConfigModule.forRoot({
            validationSchema: Joi.object({
                DB_USERNAME: Joi.string().required(),
                DB_PASSWORD: Joi.string().required(),
                DB_NAME: Joi.string().required(),
                DB_HOST: Joi.string().required(),
            }),
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {
                const username = configService.get('DB_USERNAME');
                const password = configService.get('DB_PASSWORD');
                const database = configService.get('DB_NAME');
                const host = configService.get('DB_HOST');

                return {
                    uri: `mongodb://${username}:${password}@${host}`,
                    dbName: database,
                };
            },
            inject: [ConfigService],
        }),
        TerritoryModule,
        RegionModule,
        DataSetLayerModule,
        DataSetEntryModule,
        DataPointModule,
        CategoryModule,
        AnswerModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
