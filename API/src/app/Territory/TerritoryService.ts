import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Model } from 'mongoose';
import RegionService from '../Region/RegionService';
import { TerritoryInputDTO } from './territory.dto';
import { Territory } from './Territory';

@Injectable()
export default class TerritoryService {
    constructor(
        @InjectModel(Territory.name)
        private readonly model: Model<Territory>,
        private readonly regionService: RegionService,
    ) {}

    async getAll(): Promise<Territory[]> {
        return this.model.find();
    }

    async getOne(id: string): Promise<Territory | null> {
        return this.model.findById(id).exec();
    }

    async getOneByPLD(code: string): Promise<Territory | null> {
        try {
            const pld = await this.model.findOne({ pldCode: code }).exec();
            return pld;
        } catch (error) {
            throw new NotFoundException();
        }
    }

    async insertOne(input: TerritoryInputDTO): Promise<Territory> {
        const { region } = input;
        const regionModel = (await this.regionService.getOne(region)) ?? null;
        const newT = {...input, region: regionModel};
        const newTerritory = new this.model(newT);
        try {
            const createdTerritory = await newTerritory.save();
            return createdTerritory;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async updateOne(
        id: string,
        inputData: TerritoryInputDTO,
    ): Promise<Territory | null> {
        const updateData = plainToClass(Territory, inputData, {
            excludeExtraneousValues: true,
        });
        const territory = await this.model
            .findByIdAndUpdate(id, updateData)
            .setOptions({ overwrite: true, new: true })
            .exec();
        if (!territory) {
            throw new NotFoundException();
        }
        return territory;
    }

    async deleteOne(
        id: string,
    ): Promise<{ deleted: boolean; message?: string }> {
        try {
            const result = await this.model.findByIdAndDelete(id).exec();
            if (!result) {
                return { deleted: false, message: 'Item not Found' };
            }
            return { deleted: true };
        } catch (err) {
            return { deleted: false, message: err.message };
        }
    }
}
