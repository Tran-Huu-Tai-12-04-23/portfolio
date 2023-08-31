import { ExperienceStore } from '@/lib/models/Experience.model';

class ExperienceController {
    constructor() {}

    async createNew(data: any) {
        try {
            const newDoc = new ExperienceStore(data);
            return newDoc.save();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async checkExists(id: string) {
        try {
            const about = await ExperienceStore.find({ _id: id });
            return about.length > 0;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async update(data: any, id: string) {
        try {
            const result = await ExperienceStore.updateOne(
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

    async getAll() {
        try {
            const result = await ExperienceStore.find();
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async remove(id: string) {
        try {
            const result = await ExperienceStore.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
export default new ExperienceController();
