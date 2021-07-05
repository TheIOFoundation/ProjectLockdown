import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { Response } from 'express';
import { DataSetEntries } from './dataSetEntries.models';
import { DataSetEntriesService } from './dataSetEntries.service';

@Controller('datasetEntry')
export class DataSetEntryController {
    constructor(private dataSetEntryService: DataSetEntriesService) {}

    @Get(':DSLUID/:DateStart/:DateEnd/:PLDCODE')
    getDataSetEntry(
        @Param('DSLUID') dslUid: string,
        @Param('DateStart') startDate: string,
        @Param('DateEnd') endDate: string,
        @Param('PLDCODE') pldCode: string,
        @Res() res: Response,
    ) {
        const apiQuerry = new DataSetEntries(
            dslUid,
            startDate,
            endDate,
            pldCode,
        );
        const result = this.dataSetEntryService.getData(apiQuerry);
        return res.status(HttpStatus.OK).json(result);
    }
}
