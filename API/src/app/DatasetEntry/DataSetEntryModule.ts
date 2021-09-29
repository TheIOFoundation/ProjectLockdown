import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DataSetEntryController from './DataSetEntryController';
import DataSetEntry from './DataSetEntry';
import DataSetEntryService from './DataSetEntryService';

@Module({
    imports: [TypeOrmModule.forFeature([DataSetEntry])],
    controllers: [DataSetEntryController],
    providers: [DataSetEntryService],
})
export default class DataSetEntryModule {}
