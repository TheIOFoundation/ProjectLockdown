import { Injectable } from '@nestjs/common';
import { DataSetEntries } from './dataSetEntries.models';

@Injectable()
export class DataSetEntriesService {
    getData(entriesQuery: DataSetEntries) {
        return entriesQuery;
    }
}
