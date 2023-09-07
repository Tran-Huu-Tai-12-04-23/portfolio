import { ProjectStore } from '@/lib/models/Project.model';
import { ProjectDetailStore } from '@/lib/models/ProjectDetail.model';

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

    async getAllDetailProject(projectId: string) {
        try {
            const project = await ProjectStore.findById(projectId);
            const projectDetail = await ProjectDetailStore.findOne({ projectId: projectId });
            if (project) {
                const { name, description, linkSource, linkVideoDemo, listFrameWork } = project;
                if (projectDetail) {
                    const { listImage, aboutProjects, linkWebsite } = projectDetail;
                    return {
                        name,
                        description,
                        linkSource,
                        linkVideoDemo,
                        listFrameWork,
                        listImage,
                        aboutProjects,
                        linkWebsite,
                    };
                }
                return project;
            }
            return false;
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

    async updateDetailProject(data: any, projectId: string) {
        try {
            const {
                name,
                description,
                linkWebsite,
                linkSource,
                linkVideoDemo,
                listFrameWork,
                listImage,
                aboutProjects,
            } = data;

            // Check if the project detail exists
            const existingProjectDetail = await ProjectDetailStore.findOne({ projectId: projectId });
            console.log('------------------------------');
            console.log(linkWebsite);
            console.log('------------------------------');
            // Update the main project information
            const updatedProject = await ProjectStore.findByIdAndUpdate(
                projectId,
                {
                    name,
                    description,
                    linkSource,
                    linkVideoDemo,
                    listFrameWork,
                },
                { new: true },
            );

            if (existingProjectDetail) {
                // If the project detail exists, update it
                const updatedProjectDetail = await ProjectDetailStore.findOneAndUpdate(
                    { projectId: projectId },
                    { listImage, aboutProjects, linkWebsite },
                    { new: true },
                );

                return [updatedProject, updatedProjectDetail];
            } else {
                // If the project detail doesn't exist, create a new one
                const newProjectDetail = new ProjectDetailStore({
                    projectId: projectId,
                    listImage,
                    aboutProjects,
                });

                const createdProjectDetail = await newProjectDetail.save();

                return [updatedProject, createdProjectDetail];
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
export default new IntroController();
