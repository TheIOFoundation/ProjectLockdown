import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseType, getMetadataArgsStorage } from 'typeorm';
import { CategoryModule } from './Category';
import { DataPointModule } from './DataPoint/dataPoint.module';
import { SnapshotsModule } from './Snapshots/snapshots.module';
import { SnapshotsController } from './Snapshots/snapshots.controller';
import { DSLModule } from './DataSetLayer/DSL.module';
const mongodbConnection: DatabaseType = 'mongodb';
@Module({
    controllers: [SnapshotsController],
    imports: [
        DSLModule,
        DataPointModule,
        CategoryModule,
        SnapshotsModule,
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
