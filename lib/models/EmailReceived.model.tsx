import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface IEmailReceived extends Document {
    from: String;
    message: String;
    isReply: boolean;
    sendDate: Date;
}

const EmailReceivedSchema: Schema = new Schema({
    from: { type: String, require: true },
    message: { type: String, require: true },
    isReply: { type: String, require: true, default: false },
    sendDate: { type: Date, require: true, default: Date.now() },
});

export const EmailReceivedStore = (mongoose.models.EmailReceived ||
    model('EmailReceived', EmailReceivedSchema)) as Model<IEmailReceived>;
