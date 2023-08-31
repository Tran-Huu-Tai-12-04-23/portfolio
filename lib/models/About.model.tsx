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

// Named export instead of default export
export const AboutModel = (mongoose.models.About || model<IAbout>('About', AboutSchema)) as Model<IAbout>;
