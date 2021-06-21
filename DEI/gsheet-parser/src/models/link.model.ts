/// <reference path="definitions.d.ts" />

import IStat = require('./stat.model');
import mongoose, { Schema, Document } from 'mongoose';

export enum LinkType {
    Source = 'Source',
    Docs = 'Docs',
    UI = 'UI',
    Codebase = 'Codebase'
}

export interface ILink extends Document {
    LinkUID: string;
    Description?: string;
    Help?: string;
    Name?: string;
    Stats?: IStat.IStat[];
    Type: LinkType, // Source, Docs, UI, Codebase
    URL: string
}

export const LinkSchema: Schema = new Schema({
    LinkUID: { type: String, required: true, unique: true },
    Description: { type: String },
    Help: { type: String },
    Name: { type: String },
    Stats: [{ type: IStat.StatSchema }],
    Type: { type: LinkType, required: true }, // Source, Docs, UI, Codebase
    URL: { type: String, required: true },
});

export default mongoose.model<ILink>('Link', LinkSchema);