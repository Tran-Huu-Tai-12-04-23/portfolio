import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface IProjectDetail extends Document {
    projectId: String;
    aboutProjects: Array<String>;
    listImage: Array<String>;
    linkWebsite: string;
}

const ProjectDetailSchema: Schema = new Schema({
    aboutProjects: [{ type: String }],
    listImage: [{ type: String }],
    linkWebsite: { type: String },
    projectId: { type: String, required: true },
});

export const ProjectDetailStore = (mongoose.models.ProjectDetail ||
    model('ProjectDetail', ProjectDetailSchema)) as Model<IProjectDetail>;
