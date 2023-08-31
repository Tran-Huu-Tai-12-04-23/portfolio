import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface IProject extends Document {
    name: String;
    description: String;
    linkSource: String;
    linkVideoDemo: String;
    projectImageLink: String;
    listFrameWork: Array<String>;
}

const ProjectSchema: Schema = new Schema({
    name: { type: String, require: true },
    description: { type: String },
    linkSource: { type: String },
    linkVideoDemo: { type: String },
    projectImageLink: { type: String },
    listFrameWork: [{ type: String }],
});

export const ProjectStore = (mongoose.models.Project || model('Project', ProjectSchema)) as Model<IProject>;
