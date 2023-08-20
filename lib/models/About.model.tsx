import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface IAbout extends Document {
    imageUrl: String;
    name: String;
    age: Number;
    address: String;
    nation: String;
    email: String;
    description: String;
}

const AboutSchema: Schema = new Schema({
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    nation: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
});

export const About = (mongoose.models.About || model('About', AboutSchema)) as Model<IAbout>;
