import { IsArray, IsNumber, IsString } from "class-validator";

export class CategoryInputDTO{
    
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
    dataPoints: string[];

    @IsString()
    dsl: string;

}