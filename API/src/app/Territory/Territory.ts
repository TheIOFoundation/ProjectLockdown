import 'reflect-metadata';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type } from 'class-transformer';
import { Region } from '../Region/Region';
import * as mongoose from 'mongoose';

export type TerritoryDocument = Territory & Document;

@Schema({_id: false})
export class Territory extends Document {

    @Prop({type: mongoose.Types.ObjectId})
    _id: mongoose.Types.ObjectId;
    @Prop()
    
    @Prop({ unique: true })
    pldCode: string;
    @Prop({type: String })
    name: string;
    @Prop({type: String})
    notes: string;
    @Prop({type: String})
    isO2: string;
    @Prop({type: String})
    isO3: string;
    @Prop({type: String})
    unCode: string;
    @Prop({type: String})
    natoCode: string;
    @Prop({type: String})
    wikidateId: string;
    @Prop({type: String})
    researcher: string;
    @Prop({type: String})
    encoder: string;
    @Prop({type: String})
    editor: string;
    @Prop({type: String})
    boundaryLevel: string;
    @Prop({type: Array})
    subTerritories: [];
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Region.name })
    @Type(() => Region)
    region: Region;
    
    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;
}

export const TerritorySchema = SchemaFactory.createForClass(Territory);
