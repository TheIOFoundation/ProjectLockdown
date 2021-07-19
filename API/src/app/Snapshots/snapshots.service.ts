import { Injectable } from '@nestjs/common';
import { snapshot } from '../../../../MAP/public/data/snapshot.json';

// Returned data inside the date has to contain only ISO and Value
interface IsoValue {
    iso: string;
    value: string;
}

// Returned snapshot format
interface Snapshot {
    [date: string]: IsoValue[];
}

@Injectable()
export class SnapshotsService {
    // Convert the date to UNIX timestamp
    convertDateToStamp(date: string): string {
        return new Date(date).getTime().toString();
    }

    // Select the returned snapshot data according to desired date
    selectSnapshotsByDate(
        startTimestamp: string,
        endTimestamp: string,
    ): Snapshot {
        let timestamp;
        const result = {};

        // Go through all the dates in snapshot
        for (const date in snapshot) {
            // Convert the date to its corresponding UNIX timestamp
            timestamp = this.convertDateToStamp(date);
            // If the timestamp is between the starting and ending timestamp, include it in the result
            if (timestamp >= startTimestamp && timestamp <= endTimestamp) {
                result[date] = snapshot[date];
            }
        }
        // Return the resulting data
        return result;
    }
}
