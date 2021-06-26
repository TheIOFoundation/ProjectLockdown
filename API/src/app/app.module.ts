import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';
import { DSLEntity } from './DSL/entities/dsl.entity';
import { DSLModule } from './DSL/DSL.module';
const mongodbConnection: DatabaseType = 'mongodb';
@Module({
    imports: [
        DSLModule,
        TypeOrmModule.forRoot({
            type: mongodbConnection as any,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            entities: [DSLEntity],
            synchronize: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }),
    ],
})
export class AppModule {}
