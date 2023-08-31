import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ButtonUploadFile from '@/app/components/uploadImage';
import WaitLoadApi from '@/app/components/waitLoadApi';
import Button from '@/app/components/button';
import toast from 'react-hot-toast';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { GrAdd, GrFormClose } from 'react-icons/gr';
import Preview from './preview';
import About from '../about/page';
import Service from '@/service';

function AboutSetting() {
    const [tag, setTag] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [nation, setNation] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [description, setDescription] = useState<string>('');
    const [aboutImg, setAboutImg] = useState<Array<any>>([{}]);

    const [waitSave, setWaitSave] = useState<boolean>(false);
    const [preview, setPreview] = useState<boolean>(false);
    const [dataAbout, setDataAbout] = useState<any>(null);

    const checkDataEmpty = () => {
        if (!name) {
            return 'Please enter your name!';
        } else if (!description) {
            return 'Please enter a description!';
        } else if (!aboutImg) {
            return 'Please select a about image!';
        } else if (!age) {
            return 'Please select a age!';
        } else if (!tag) {
            return 'Please select a tag!';
        } else if (!email) {
            return 'Please select a age!';
        } else if (!nation) {
            return 'Please select a nation!';
        }
        return true;
    };
    const handleCallApi = async () => {
        const data = {
            name,
            age,
            address,
            nation,
            description,
            tag,
            email,
            aboutImageLink: aboutImg[0].fileUrl,
        };

        try {
            const result = await Service.callApi('/api/about', data);
            const res = result.data;

            if (res.status === 200) {
                return Promise.resolve(true);
            } else {
                return Promise.reject(false);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const handleSave = async () => {
        const checkEmpty = checkDataEmpty();
        if (checkEmpty !== true) {
            toast(checkEmpty, {
                icon: '⚠️',
            });
        }

        toast.promise(handleCallApi(), {
            loading: 'Saving...',
            success: <b>Init about successfully!</b>,
            error: <b>Could not save.</b>,
        });
    };

    useEffect(() => {
        const getDataAbout = async () => {
            setWaitSave(true);
            const result = await Service.getDataFromApi('/api/about');
            setWaitSave(false);
            const data = result.data;
            if (data.status === 200) {
                setDataAbout(JSON.parse(data.data));
            }
        };

        getDataAbout();
    }, []);

    useEffect(() => {
        if (dataAbout) {
            setName(dataAbout.name);
            setAge(dataAbout.age);
            setDescription(dataAbout.description);
            setNation(dataAbout.nation);
            setTag(dataAbout.tag);
            setAddress(dataAbout.address);
            setEmail(dataAbout.email);
        }
    }, [dataAbout]);

    return (
        <motion.div
            className=" relative p-10 flex-shrink-0 "
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
        >
            <HiOutlineComputerDesktop
                onClick={() => setPreview(true)}
                className="hover:text-primary group text-3xl absolute top-16 right-16 cursor-pointer transition-all hover:scale-105"
            />
            <div className=" p-4 bg-gray-100 rounded-md shadow-lg w-full">
                <h1 className="text-2xl font-bold font-mono">Edit data about setting for portfolio</h1>

                <div className="mt-10 mb-10 w-full">
                    <div className="grid-cols-2 grid gap-6">
                        <div className="relative z-0 w-full mb-6 group">
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
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                onChange={(e) => setAge(parseInt(e.target.value))}
                                value={age}
                                type="number"
                                name="age_id"
                                id="age_id"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="age_id"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Enter age
                            </label>
                        </div>
                    </div>
                    <div className="grid-cols-2 grid gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                type="text"
                                name="address_id"
                                id="address_id"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="address_id"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Enter address
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="text"
                                name="email_id"
                                id="email_id"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email_id"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Enter email
                            </label>
                        </div>
                    </div>
                    <div className="grid-cols-2 grid gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                onChange={(e) => setNation(e.target.value)}
                                value={nation}
                                type="text"
                                name="nation_id"
                                id="nation_id"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="nation_id"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Enter nation
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                onChange={(e) => setTag(e.target.value)}
                                value={tag}
                                type="text"
                                name="tag_id"
                                id="tag_id"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="tag_id"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Enter tag
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

                    <div className="mt-4">
                        <h1 className="text-sm font-bold mb-2">Add about img</h1>
                        <ButtonUploadFile
                            file={aboutImg}
                            setFile={setAboutImg}
                            route="imageUploader"
                            actionComplete={() => {}}
                        ></ButtonUploadFile>
                        <div className="w-full mt-10 flex-col items-center flex justify-center">
                            {aboutImg[0].fileUrl && (
                                <Image
                                    src={aboutImg[0]?.fileUrl}
                                    alt={''}
                                    className="rounded-md"
                                    width={100}
                                    height={100}
                                ></Image>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        onClick={handleSave}
                        className=" text-white bg-primary hover:brightness-105 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                        Save
                    </button>
                </div>
                {waitSave && <WaitLoadApi />}

                <Preview preview={preview} setPreview={setPreview}>
                    <About
                        data={{
                            name,
                            age,
                            email,
                            description,
                            nation,
                            address,
                            aboutImageLink: aboutImg[0]?.fileUrl,
                        }}
                        type="preview"
                    ></About>
                </Preview>
            </div>
        </motion.div>
    );
}

export default AboutSetting;
