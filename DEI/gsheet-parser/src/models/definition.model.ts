import { Stats } from 'fs';
/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';

export interface IDefinition extends Document {
    NameShort: string;
    Name: string;
    Description: string; 
    IconID: string; 
    Tags: string;
    Order: number;
}

export const DefinitionSchema: Schema = new Schema({
    NameShort: { type: String },
    Name: { type: String },
    Description: { type: String },
    IconID: { type: String },
    Tags: { type: String },
    Order: { type: Number },
});

export default mongoose.model<IDefinition>('Definition', DefinitionSchema);