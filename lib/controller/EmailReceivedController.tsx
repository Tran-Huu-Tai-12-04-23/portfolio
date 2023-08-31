import { EmailReceivedStore } from '@/lib/models/EmailReceived.model';

class SkillController {
    constructor() {}

    async getAll() {
        try {
            return await EmailReceivedStore.find();
        } catch (error) {
            return null;
        }
    }
    async createNew(data: any) {
        try {
            let newEmail = new EmailReceivedStore(data);
            return newEmail.save();
        } catch (error) {
            return null;
        }
    }

    async checkExists(id: string) {
        try {
            const about = await EmailReceivedStore.find({ _id: id });
            return about.length > 0;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async update(data: any, id: string) {
        try {
            const result = await EmailReceivedStore.updateOne(
                {
                    _id: id,
                },
                data,
                { new: true },
            );
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
export default new SkillController();
