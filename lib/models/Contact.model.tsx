import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface IContact extends Document {
    email: String;
    address: String;
    phoneNumber: String;
    country: String;
}

const ContactSchema: Schema = new Schema({
    email: { type: String, require: true },
    address: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    country: { type: String, require: true },
});

export const ContactStore = (mongoose.models.Contact || model('Contact', ContactSchema)) as Model<IContact>;
