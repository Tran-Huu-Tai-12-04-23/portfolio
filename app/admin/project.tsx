import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ButtonUploadFile from '@/app/components/uploadImage';
import WaitLoadApi from '@/app/components/waitLoadApi';
import toast from 'react-hot-toast';
import CardProject from './cardProject';
import Button from '@/app/components/button';
import FormAddProject from './formAddProject';
import { projectsData } from '@/lib/data/data';
import Preview from './preview';
import Projects from '../projects/page';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import Service from '@/service';

function ProjectsSetting() {
    const [addProject, setAddProject] = useState<boolean>(false);
    const [preview, setPreview] = useState<boolean>(false);
    const [waitSave, setWaitSave] = useState<boolean>(false);
    const [projects, setProjects] = useState<Array<object>>([]);

    useEffect(() => {
        const getProjects = async () => {
            setWaitSave(true);
            const result = await Service.getDataFromApi('/api/project');
            const data = result.data;
            setWaitSave(false);
            if (data.projects) {
                setProjects(JSON.parse(data.projects));
            }
        };

        getProjects();
    }, []);
    return (
        <motion.div
            className="p-10 flex-shrink-0 "
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.4,
            }}
        >
            {!addProject && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    className="flex justify-end mb-10"
                >
                    <Button type={'opacity'} name={'Add project'} onClick={() => setAddProject(true)}></Button>
                </motion.div>
            )}
            {addProject && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                >
                    <FormAddProject
                        projects={projects}
                        setAddProject={setAddProject}
                        setProjects={setProjects}
                    ></FormAddProject>
                </motion.div>
            )}

            <div className="p-4 flex justify-start items-center bg-gray-100 rounded-md shadow-lg w-full gap-5 relative">
                <HiOutlineComputerDesktop
                    onClick={() => setPreview(true)}
                    className="hover:text-primary group text-3xl absolute top-8 right-8 cursor-pointer transition-all hover:scale-105"
                />
                {projects &&
                    projects.length > 0 &&
                    projects.map((project, index) => {
                        return <CardProject setProjects={setProjects} data={project} key={index} />;
                    })}
            </div>

            {waitSave && <WaitLoadApi />}

            <Preview preview={preview} setPreview={setPreview}>
                <Projects></Projects>
            </Preview>
        </motion.div>
    );
}

export default ProjectsSetting;
