/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';
import IAnswer = require('./answer.model');

export interface IDataSetEntry extends Document {
    DSEUID: string;
    Funnel: string;
    Status: string;
    Answers: IAnswer.IAnswer[];
    DateTimestampEncoded: Date;
    DSLUID: string;
    Type: string;
    TerritoryUID: string;
}

export const DataSetEntrySchema: Schema = new Schema({
    DSEUID: { type: String, required: true, unique: true },
    Funnel: { type: String },
    Status: { type: String },
    Answers: [{ type: IAnswer.AnswerSchema }],
    DateTimestampEncoded: { type: Date },
    DSLUID: { type: String },
    Type: { type: String },
    TerritoryUID: { type: String },
});

export default mongoose.model<IDataSetEntry>('DataSetEntry', DataSetEntrySchema);