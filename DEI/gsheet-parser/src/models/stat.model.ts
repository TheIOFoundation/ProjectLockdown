/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';
import ILink = require('./link.model');
import IDate = require('./date.model');

export enum StatType {
    SourcesPerTerritory = 'SourcesPerTerritory',
    SourcesPerUser = 'SourcesPerUser'
}

export interface IStat extends Document {
    StatUID?: string;
    DateLastUpdate?: Date;
    Description?: string;
    Name?: string;
    Notes?: string;
    Status?: string;
    Type?: StatType;
    URLCode?: string;
    URLDoc?: string;
    Value?: string;
}

export const StatSchema: Schema = new Schema({
    StatUID: { type: String, unique: true },
    DateLastUpdate: { type: Date },
    Description: { type: String },
    Name: { type: String },
    Notes: { type: String },
    Status: { type: String },
    Type: { type: String, enum: Object.values(StatType) },    // enum: SourcesPerTerritory, SourcesPerUser
    URLCode: [{ type: String }],
    URLDoc: { type: String },
    Value: { type: String }
});

export default mongoose.model<IStat>('Stat', StatSchema);