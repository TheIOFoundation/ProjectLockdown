import { Injectable } from '@nestjs/common';
import { DataSetEntry } from './datasetEntry.models';

@Injectable()
export class DataSetEntryService {
    getData(entriesQuery: DataSetEntry) {
        return entriesQuery;
    }
}
