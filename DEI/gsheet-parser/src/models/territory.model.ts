/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';
import IRegion = require('./region.model');

export interface ITerritory extends Document {
    PLD_Code: string;
    Name: string;
    Notes?: string;
    Description?: string;
    ISO2: string;
    ISO3: string;
    UN_Code?: string;
    NATO_Code?: string;
    Wikidata_ID?: string;
    Researcher?: string;
    Encoder?: string;
    Editor?: string;
    Region?: IRegion.IRegion['_id'];
    BoundaryLevel?: string;
    SubTerritories?: [ITerritory['_id']];
    DateCreated?: Date;
    DateUpdated?: Date;
}

export const TerritorySchema: Schema = new Schema({
    PLD_Code: { type: String, required: true },  
    Name: { type: String, required: true },
    Notes: { type: String },
    Description: { type: String },
    ISO2: { type: String, required: true },
    ISO3: { type: String, required: true },
    UN_Code: { type: String },
    NATO_Code: { type: String },
    Wikidata_ID: { type: String },
    Researcher: { type: String },
    Encoder: { type: String },
    Editor: { type: String },
    Region: {type: Schema.Types.ObjectId, ref: 'Region'},
    BoundaryLevel: { type: String },
    SubTerritories: [{type: Schema.Types.ObjectId, ref: 'Territory'}],
    DateCreated: { type: Date },
    DateUpdated: { type: Date }
});

export default mongoose.model<ITerritory>('Territory', TerritorySchema);