import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface ISkill extends Document {
    backend: Array<Object>;
    frontEnd: Array<Object>;
    other: Array<Object>;
}

const SkillSchema: Schema = new Schema({
    other: [{ type: Object }],
    frontEnd: [{ type: Object }],
    backend: [{ type: Object }],
});

export const SkillStore = (mongoose.models.Skill || model('Skill', SkillSchema)) as Model<ISkill>;
