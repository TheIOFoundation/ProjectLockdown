import { IsString, IsArray, IsEnum } from "class-validator";
import { DSE_SOURCE } from "../shared/constant";

export class DataSetEntryInputDto {
    @IsString()
    refId: string;

    @IsEnum({
        type: 'enum',
        enum: DSE_SOURCE,
        default: DSE_SOURCE.OTHER,
    })
    role: DSE_SOURCE;
    
    @IsArray()
    answers: string[];

}