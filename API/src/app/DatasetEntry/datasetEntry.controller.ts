import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { Response } from 'express';
import { DataSetEntry } from './datasetEntry.models';
import { DataSetEntryService } from './datasetEntry.service';

@Controller('datasetEntry')
class DataSetEntryController {
    constructor(private dataSetEntryService: DataSetEntryService) {}

    @Get(':DSLUID/:DateStart/:DateEnd/:PLDCODE')
    getDataSetEntry(
        @Param('DSLUID') dslUid: string,
        @Param('DateStart') startDate: string,
        @Param('DateEnd') endDate: string,
        @Param('PLDCODE') pldCode: string,
        @Res() res: Response,
    ) {
        const apiQuerry = new DataSetEntry(dslUid, startDate, endDate, pldCode);
        const result = this.dataSetEntryService.getData(apiQuerry);
        return res.status(HttpStatus.OK).json(result);
    }
}

export default DataSetEntryController;
