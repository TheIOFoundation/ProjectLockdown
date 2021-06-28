/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';
import IDefinition = require('./definition.model');
import IAnswer = require('./answer.model');

export interface IDataPoint extends Document {
    DataPointUID: string;
    Definition: IDefinition.IDefinition;
    Status: string;
    DateCreated: Date;
    DateUpdated: Date;
    Answers: IAnswer.IAnswer[];
    DSLUID: string
}

export const DataPointSchema: Schema = new Schema({
    DataPointUID: { type: String, required: true, unique: true },
    Definition: { type: IDefinition.DefinitionSchema },
    Status: { type: String },
    DateCreated: { type: Date },
    DateUpdated: { type: Date },
    Answers: [{ type: IAnswer.AnswerSchema }],
    DSLUID: { type: String }
});

export default mongoose.model<IDataPoint>('DataPoint', DataPointSchema);