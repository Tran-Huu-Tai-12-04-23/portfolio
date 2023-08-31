import { IntroStore } from '@/lib/models/Intro.model';

class IntroController {
    constructor() {}

    async get() {
        try {
            const data = await IntroStore.findOne();
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    async createNew(data: any) {
        try {
            const newDoc = new IntroStore(data);
            return newDoc.save();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async checkExists() {
        try {
            const about = await IntroStore.find();
            return about.length > 0;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async update(data: any) {
        try {
            const result = await IntroStore.updateOne({}, data, { new: true });
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
export default new IntroController();
