/// <reference path="definitions.d.ts" />

import mongoose, { Schema, Document } from 'mongoose';
import ICategory = require('./category.model');

export interface IDataSetLayer extends Document {
    DSLUID: string;
    Name: string;
    Version: string;
    Type: string;  // Thematic, Transversal or External
    Status: string; 
    Description: string; 
    Categories?: ICategory.ICategory[]
}

export const DataSetLayerSchema: Schema = new Schema({
    DSLUID: { type: String, required: true, unique: true },
    Name: { type: String },
    Version: { type: String },
    Type: { type: String },
    Status: { type: String },
    Description: { type: String },
    Categories: [{ type: ICategory.CategorySchema }]
});

export default mongoose.model<IDataSetLayer>('DataSetLayer', DataSetLayerSchema);