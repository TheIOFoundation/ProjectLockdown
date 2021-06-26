import { Injectable } from '@nestjs/common';
import { DataSetEntriesAPI } from './datasetentries.models';

@Injectable()
export class DataSetEntriesService {
    getData(entriesQuerry: DataSetEntriesAPI) {
        return entriesQuerry;
    }
}
