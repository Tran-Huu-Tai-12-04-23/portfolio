import { SkillStore } from '@/lib/models/Skill.model';

class SkillController {
    constructor() {}

    async get() {
        try {
            return await SkillStore.findOne();
        } catch (error) {
            return null;
        }
    }
    async createNew(data: any, type: string) {
        try {
            let result;
            switch (type) {
                case 'backend': {
                    result = await this.addBackendSkill(data);
                    break;
                }
                case 'front-end': {
                    result = await this.addFrontEndSkill(data);
                    break;
                }
                case 'other': {
                    result = await this.addOtherSkill(data);
                    break;
                }
            }
            return result;
        } catch (error) {
            return null;
        }
    }

    async addBackendSkill(data: any) {
        try {
            const dataSkill = await SkillStore.findOne();
            if (dataSkill) {
                const dataBackend = [data, ...dataSkill.backend];
                const result = await SkillStore.findOneAndUpdate(
                    {},
                    {
                        backend: dataBackend,
                    },
                    { exit: true },
                );
                return result;
            } else {
                const result = new SkillStore({
                    backend: [data],
                    frontEnd: [],
                    other: [],
                });
                return result.save();
            }
        } catch (error) {
            return null;
        }
    }

    async addFrontEndSkill(data: any) {
        try {
            const dataSkill = await SkillStore.findOne();
            if (dataSkill) {
                const dataFrontend = [data, ...dataSkill.frontEnd];
                const result = await SkillStore.findOneAndUpdate(
                    {},
                    {
                        frontEnd: dataFrontend,
                    },
                    { exit: true },
                );
                return result;
            }
            const result = new SkillStore({
                backend: [],
                frontEnd: [data],
                other: [],
            });
            return result.save();
        } catch (error) {
            return null;
        }
    }

    async addOtherSkill(data: any) {
        try {
            const dataSkill = await SkillStore.findOne();
            if (dataSkill) {
                const dataOther = [data, ...dataSkill.other];
                const result = await SkillStore.findOneAndUpdate(
                    {},
                    {
                        other: dataOther,
                    },
                    { exit: true },
                );
                return result;
            }
            const result = new SkillStore({
                backend: [],
                frontEnd: [],
                other: [data],
            });
            return result.save();
        } catch (error) {
            return null;
        }
    }

    async checkExists(id: string) {
        try {
            const about = await SkillStore.find({ _id: id });
            return about.length > 0;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async update(data: any, id: string) {
        try {
            const result = await SkillStore.updateOne(
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
            const result = await SkillStore.find();
            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async remove(type: string, indexData: number) {
        try {
            const data = await SkillStore.findOne();

            if (data) {
                switch (type) {
                    case 'backend': {
                        const newDataBackend = data.backend.filter((be, index) => index !== indexData);
                        const result = await SkillStore.findOneAndUpdate(
                            {},
                            {
                                backend: newDataBackend,
                            },
                            { exit: true },
                        );
                        return result;
                    }
                    case 'front-end': {
                        const newDataFrontEnd = data.frontEnd.filter((be, index) => index !== indexData);
                        const result = await SkillStore.findOneAndUpdate(
                            {},
                            {
                                backend: newDataFrontEnd,
                            },
                            { exit: true },
                        );
                        return result;
                    }
                    case 'other': {
                        const newDataOther = data.frontEnd.filter((be, index) => index !== indexData);
                        const result = await SkillStore.findOneAndUpdate(
                            {},
                            {
                                backend: newDataOther,
                            },
                            { exit: true },
                        );
                        return result;
                    }
                }
            }
            return false;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
export default new SkillController();
