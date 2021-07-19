import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { SnapshotsService } from './snapshots.service';

@Controller('snapshots')
export class SnapshotsController {
    @Get(':DSLid/:TimestampStart/:TimestampEnd')
    getSnapshotData(
        @Param('DSLid') dslId: string,
        @Param('TimestampStart') timestampStart: string,
        @Param('TimestampEnd') timestampEnd: string,
        @Res() res: Response,
    ) {
        // If the DSL id is 2, then it should return nothing other than the appropriate error message
        if (dslId == '2') {
            return res.status(502).send('Invalid DSL id');
        }
        // Otherwise, if the DSL id is 1
        else if (dslId == '1') {
            // Create an instance of snapshots service
            const snapshotsService = new SnapshotsService();
            // Select appropriate snapshots data by starting and ending timestamp
            const selectedSnapshots = snapshotsService.selectSnapshotsByDate(
                timestampStart,
                timestampEnd,
            );
            // Return the selected snapshot data
            return res.status(200).json(selectedSnapshots);
        }
    }
}
