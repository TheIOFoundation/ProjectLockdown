/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';
import IDefinition = require('./definition.model');
import IUI = require('./ui.model');
import IDataPoint = require('./datapoint.model');

export interface ICategory extends Document {
    CategoryUID: string;
    DataPoints: IDataPoint.IDataPoint[];
    Definition: IDefinition.IDefinition;
    CategoryStatus: string;
    UI: IUI.IUI;
    DSLUID: string;
}

export const CategorySchema: Schema = new Schema({
    CategoryUID: { type: String, required: true, unique: true },
    DataPoints: [{ type: IDataPoint.DataPointSchema }],
    Definition: { type: IDefinition.DefinitionSchema },
    CategoryStatus: { type: String },
    UI: {
        Description: { type: String },
        Name: { type: String },
        Tooltip: { type: String },
        TabMaxWidth: { type: String },
        TabTitle: { type: String },
        TabTooltip: { type: String },
    },
    DSLUID: { type: String }
});

export default mongoose.model<ICategory>('Category', CategorySchema);