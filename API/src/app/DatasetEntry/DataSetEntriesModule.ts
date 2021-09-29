import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DataSetEntryController from './DataSetEntriesController';
import DataSetEntries from './DataSetEntries';
import DataSetEntriesService from './DataSetEntriesService';

@Module({
    imports: [TypeOrmModule.forFeature([DataSetEntries])],
    controllers: [DataSetEntryController],
    providers: [DataSetEntriesService],
})
export default class DataSetEntriesModule {}
