import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DSLModule } from './DataSetLayer';
import { AnswerModule } from './Answer';
import { CategoryModule } from './Category';
import { DataPointModule } from './DataPoint';
import { DataSetEntryModule } from './DatasetEntry';
import { RegionModule } from './Region';
import TerritoryModule from './Territory/Territory.module';

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
        DSLModule,
        DataSetEntryModule,
        DataPointModule,
        CategoryModule,
        AnswerModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
