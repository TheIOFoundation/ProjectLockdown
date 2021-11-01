import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { AnswerModel } from '../Answer';
import { DSE_SOURCE } from '../shared/constant';
import * as mongoose from 'mongoose';

@Schema({ _id: false })
export default class DataSetEntry extends Document {
    @Prop({ type: mongoose.Types.ObjectId })
    _id: mongoose.Types.ObjectId;
    @Prop()
    @Prop()
    refId: string;

    @Prop({
        type: 'enum',
        enum: DSE_SOURCE,
        default: DSE_SOURCE.OTHER,
    })
    role: DSE_SOURCE;
    @Prop()
    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: AnswerModel.name })
    @Type(() => AnswerModel)
    answers: AnswerModel[];
}
export const DataSetEntrySchema = SchemaFactory.createForClass(DataSetEntry);
