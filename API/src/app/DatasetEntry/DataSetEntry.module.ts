import { Module } from '@nestjs/common';
import DataSetEntryController from './DataSetEntry.controller';
import DataSetEntryService from './DataSetEntry.service';
import { AnswerModel, AnswerService } from '../Answer';
import { AnswerSchema } from '../Answer/Answer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import DataSetLayer from '../DataSetLayer/DataSetLayer.schema';
import { DataSetLayerSchema } from '../DataSetLayer/DataSetLayer.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: AnswerModel.name, schema: AnswerSchema },
            { name: DataSetLayer.name, schema: DataSetLayerSchema },
        ]),
    ],
    controllers: [DataSetEntryController, AnswerService],
    providers: [DataSetEntryService],
})
export default class DataSetEntryModule {}
