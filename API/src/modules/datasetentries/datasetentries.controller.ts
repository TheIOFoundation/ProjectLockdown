import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { Response } from 'express';
import { DataSetEntriesAPI } from './datasetentries.models';
import { DataSetEntriesService } from './datasetentries.service';

@Controller('datasetentries')
class DataSetEntriesController {
    constructor(private dataSetEntriesService: DataSetEntriesService) {}

    @Get(':DSLUID/:DateStart/:DateEnd/:PLDCODE')
    getDataSetEntry(
        @Param('DSLUID') dslUid: string,
        @Param('DateStart') startDate: string,
        @Param('DateEnd') endDate: string,
        @Param('PLDCODE') pldCode: string,
        @Res() res: Response,
    ) {
        const apiQuerry = new DataSetEntriesAPI(
            dslUid,
            startDate,
            endDate,
            pldCode,
        );
        const result = this.dataSetEntriesService.getData(apiQuerry);
        return res.status(HttpStatus.OK).json(result);
    }
}

export default DataSetEntriesController;
