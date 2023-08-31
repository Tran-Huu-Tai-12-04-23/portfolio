import ButtonUploadFile from '@/app/components/uploadImage';
import { useState } from 'react';
import Image from 'next/image';
import { GrAdd } from 'react-icons/gr';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import Button from '@/app/components/button';
import toast from 'react-hot-toast';
import Service from '@/service';

interface Props {
    setProjects: React.Dispatch<any>;
    projects: Array<object>;
    setAddProject: React.Dispatch<any>;
}
function FormAddProject({ setProjects, projects, setAddProject }: Props) {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [linkSource, setLinkSource] = useState<string>('');
    const [linkVideoDemo, setLinkVideoDemo] = useState<string>('');
    const [projectImage, setProjectImage] = useState<Array<any>>([{}]);
    const [frameWork, setFrameWork] = useState<string>('');
    const [listFrameWork, setListFrameWork] = useState<Array<string>>([]);
    const [addFrameWork, setAddFrameWork] = useState<boolean>(false);

    const handleRemoveFrameWork = (indexR: number) => {
        setListFrameWork((prev) => {
            return prev.filter((dev, index) => index !== indexR);
        });
    };

    const checkDataEmpty = () => {
        if (!name) {
            return 'Please enter your name!';
        } else if (!description) {
            return 'Please enter description!';
        } else if (!linkSource) {
            return 'Please enter link source!';
        } else if (!projectImage) {
            return 'Please enter project image !';
        }

        return true;
    };

    const clear = () => {
        setName('');
        setDescription('');
        setLinkSource('');
        setListFrameWork([]);
        setLinkVideoDemo('');
        setProjectImage([{}]);
    };

    const handleCallApi = async () => {
        const data = {
            name,
            description,
            linkSource,
            linkVideoDemo,
            listFrameWork,
            projectImageLink: projectImage[0]?.fileUrl,
        };

        try {
            const result = await Service.callApi('/api/project', data);
            const res = result.data;
            if (res.status === 200) {
                clear();
                if (res.project) {
                    setProjects((prev: any) => {
                        return [...prev, JSON.parse(res.project)];
                    });
                }
                return Promise.resolve(true);
            } else {
                return Promise.reject(false);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const handleAddProject = async () => {
        const checkEmpty = checkDataEmpty();
        if (checkEmpty !== true) {
            toast(checkEmpty, {
                icon: '⚠️',
            });
            return;
        }

        toast.promise(handleCallApi(), {
            loading: 'Saving...',
            success: <b>Add project successfully!</b>,
            error: <b>Could not add.</b>,
        });
    };

    return (
        <div className="p-4 bg-gray-100 rounded-md shadow-lg w-full">
            <h1 className="text-2xl font-bold font-mono">Edit data project for portfolio</h1>
            <div className="relative z-0 w-full mb-6 group mt-5">
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    name="name_id"
                    id="name_id"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                />
                <label
                    htmlFor="name_id"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Enter name
                </label>
            </div>
            <div className="grid-cols-2 grid gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        onChange={(e) => setLinkSource(e.target.value)}
                        value={linkSource}
                        type="text"
                        name="name_id"
                        id="name_id"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="name_id"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter link source
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        onChange={(e) => setLinkVideoDemo(e.target.value)}
                        value={linkVideoDemo}
                        type="text"
                        name="age_id"
                        id="age_id"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="age_id"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter link video demo
                    </label>
                </div>
            </div>
            <div className="mb-10">
                <h1 className="text-sm mb-2 font-bold ">Add frameWork</h1>
                {listFrameWork.length > 0 && (
                    <ul className="flex justify-start gap-10">
                        {listFrameWork.map((frameWork, index) => {
                            return (
                                <li
                                    className="bg-black/[0.7] w-fit  flex  items-center justify-between hover:bg-primary px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                    key={index}
                                >
                                    <span> #{frameWork}</span>
                                    <IoIosClose
                                        onClick={() => handleRemoveFrameWork(index)}
                                        className="hover:scale-105 text-white mr-4 text-2xl transition-all hover:text-red-500 cursor-pointer"
                                    ></IoIosClose>
                                </li>
                            );
                        })}
                    </ul>
                )}
                {!addFrameWork && (
                    <div className="flex w-fit" onClick={() => setAddFrameWork(!addFrameWork)}>
                        <GrAdd className="text-2xl hover:bg-[rgb(168,85,247,0.2)] rounded-lg hover:rotate-180 transition-all cursor-pointer duration-1000 hover:text-primary"></GrAdd>
                    </div>
                )}

                {addFrameWork && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        <input
                            onChange={(e) => setFrameWork(e.target.value)}
                            value={frameWork}
                            type="text"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder="Enter name frameWork..."
                        />
                        <div className="flex justify-start mt-3 gap-5 items-center">
                            <Button
                                name={'Cancel'}
                                onClick={() => {
                                    setAddFrameWork(!addFrameWork);
                                }}
                                type={'cancel'}
                            ></Button>
                            <Button
                                name={'Add'}
                                onClick={() => {
                                    if (frameWork) {
                                        setListFrameWork((prev: any) => {
                                            return [...prev, frameWork];
                                        });
                                        setFrameWork('');
                                    }
                                }}
                                type={'opacity'}
                            ></Button>
                        </div>
                    </motion.div>
                )}
            </div>
            <div className="relative z-0 w-full mb-6 group  rounded-tl-xl rounded-tr-xl">
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={10}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  border-[1px] focus:border-primary  "
                    placeholder="Description ..."
                ></textarea>
            </div>
            <div className="mt-4">
                <h1 className="text-sm font-bold mb-2">Add project image</h1>
                <ButtonUploadFile
                    file={projectImage}
                    setFile={setProjectImage}
                    route="imageUploader"
                    actionComplete={() => {}}
                ></ButtonUploadFile>
                <div className="w-full mt-10 flex-col items-center flex justify-center">
                    {projectImage[0].fileUrl && (
                        <Image
                            src={projectImage[0]?.fileUrl}
                            alt={''}
                            className="rounded-md"
                            width={100}
                            height={100}
                        ></Image>
                    )}
                </div>
            </div>
            <div className="flex justify-end gap-5 mt-5 mb-10 border-b-2 pb-4 border-dashed border-primary">
                <Button name={'Add'} onClick={handleAddProject} type={'opacity'}></Button>
                <Button type={'cancel'} name={'Cancel add project'} onClick={() => setAddProject(false)}></Button>
            </div>
        </div>
    );
}

export default FormAddProject;
