import { AboutStore } from '@/lib/models/About.model';

class AboutController {
    constructor() {}

    async get() {
        try {
            const data = await AboutStore.findOne();
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    async createNew(data: any) {
        try {
            const newDoc = new AboutStore(data);
            return newDoc.save();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async checkExists() {
        try {
            const about = await AboutStore.find();
            return about.length > 0;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async update(data: any) {
        try {
            const result = await AboutStore.updateOne({}, data, { new: true });
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
export default new AboutController();
