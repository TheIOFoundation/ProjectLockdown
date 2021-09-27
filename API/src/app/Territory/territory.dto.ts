import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class TerritoryInputDTO {
    @IsNotEmpty()
    @IsString()
    pldCode: string;

    @IsString()
    name: string;

    @IsString()
    note: string;
    @IsString()
    @IsNotEmpty()
    isO2: string;

    @IsString()
    @IsNotEmpty()
    isO3: string;

    @IsString()
    unCode: string;
    @IsString()
    natoCode: string;
    @IsString()
    wikidateId: string;
    @IsString()
    researcher: string;
    @IsString()
    encoder: string;
    @IsString()
    editor: string;
    @IsString()
    boundaryLevel: string;
    @IsArray()
    subTerritories: string;
    @IsString()
    region!: string;
}
