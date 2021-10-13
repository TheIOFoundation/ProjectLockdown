
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Answer } from '../Answer';
import { Category } from '../Category';
import * as mongoose from 'mongoose';

@Schema({_id:false})
export default class DataPoint extends Document {

    @Prop({type: mongoose.Types.ObjectId})
    _id: mongoose.Types.ObjectId;
    @Prop()
    
    @Prop()
    refId: string;
    @Prop()
    nameShort: string;
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

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name })
    @Type(() => Category)
    category: Category;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Answer.name })
    @Type(() => Answer)
    answer: Answer;
}
export const DataPointSchema  = SchemaFactory.createForClass(DataPoint);