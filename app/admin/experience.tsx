import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ButtonUploadFile from '@/app/components/uploadImage';
import WaitLoadApi from '@/app/components/waitLoadApi';
import toast from 'react-hot-toast';
import Preview from './preview';
import Experience from '../experience/page';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import ExperienceCard from './experienceCard';
import { experiencesData } from '@/lib/data/data';
import Service from '@/service';

function ExperienceSetting() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [waitSave, setWaitSave] = useState<boolean>(false);
    const [preview, setPreview] = useState<boolean>(false);
    const [listExperiences, setListExperiences] = useState<Array<object>>([]);

    useEffect(() => {
        const getProjects = async () => {
            setWaitSave(true);
            const result = await Service.getDataFromApi('/api/experience');
            const data = result.data;
            setWaitSave(false);
            if (data.data) {
                setListExperiences(JSON.parse(data.data));
            }
        };

        getProjects();
    }, []);

    const checkDataEmpty = () => {
        if (!title) {
            return 'Please enter title!';
        } else if (!location) {
            return 'Please enter location!"';
        } else if (!time) {
            return 'Please enter time!';
        } else if (!description) {
            return 'Please enter description!';
        }

        return true;
    };

    const clear = () => {
        setTitle('');
        setDescription('');
        setLocation('');
        setTime('');
    };
    const handleCallApi = async () => {
        const data = {
            title,
            description,
            location,
            time,
        };

        try {
            const result = await Service.callApi('/api/experience', data);
            const res = result.data;
            if (res.status === 200) {
                clear();
                if (res.data) {
                    setListExperiences((prev: any) => {
                        return [...prev, JSON.parse(res.data)];
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
    const handleAddExperience = async () => {
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
        <motion.div
            className="p-10 flex-shrink-0 "
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
        >
            <div className="p-4 bg-gray-100 rounded-md shadow-lg w-full  relative">
                <h1 className="text-2xl font-bold font-mono">Edit data project setting for portfolio</h1>
                <div className="relative z-0 w-full mb-6 group mt-5">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        name="title_id"
                        id="title_id"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="title_id"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter title
                    </label>
                </div>
                <div className="grid-cols-2 grid gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            type="text"
                            name="location_id"
                            id="location_id"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="location_id"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Enter location
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            onChange={(e) => setTime(e.target.value)}
                            value={time}
                            type="text"
                            name="time_id"
                            id="time_id"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="time_id"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Enter time
                        </label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group  rounded-tl-xl rounded-tr-xl">
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={10}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  border-[1px] border-gray-300 focus:ring-primary focus:border-primary "
                        placeholder="Description ..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    onClick={handleAddExperience}
                    className=" text-white bg-primary hover:brightness-105 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                    Add
                </button>
                {waitSave && <WaitLoadApi />}

                <div className="flex flex-wrap mt-10 border-dashed border-primary border-2 p-4 justify-start items-center gap-6">
                    {listExperiences &&
                        listExperiences.map((exp, index) => {
                            return (
                                <ExperienceCard
                                    data={exp}
                                    key={index}
                                    setListExperiences={setListExperiences}
                                ></ExperienceCard>
                            );
                        })}
                </div>
                <Preview preview={preview} setPreview={setPreview}>
                    <Experience></Experience>
                </Preview>
                <HiOutlineComputerDesktop
                    onClick={() => setPreview(true)}
                    className="hover:text-primary group text-3xl absolute top-8 right-8 cursor-pointer transition-all hover:scale-105"
                />
            </div>
            {waitSave && <WaitLoadApi />}
        </motion.div>
    );
}

export default ExperienceSetting;
