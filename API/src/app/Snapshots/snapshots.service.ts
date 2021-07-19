import { Injectable } from '@nestjs/common';
import { snapshot } from '../../../../MAP/public/data/snapshot.json';

interface IsoValue {
    iso: string;
    value: string;
}

interface Snapshot {
    [date: string]: IsoValue[];
}

@Injectable()
export class SnapshotsService {
    convertDateToStamp(date: string): string {
        return new Date(date).getTime().toString();
    }

    selectSnapshotsByDate(
        startTimestamp: string,
        endTimestamp: string,
    ): Snapshot {
        let timestamp;
        const result = {};

        for (const date in snapshot) {
            timestamp = this.convertDateToStamp(date);
            if (timestamp >= startTimestamp && timestamp <= endTimestamp) {
                result[date] = snapshot[date];
            }
        }
        return result;
    }
}
