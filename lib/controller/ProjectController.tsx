import { ProjectStore } from '@/lib/models/Project.model';

class IntroController {
    constructor() {}

    async createNew(data: any) {
        try {
            const newDoc = new ProjectStore(data);
            return newDoc.save();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async checkExists(id: string) {
        try {
            const about = await ProjectStore.find({ _id: id });
            return about.length > 0;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async update(data: any, id: string) {
        try {
            const result = await ProjectStore.updateOne(
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
            const result = await ProjectStore.find();
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async remove(id: string) {
        try {
            const result = await ProjectStore.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
export default new IntroController();
