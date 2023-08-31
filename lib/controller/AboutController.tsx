import { AboutModel } from '@/lib/models/About.model';

class AboutController {
    constructor() {}

    async get() {
        try {
            const data = await AboutModel.findOne();
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    async createNew(data: any) {
        try {
            const newDoc = new AboutModel(data);
            return newDoc.save();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async checkExists() {
        try {
            const about = await AboutModel.find();
            return about.length > 0;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async update(data: any) {
        try {
            const result = await AboutModel.updateOne({}, data, { new: true });
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
export default new AboutController();
