/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';
import IRegion = require('./region.model');

export interface ITerritory extends Document {
    pldCode: string;
    name: string;
    notes?: string;
    description?: string;
    isO2: string;
    isO3: string;
    unCode?: string;
    natoCode?: string;
    wikidataId?: string;
    researcher?: string;
    encoder?: string;
    editor?: string;
    region?: IRegion.IRegion['_id'];
    boundaryLevel?: string;
    subTerritories?: [ITerritory['_id']];
    DateCreated?: Date;
    DateUpdated?: Date;
}

export const TerritorySchema: Schema = new Schema({
    pldCode: { type: String, required: true },  
    name: { type: String, required: true },
    notes: { type: String },
    description: { type: String },
    isO2: { type: String, required: true },
    isO3: { type: String, required: true },
    unCode: { type: String },
    natoCode: { type: String },
    wikidataId: { type: String },
    researcher: { type: String },
    encoder: { type: String },
    editor: { type: String },
    region: {type: Schema.Types.ObjectId, ref: 'Region'},
    boundaryLevel: { type: String },
    subTerritories: [{type: Schema.Types.ObjectId, ref: 'Territory'}],
    DateCreated: { type: Date },
    DateUpdated: { type: Date }
});

export default mongoose.model<ITerritory>('Territory', TerritorySchema);