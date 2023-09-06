'use client';

import React, { useEffect, useState } from 'react';
import SectionHeading from '@/app/components/section-heading';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Service from '@/service';
import WaitLoadApi from '../components/waitLoadApi';

export default function About() {
    const [aboutData, setAboutData] = useState<any>(null);
    const [waitApi, setWaitApi] = useState<boolean>(false);

    console.log(aboutData);

    useEffect(() => {
        const getAboutData = async () => {
            setWaitApi(true);
            const result = await Service.getDataFromApi('/api/about');
            setWaitApi(false);

            const data = result.data;

            if (data.status === 200) {
                setAboutData(JSON.parse(data.data));
            }
        };
        getAboutData();
    }, []);

    return (
        <motion.section
            className=" xl:w-2/3 w-full xl:p-10 lg:p-10 rounded-lg text-center leading-8 mb-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.175 }}
        >
            {waitApi && <WaitLoadApi></WaitLoadApi>}
            <div className="flex xl:flex-row gap-5 lg:flex-row flex-col justify-start flex-shrink-0 p-4 w-full">
                <div className="xl:w-2/3 lg:w-2/3 w-full p-4 relative xl:order-2 lg:order-2 order-1">
                    <div className="xl:rotate-90 lg:rotate-90 rotate-0 transition-all flex justify-between items-center xl:absolute lg:absolute w-max relative xl:top-1/2 lg:top-1/2 xl:-left-[10rem] lg:-left-[10rem] m-auto xl:-translate-y-1/2 lg:-translate-y-1/2">
                        <div className="h-[2px] xl:w-24 lg:w-24 mb-8 mr-4 bg-[#413d7a]"></div>
                        <SectionHeading>About me</SectionHeading>
                        <div className="h-[2px] xl:w-24 lg:w-24 mb-8 ml-4 bg-[#413d7a]"></div>
                    </div>
                    <div className="w-fit xl:ml-24 lg:ml-24">
                        <motion.div
                            className="flex justify-start "
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <SectionHeading>My name is</SectionHeading>
                            <h1 className="xl:text-3xl lg:text-3xl text-xl ml-2 font-semibold italic text-purple-800">
                                {aboutData?.name}
                            </h1>
                        </motion.div>

                        <motion.div
                            className=" flex justify-between xl:flex-row lg:flex-row flex-col"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <ul className="max-w-[13rem] ">
                                <div className="mt-2 flex justify-start items-center">
                                    <div className="rounded-full h-[10px] w-[10px] mr-2 bg-purple-950"></div>
                                    <li className="text-md font-bold flex justify-start mr-2">
                                        <span className="mr-2 text-[#757575]">Age</span>:{' '}
                                        <span className="ml-2">{aboutData?.age}</span>
                                    </li>
                                </div>
                                <div className="mt-2 flex justify-start items-center">
                                    <div className="rounded-full h-[10px] w-[10px] mr-2 bg-purple-950"></div>
                                    <li className="text-md font-bold flex justify-start mr-2">
                                        <span className="mr-2 text-[#757575]">Nationality</span>:
                                        <span className="ml-2">{aboutData?.nation}</span>
                                    </li>
                                </div>
                            </ul>
                            <ul>
                                <div className="mt-2 flex justify-start items-center">
                                    <div className="rounded-full h-[10px] w-[10px] mr-2 bg-purple-950"></div>
                                    <li className="text-md font-bold flex justify-start mr-2">
                                        <span className="mr-2 text-[#757575]">Address</span> :{' '}
                                        <span className="ml-2">{aboutData?.address}</span>
                                    </li>
                                </div>
                                <div className="mt-2 flex justify-start items-center">
                                    <div className="rounded-full h-[10px] w-[10px] mr-2 bg-purple-950"></div>
                                    <li className="text-md font-bold flex justify-start mr-2">
                                        <span className="mr-2 text-[#757575]">Email</span> :{' '}
                                        <span className="ml-2">{aboutData?.email}</span>
                                    </li>
                                </div>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="h-[2px] w-full bg-[#413d7a] mt-4"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        ></motion.div>
                        <motion.p
                            className="text-[#757575] xl:w-[95%] lg:w-[95%] w-full  text-sm mt-4 text-left"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {aboutData?.description}
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    className=" relative xl:w-1/3 lg:w-1/3 w-full flex justify-center items-center xl:order-1 lg:order-1 order-2"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {aboutData?.aboutImageLink && (
                        <Image
                            src={aboutData?.aboutImageLink}
                            alt={aboutData?.tag || 'Tran Huu Tai'}
                            className="rounded-lg w-[80%] "
                            width={200}
                            height={200}
                        ></Image>
                    )}
                </motion.div>
            </div>
        </motion.section>
    );
}
