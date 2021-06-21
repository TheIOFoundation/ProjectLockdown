/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';

export interface IAnswer extends Document {
    AnswerUID?: string;
    Value: any;
    DateStart: Date;
    DateEnd: Date;
    DataPointUID: string;
    Details: string;
    DSEUID: string;
    Type: string;
    TerritoryUID: string;
}

export const AnswerSchema: Schema = new Schema({
    AnswerUID: { type: String },
    Value: { type: Schema.Types.Mixed },
    DateStart: { type: Date },
    DateEnd: { type: Date },
    DataPointUID: { type: String },
    Details: { type: String },
    DSEUID: { type: String },
    Type: { type: String },
    TerritoryUID: { type: String }
});

export default mongoose.model<IAnswer>('Answer', AnswerSchema);