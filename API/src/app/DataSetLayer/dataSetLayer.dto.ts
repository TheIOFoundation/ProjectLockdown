import { IsString } from 'class-validator';

export class DataSetLayerDTOInput {
    @IsString()
    name: string;

    @IsString()
    version: string;

    @IsString()
    status: string;

    @IsString()
    type: string;

    @IsString()
    description: string;
}
