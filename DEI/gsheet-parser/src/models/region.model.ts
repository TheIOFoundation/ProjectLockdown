/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';
import ITerritory = require('./territory.model');
import IStat = require('./stat.model');

export interface IRegion extends Document {
    Name: string;
    Description: string;
    TLD: string;
}

export const RegionSchema: Schema = new Schema({
    //Name: { type: String, required: true, unique: true },  // TODO: enforce unique key
    Name: { type: String, required: true },
    Description: { type: String },
    TLD: { type: String }
});

export default mongoose.model<IRegion>('Region', RegionSchema);