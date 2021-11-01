import { IsString, IsArray, IsNumber } from 'class-validator';

export class DataPointInputDto {
    @IsString()
    refId: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    iconId: string;

    @IsArray()
    tags: string[];

    @IsNumber()
    order: number;

    @IsArray()
    categories: string[];

    @IsString()
    answer: string;
}
