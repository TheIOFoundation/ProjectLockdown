import { Expose } from 'class-transformer';

export class DataSetLayerDTOInput {
    @Expose()
    name: string;

    @Expose()
    version: string;

    @Expose()
    status: string;

    @Expose()
    type: string;

    @Expose()
    description: string;

    @Expose()
    categories: string[];
}

export class DataSetLayerDTOOutput {
    @Expose()
    id: string;
    @Expose()
    name: string;

    @Expose()
    version: string;

    @Expose()
    status: string;

    @Expose()
    type: string;

    @Expose()
    description: string;

    @Expose()
    categories: string[];

    @Expose()
    createdAt: string;

    @Expose()
    updatedAt: string;
}
