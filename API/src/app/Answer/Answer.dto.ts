import {IsDateString, IsString } from "class-validator";

export class AnswerInputDto {

    @IsString()
    refId: string

    @IsString()
    detail: string;

    @IsDateString()
    dateStart: Date;

    @IsDateString()
    dateEnd: Date;

    @IsString()
    category: string;
;
    @IsString()
    dataPoint: string;

    @IsString()
    dsl: string
}