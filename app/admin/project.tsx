import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ButtonUploadFile from '@/components/uploadImage';
import WaitLoadApi from '@/components/waitLoadApi';
import toast from 'react-hot-toast';
import CardProject from './cardProject';
import Button from '@/components/button';
import FormAddProject from './formAddProject';
import { projectsData } from '@/lib/data/data';
import Preview from './preview';
import Projects from '../projects/page';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';

function ProjectsSetting() {
    const [addProject, setAddProject] = useState<boolean>(false);
    const [preview, setPreview] = useState<boolean>(false);
    const [waitSave, setWaitSave] = useState<boolean>(false);

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
                    <FormAddProject></FormAddProject>
                    <div className="flex justify-end mt-5 mb-10">
                        <Button
                            type={'cancel'}
                            name={'Cancel add project'}
                            onClick={() => setAddProject(false)}
                        ></Button>
                    </div>
                </motion.div>
            )}

            <div className="p-4 bg-gray-100 rounded-md shadow-lg w-full grid xl:grid-cols-4 gap-5 relative">
                <HiOutlineComputerDesktop
                    onClick={() => setPreview(true)}
                    className="hover:text-primary group text-3xl absolute top-8 right-8 cursor-pointer transition-all hover:scale-105"
                />
                {projectsData.map((project, index) => {
                    return <CardProject data={project} key={index} />;
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
