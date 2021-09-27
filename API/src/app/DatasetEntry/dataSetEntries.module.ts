import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DataSetEntryController from './dataSetEntries.controller';
import DataSetEntries from './dataSetEntries.entity';
import DataSetEntriesService from './dataSetEntries.service';

@Module({
    imports: [TypeOrmModule.forFeature([DataSetEntries])],
    controllers: [DataSetEntryController],
    providers: [DataSetEntriesService],
})
export default class DataSetEntriesModule {}
