import { IsString } from 'class-validator';
export class RegionInputDTO {
    @IsString()
    name: string;

    @IsString()
    tld: string;

    @IsString()
    description: string;
}
