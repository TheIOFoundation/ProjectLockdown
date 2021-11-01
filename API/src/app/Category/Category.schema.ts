
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { DataPoint } from '../DataPoint';
import * as mongoose from 'mongoose';
import {DSLModel} from '../DataSetLayer';
@Schema({_id: false})
export default class Category extends Document {
  
    @Prop({type: mongoose.Types.ObjectId})
    _id: mongoose.Types.ObjectId;
    @Prop()
    
    @Prop()
    refId: string;
    @Prop()
    name: string;
    @Prop({ nullable: true, default: null })
    description: string;
    @Prop({ nullable: true, default: null })
    iconId: string;
    @Prop({ nullable: true, default: [], array: true })
    tags: string[];
    @Prop()
    order: number;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: DataPoint.name })
    @Type(() => DataPoint)
    dataPoints: DataPoint[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: DSLModel.name })
    @Type(() => DSLModel)
    dsl: DSLModel;
}
export const CategorySchema = SchemaFactory.createForClass(Category);