import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseType, getMetadataArgsStorage } from 'typeorm';
import { CategoryModule } from './Category';
import { DataPointModule } from './DataPoint/dataPoint.module';
import { DSLModule } from './DataSetLayer/DSL.module';
const mongodbConnection: DatabaseType = 'mongodb';
@Module({
    imports: [
        DSLModule,
        DataPointModule,
        CategoryModule,
        TypeOrmModule.forRoot({
            type: mongodbConnection as any,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
            synchronize: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }),
    ],
})
export class AppModule {}
