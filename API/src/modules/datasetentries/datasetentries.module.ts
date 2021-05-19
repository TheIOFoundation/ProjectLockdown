import { Module } from '@nestjs/common';
import DataSetEntriesController from './datasetentries.controller';
import { DataSetEntriesService } from './datasetentries.service';

@Module({
  imports: [],
  controllers: [DataSetEntriesController],
  providers: [DataSetEntriesService],
})
export class DataSetEntriesModule {}
