import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ButtonUploadFile from '@/components/uploadImage';
import WaitLoadApi from '@/components/waitLoadApi';
import toast from 'react-hot-toast';
import Preview from './preview';
import Experience from '../experience/page';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';

function ExperienceSetting() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [date, setDate] = useState<any>(null);
    const [waitSave, setWaitSave] = useState<boolean>(false);
    const [preview, setPreview] = useState<boolean>(false);

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
                            Enter name
                        </label>
                    </div>

                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg
                                className="w-4 h-4 mb-5 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input
                            type="date"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5"
                            placeholder="Select date"
                        />
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
                    onClick={() => {}}
                    className=" text-white bg-primary hover:brightness-105 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                    Add
                </button>
                {waitSave && <WaitLoadApi />}

                <Preview preview={preview} setPreview={setPreview}>
                    <Experience></Experience>
                </Preview>
                <HiOutlineComputerDesktop
                    onClick={() => setPreview(true)}
                    className="hover:text-primary group text-3xl absolute top-8 right-8 cursor-pointer transition-all hover:scale-105"
                />
            </div>
        </motion.div>
    );
}

export default ExperienceSetting;
