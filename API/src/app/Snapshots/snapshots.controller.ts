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
        if (dslId == '2') {
            return res.status(502).send('Invalid DSL id');
        } else if (dslId == '1') {
            const snapshotsService = new SnapshotsService();
            const selectedSnapshots = snapshotsService.selectSnapshotsByDate(
                timestampStart,
                timestampEnd,
            );
            return res.status(200).json(selectedSnapshots);
        }
    }
}
