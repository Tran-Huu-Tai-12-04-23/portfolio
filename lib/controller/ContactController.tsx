import { ContactStore } from '@/lib/models/Contact.model';

class ContactController {
    constructor() {}

    async createNew(data: any) {
        try {
            const newDoc = new ContactStore(data);
            return newDoc.save();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async checkExists() {
        try {
            const about = await ContactStore.find();
            return about.length > 0;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async update(data: any) {
        try {
            const result = await ContactStore.updateOne({}, data, { new: true });
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async get() {
        try {
            const result = await ContactStore.findOne();
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
export default new ContactController();
