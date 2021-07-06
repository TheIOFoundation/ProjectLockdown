import { Module } from '@nestjs/common';
import { SnapshotsController } from './snapshots.controller';
import { SnapshotsService } from './snapshots.service';

@Module({
    imports: [],
    controllers: [SnapshotsController],
    providers: [SnapshotsService],
})
export class SnapshotsModule {}
