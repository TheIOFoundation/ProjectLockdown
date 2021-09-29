/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';
import ITerritory = require('./territory.model');
import IStat = require('./stat.model');

export interface IRegion extends Document {
    name: string;
    description: string;
    tld: string;
}

export const RegionSchema: Schema = new Schema({
    //Name: { type: String, required: true, unique: true },  // TODO: enforce unique key
    name: { type: String, required: true },
    description: { type: String },
    tld: { type: String }
});

export default mongoose.model<IRegion>('Region', RegionSchema);