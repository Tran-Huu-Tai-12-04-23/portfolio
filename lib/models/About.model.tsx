import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface IAbout extends Document {
    name: String;
    age: Number;
    address: String;
    email: String;
    nation: String;
    tag: String;
    description: String;
    aboutImageLink: String;
}

const AboutSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    nation: { type: String, required: true },
    description: { type: String, required: true },
    aboutImageLink: { type: String, required: true },
});

export const AboutStore = (mongoose.models.About || model('About', AboutSchema)) as Model<IAbout>;
