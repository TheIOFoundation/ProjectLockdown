import { Stats } from 'fs';
/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';

export interface IAnswerType extends Document {
    AnswerTypeUID: string;
    Type: string; // Source, Docs, UI, Codebase
    Value: string;
    Color: string;
}

export const AnswerTypeSchema: Schema = new Schema({
    AnswerTypeUID: { type: String, required: true, unique: true },
    Type: { type: String },
    Value: { type: String },
    Color: { type: String }
});

export default mongoose.model<IAnswerType>('AnswerType', AnswerTypeSchema);