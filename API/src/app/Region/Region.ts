import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Region extends Document {

        @Prop({type: String})  name: string;
        @Prop({type: String})  tld: string;
        @Prop({type: String})  description: string;
}
export const RegionSchema = SchemaFactory.createForClass(Region);
