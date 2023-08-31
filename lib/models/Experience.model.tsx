import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface IExperience extends Document {
    title: String;
    location: String;
    time: String;
    description: String;
}

const ExperienceSchema: Schema = new Schema({
    title: { type: String, require: true },
    location: { type: String, require: true },
    time: { type: String, require: true },
    description: { type: String, require: true },
});

export const ExperienceStore = (mongoose.models.Experience ||
    model('Experience', ExperienceSchema)) as Model<IExperience>;
