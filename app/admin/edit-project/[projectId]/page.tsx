'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/app/components/section-heading';
import Button from '@/app/components/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams, useRouter } from 'next/navigation';
import ButtonUploadFile from '@/app/components/uploadImage';

import { AiOutlineClose } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import toast from 'react-hot-toast';
import Service from '@/service';
import WaitLoadApi from '@/app/components/waitLoadApi';

function EditDetailProject() {
    const params = useParams();
    const router = useRouter();
    const [image, setImage] = useState<any>([{}]);
    const [listImage, setListImage] = useState<Array<string>>([]);
    const [linkVideoSource, setLinkVideoSource] = useState<string>('');
    const [linkSourceGit, setLinkSourceGit] = useState<string>('');
    const [linkWebsite, setLinkWebsite] = useState<string>('');
    const [description, setDescription] = useState<string>(
        ' Sky Go Desktop react javascript web application build on top of the Electron framework.',
    );
    const [name, setName] = useState<string>('');
    const [aboutProjects, setAboutProjects] = useState<Array<string>>([]);
    const [aboutProject, setAboutProject] = useState<string>('');
    const [addAboutProject, setAddAboutProject] = useState<boolean>(false);
    const [frameWorks, setFrameWorks] = useState<Array<string>>([]);
    const [frameWork, setFrameWork] = useState<string>('');
    const [addFrameWork, setAddFrameWork] = useState<boolean>(false);
    const [projectDetail, setProjectDetail] = useState<any>(null);
    const [waitApi, setWaitApi] = useState<boolean>(false);

    const { projectId } = params;

    useEffect(() => {
        const getProjectDetail = async () => {
            setWaitApi(true);
            const result = await Service.getDataFromApi('/api/project/detail-project/', `?projectId=${projectId}`);
            const data = result.data;
            setWaitApi(false);

            if (data.status === 200) {
                setProjectDetail(JSON.parse(data.data));
            }
        };
        getProjectDetail();
    }, []);

    useEffect(() => {
        if (projectDetail) {
            const {
                name,
                description,
                linkSource,
                linkVideoDemo,
                listFrameWork,
                listImage,
                aboutProjects,
                linkWebsite,
            } = projectDetail;
            setName(name || '');
            setDescription(description || '');
            setLinkSourceGit(linkSource || '');
            setLinkVideoSource(linkVideoDemo || '');
            setFrameWorks(listFrameWork || []);
            setListImage(listImage || []);
            setAboutProjects(aboutProjects || []);
            setLinkWebsite(linkWebsite || '');
        }
    }, [projectDetail]);
    useEffect(() => {
        if (!projectId) {
            window.document.referrer;
        }
    }, [projectId]);

    useEffect(() => {
        setListImage((prev) => {
            const check = prev.find((img) => img === image[0].fileUrl);
            if (image[0].fileUrl && !check) {
                return [...prev, image[0]?.fileUrl];
            }
            return prev;
        });
    }, [image]);

    const handleRemove = (link: string) => {
        setListImage((prev) => {
            return prev.filter((image) => image !== link);
        });
    };

    const handleRemoveAbout = (about: string) => {
        setAboutProjects((prev) => {
            return prev.filter((content) => content !== about);
        });
    };

    const handleRemoveFramework = (frameWork: string) => {
        setAboutProjects((prev) => {
            return prev.filter((content) => content !== frameWork);
        });
    };

    const checkDataEmpty = () => {
        if (!name) {
            return 'Please enter name..';
        } else if (!description) {
            return 'Please enter description..';
        }
        return true;
    };
    const handleCallApi = async () => {
        const checkEmpty = checkDataEmpty();
        if (checkEmpty !== true) {
            toast(checkEmpty, {
                icon: '⚠️',
            });
        }
        const data = {
            name,
            description,
            linkSource: linkSourceGit,
            linkVideoDemo: linkVideoSource,
            listFrameWork: frameWorks,
            projectId: projectId,
            listImage: listImage,
            aboutProjects: aboutProjects,
            linkWebsite,
        };
        try {
            const result = await Service.callApi('/api/project/detail-project', data);
            const res = result.data;

            if (res.status === 200) {
                router.push('/admin');
                return Promise.resolve(true);
            } else {
                return Promise.reject(false);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const handleSaveProjectDetail = async () => {
        await toast.promise(handleCallApi(), {
            loading: 'Saving...',
            success: <b>Save project detail successfully!</b>,
            error: <b>Could not save.</b>,
        });
    };
    return (
        <motion.div
            className="mt-10 mb-64 flex justify-center items-center"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.6,
            }}
        >
            {waitApi && <WaitLoadApi />}

            <div className="flex justify-start items-start flex-col gap-5 p-10 max-w-[60rem]">
                <div className="relative  z-0 w-full mb-6 group text-white">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        name="name_id"
                        id="name_id"
                        className="bg-clip-text bg-gradient-to-r text-6xl font-mono text-transparent from-purple-500 via-pink-500 to-red-500 font-bold  block py-2.5 px-0 w-full  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="name_id"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter name
                    </label>
                </div>
                <h5 className="font-mono text-md text-gray-700"></h5>
                <div className="relative  z-0 w-full mb-6 group">
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        type="text"
                        name="description_id"
                        id="description_id"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="description_id"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter description
                    </label>
                </div>
                <SectionHeading>Video demo website</SectionHeading>
                <div className="h-[1px] w-full bg-[#4a2a5b] mb-5"></div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        onChange={(e) => setLinkVideoSource(e.target.value)}
                        value={linkVideoSource}
                        type="text"
                        name="link_source_video"
                        id="link_source_video"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="link_source_video"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter link video demo
                    </label>
                </div>
                <video className="w-full rounded-lg" controls>
                    <source src={linkVideoSource || 'default'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <SectionHeading>Image relative website</SectionHeading>
                <div className="h-[1px] w-full bg-[#4a2a5b] mb-5"></div>
                <div className="mt-4 w-full overflow-hidden">
                    <ButtonUploadFile
                        file={image}
                        setFile={setImage}
                        route="mediaPost"
                        actionComplete={() => {}}
                    ></ButtonUploadFile>
                    <div className="w-full overflow-auto p-10">
                        <div className="w-full mt-10 gap-10 flex items-center ">
                            {listImage.length > 0 &&
                                listImage.map((link, index) => {
                                    return (
                                        <div key={index} className="relative group">
                                            <Image
                                                src={link}
                                                alt={link}
                                                className="rounded-md max-w-[25rem] max-h-[20rem]"
                                                width={100000}
                                                height={1000}
                                            ></Image>
                                            <div className="absolute top-0 bottom-0 right-0 left-0 transition-all bg-[rgba(0,0,0,0.2)] scale-0 group-hover:scale-100 flex justify-center items-center">
                                                <AiOutlineClose
                                                    onClick={() => {
                                                        handleRemove(link);
                                                    }}
                                                    className="text-4xl hover:text-red-600 cursor-pointer transition-all"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>

                <SectionHeading>About this website</SectionHeading>
                <div className="h-[1px] w-full bg-[#4a2a5b] mb-5"></div>
                <ul className="">
                    {aboutProjects.length > 0 &&
                        aboutProjects.map((about, index) => {
                            return (
                                <li key={index} className="capitalize list-disc ml-5 mb-5 text-gray-500 font-mono">
                                    {about}
                                    <span>
                                        <AiOutlineClose
                                            onClick={() => {
                                                handleRemoveAbout(about);
                                            }}
                                            className="text-xl hover:text-red-600 cursor-pointer transition-all"
                                        />
                                    </span>
                                </li>
                            );
                        })}
                </ul>
                {!addAboutProject && (
                    <div className="flex w-full" onClick={() => setAddAboutProject(!addAboutProject)}>
                        <IoMdAdd className="text-2xl hover:bg-[rgb(168,85,247,0.2)] rounded-lg text-white hover:rotate-180 transition-all cursor-pointer duration-1000 hover:text-primary"></IoMdAdd>
                    </div>
                )}

                {addAboutProject && (
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
                        className="w-full"
                    >
                        <input
                            onChange={(e) => setAboutProject(e.target.value)}
                            value={aboutProject}
                            type="text"
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder="Enter about project content"
                        />
                        <div className="flex justify-start mt-3 gap-5 items-center">
                            <Button
                                name={'Cancel'}
                                onClick={() => {
                                    setAddAboutProject(!addAboutProject);
                                }}
                                type={'cancel'}
                            ></Button>
                            <Button
                                name={'Add'}
                                onClick={() => {
                                    if (aboutProject) {
                                        setAboutProjects((prev: any) => {
                                            return [...prev, aboutProject];
                                        });
                                        setAboutProject('');
                                    }
                                }}
                                type={'opacity'}
                            ></Button>
                        </div>
                    </motion.div>
                )}

                <SectionHeading>Technical Sheet</SectionHeading>
                <h5 className="font-mono text-md text-gray-700">
                    Code technologies I got involved with while working on this project.
                </h5>
                <div className="h-[1px] w-full bg-[#4a2a5b] mb-5"></div>
                <ul className="">
                    {frameWorks.length > 0 &&
                        frameWorks.map((frame, index) => {
                            return (
                                <li key={index} className="capitalize list-disc ml-5 mb-5 text-gray-500 font-mono">
                                    {frame}
                                    <span>
                                        <AiOutlineClose
                                            onClick={() => {
                                                handleRemoveFramework(frame);
                                            }}
                                            className="text-xl hover:text-red-600 cursor-pointer transition-all"
                                        />
                                    </span>
                                </li>
                            );
                        })}
                </ul>
                {!addFrameWork && (
                    <div className="flex w-full" onClick={() => setAddFrameWork(!addFrameWork)}>
                        <IoMdAdd className="text-2xl hover:bg-[rgb(168,85,247,0.2)] rounded-lg text-white hover:rotate-180 transition-all cursor-pointer duration-1000 hover:text-primary"></IoMdAdd>
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
                        className="w-full"
                    >
                        <input
                            onChange={(e) => setFrameWork(e.target.value)}
                            value={frameWork}
                            type="text"
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
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
                                        setFrameWorks((prev: any) => {
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

                <SectionHeading>Resources</SectionHeading>
                <div className="h-[1px] w-full bg-[#4a2a5b] mb-5"></div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        onChange={(e) => setLinkSourceGit(e.target.value)}
                        value={linkSourceGit}
                        type="text"
                        name="link_git_hub"
                        id="link_git_hub"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="link_git_hub"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter Link github
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        onChange={(e) => setLinkWebsite(e.target.value)}
                        value={linkWebsite}
                        type="text"
                        name="link_website"
                        id="link_website"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="link_website"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter Link website
                    </label>
                </div>

                <div className="w-full mt-5">
                    <Button name={'Save'} onClick={handleSaveProjectDetail} type={'opacity'}></Button>
                </div>
            </div>
        </motion.div>
    );
}

export default EditDetailProject;
