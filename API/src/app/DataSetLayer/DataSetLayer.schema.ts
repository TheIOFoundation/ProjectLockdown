import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ _id: false })
export default class DataSetLayer {
    @Prop({ type: mongoose.Types.ObjectId })
    _id: mongoose.Types.ObjectId;
    @Prop()
    @Prop()
    name: string;
    @Prop() version: string;
    @Prop() status: string;
    @Prop() type: string;
    @Prop() description?: string;

    @Prop({ type: Date, default: Date.now })
    updatedAt: Date;

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;
}
export const DataSetLayerSchema = SchemaFactory.createForClass(DataSetLayer);
