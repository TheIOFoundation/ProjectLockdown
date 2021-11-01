import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ _id: false })
export default class Region extends Document {
    @Prop({ type: Types.ObjectId })
    _id: Types.ObjectId;
    @Prop()
    @Prop({ type: String })
    name: string;
    @Prop({ type: String }) tld: string;
    @Prop({ type: String }) description: string;
}
export const RegionSchema = SchemaFactory.createForClass(Region);
