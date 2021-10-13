import { Module } from '@nestjs/common';
import DataSetEntryController from './DataSetEntryController';
import DataSetEntryService from './DataSetEntryService';
import { Answer, AnswerService } from '../Answer';
import { AnswerSchema } from '../Answer/Answer';
import { MongooseModule } from '@nestjs/mongoose';
import { DataSetLayer } from '../DataSetLayer';
import { DataSetLayerSchema } from '../DataSetLayer/DataSetLayer';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Answer.name, schema: AnswerSchema},
            { name: DataSetLayer.name, schema: DataSetLayerSchema },
        ]),
    ],
    controllers: [DataSetEntryController, AnswerService],
    providers: [DataSetEntryService],
})
export default class DataSetEntryModule {}
