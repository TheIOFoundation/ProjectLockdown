import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Model } from 'mongoose';
import { RegionInputDTO } from './region.dto';
import { Region } from './region.schema';

@Injectable()
export default class RegionService {
    constructor(
        @InjectModel(Region.name)
        private readonly model: Model<Region>,
    ) {}

    async getAll(): Promise<Region[]> {
        return this.model.find();
    }

    async getOne(id: string): Promise<Region | null> {
        return this.model.findById(id).exec()
    }

    async getOneByName(name: string): Promise<Region | null> {
        return  this.model.findOne({ name }).exec();
    }

    async insertOne(input: RegionInputDTO): Promise<Region> {
        const newRegion = await new this.model(input);
        return newRegion.save();
    }

    async updateOne(
        id: string,
        inputData: RegionInputDTO,
    ): Promise<Region | null> {
        const updateData = plainToClass(Region, inputData, {
            excludeExtraneousValues: true,
        });
        const region = await this.model
            .findByIdAndUpdate(id, updateData)
            .setOptions({ overwrite: true, new: true })
            .exec();
        if (!region) {
            throw new NotFoundException();
        }
        return region;
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
