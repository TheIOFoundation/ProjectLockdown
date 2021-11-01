import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { Category } from "../Category";
import * as mongoose from 'mongoose';
import { DataPoint } from "../DataPoint";
import {DSLModel}  from "../DataSetLayer";

@Schema({_id: false})
export  default class Answer extends Document{
    
    @Prop({type: mongoose.Types.ObjectId})
    _id: mongoose.Types.ObjectId;
    @Prop()
    
    refId: string;
    @Prop()
    details: string;
    @Prop({ name: 'dateStart' })
    dateStart: Date;
    @Prop({ name: 'dateEnd' })
    dateEnd: Date;
    
    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name })
    @Type(() => Category)
    category: Category;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: DataPoint.name })
    @Type(() => DataPoint)
    dataPoint: DataPoint;
   
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: DSLModel.name })
    @Type(() => DSLModel)
    dsl: DSLModel;
}
export const AnswerSchema = SchemaFactory.createForClass(Answer);