import { Module } from '@nestjs/common';
import { DataSetEntryController } from './dataSetEntries.controller';
import { DataSetEntriesService } from './dataSetEntries.service';

@Module({
    imports: [],
    controllers: [DataSetEntryController],
    providers: [DataSetEntriesService],
})
export class DataSetEntriesModule {}
