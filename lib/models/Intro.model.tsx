import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface IIntro extends Document {
    name: String;
    avatar: String;
    description: String;
    facebookLink: String;
    youtubeLink: String;
    instagramLink: String;
    githubLink: String;
    tiktokLink: String;
    linkedLink: String;
    cv: String;
}

const IntroSchema: Schema = new Schema({
    name: { type: String },
    avatar: { type: String },
    description: { type: String },
    facebookLink: { type: String },
    youtubeLink: { type: String },
    instagramLink: { type: String },
    githubLink: { type: String },
    tiktokLink: { type: String },
    linkedLink: { type: String },
    cv: { type: String },
});

export const IntroStore = (mongoose.models.Intro || model('Intro', IntroSchema)) as Model<IIntro>;
