import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import { CategoryModule } from './Category';
import { DataPointModule } from './DataPoint/dataPoint.module';
import { DSLModule } from './DataSetLayer/DSL.module';
import * as dotenv from 'dotenv';

// load .env
dotenv.config({ path: '.env' });

@Module({
    imports: [
        DSLModule,
        DataPointModule,
        CategoryModule,
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: process.env.DB_HOST,
            port: parseInt(`${process.env.DB_PORT}`),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
            synchronize: true,
            ssl: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),
    ],
})
export class AppModule {}
