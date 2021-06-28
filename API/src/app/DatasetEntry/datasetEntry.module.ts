import { Module } from '@nestjs/common';
import { DataSetEntryController } from './datasetEntry.controller';
import { DataSetEntryService } from './datasetEntry.service';

@Module({
    imports: [],
    controllers: [DataSetEntryController],
    providers: [DataSetEntryService],
})
export class DataSetEntriesModule {}
