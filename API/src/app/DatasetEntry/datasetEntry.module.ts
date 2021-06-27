import { Module } from '@nestjs/common';
import DataSetEntriesController from './datasetEntry.controller';
import { DataSetEntryService } from './datasetEntry.service';

@Module({
    imports: [],
    controllers: [DataSetEntriesController],
    providers: [DataSetEntryService],
})
export class DataSetEntriesModule {}
