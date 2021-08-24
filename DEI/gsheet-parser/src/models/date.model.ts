/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';
import ILink = require('./link.model');
import IUI = require('./ui.model');
import IStat = require('./stat.model');

export enum GeneratedByType {
    Human = 'Human',
    Algorithm = 'Algorithm'
}

export interface IDate extends Document {
    DateUID: string;
    Description: string;
    GeneratedBy: GeneratedByType;
    Name: string;
    Stats?: IStat.IStat[];
    Type: string;
    UI: IUI.IUI;
    Value: string;
    ValueUTC: string;
    Highlights?: string;
    Links?: ILink.ILink[];
}

export const DateSchema: Schema = new Schema({
    DateUID: { type: String, required: true, unique: true },
    Description: { type: String, required: true },
    GeneratedBy: { type: String, required: true, enum:Object.values(GeneratedByType) },  // emum: Human, Algorithm
    Name: { type: String, required: true },
    Stats: [{ type: IStat.StatSchema }],
    Type: { type: String, required: true }, 
    UI: {
            Description: { type: String },
            Name: { type: String },
            Tooltip: { type: String },
            TabMaxWidth: { type: String },
            TabTitle: { type: String },
            TabTooltip: { type: String },
     },
    Value: { type: String, required: true }, 
    ValueUTC: { type: String, required: true }, 
    Highlights: { type: String }, 
    Links: [{ type: ILink.LinkSchema }]

    // save Stats
    // save Links
});

export default mongoose.model<IDate>('Date', DateSchema);