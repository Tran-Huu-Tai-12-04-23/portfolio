'use client';

import React from 'react';
import SectionHeading from '@/components/Section-heading';
import { motion } from 'framer-motion';
import { about } from '@/data';
import Image from 'next/image';

export default function About() {
    return (
        <motion.section
            className=" max-w-[60rem] w-[60%] pt-10 rounded-lg text-center leading-8 mb-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.175 }}
        >
            <div className="flex justify-start flex-shrink-0 p-4 w-full">
                <motion.div
                    className="h-[25rem] relative w-1/3 min-w-[20rem] "
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Image
                        src={about.about_image}
                        alt={about.tag}
                        className="rounded-lg w-full h-full min-w-[20rem] "
                        width={200}
                        height={200}
                    ></Image>
                </motion.div>
                <div className="w-2/3 min-w-[37rem] p-4 relative">
                    <div className="rotate-90 transition-all flex justify-between items-center absolute w-max top-1/2 -left-[10rem] -translate-y-1/2">
                        <div className="h-[2px] w-24 mb-8 mr-4 bg-[#413d7a]"></div>
                        <SectionHeading>About me</SectionHeading>
                        <div className="h-[2px] w-24 mb-8 ml-4 bg-[#413d7a]"></div>
                    </div>
                    <div className="w-full ml-24">
                        <motion.div
                            className="flex justify-start "
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <SectionHeading>My name is</SectionHeading>
                            <h1 className="text-3xl ml-2 font-semibold italic text-purple-800">{about.name}</h1>
                        </motion.div>

                        <motion.div
                            className=" flex justify-between "
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <ul className="w-[13rem]">
                                <div className="mt-2 flex justify-start items-center">
                                    <div className="rounded-full h-[10px] w-[10px] mr-2 bg-purple-950"></div>
                                    <li className="text-md font-bold flex justify-start mr-2">
                                        <span className="mr-2 text-[#757575]">Age</span>:{' '}
                                        <span className="ml-2">{about.age}</span>
                                    </li>
                                </div>
                                <div className="mt-2 flex justify-start items-center">
                                    <div className="rounded-full h-[10px] w-[10px] mr-2 bg-purple-950"></div>
                                    <li className="text-md font-bold flex justify-start mr-2">
                                        <span className="mr-2 text-[#757575]">Nationality</span>:
                                        <span className="ml-2">{about.nationality}</span>
                                    </li>
                                </div>
                            </ul>
                            <ul>
                                <div className="mt-2 flex justify-start items-center">
                                    <div className="rounded-full h-[10px] w-[10px] mr-2 bg-purple-950"></div>
                                    <li className="text-md font-bold flex justify-start mr-2">
                                        <span className="mr-2 text-[#757575]">Address</span> :{' '}
                                        <span className="ml-2">{about.address}</span>
                                    </li>
                                </div>
                                <div className="mt-2 flex justify-start items-center">
                                    <div className="rounded-full h-[10px] w-[10px] mr-2 bg-purple-950"></div>
                                    <li className="text-md font-bold flex justify-start mr-2">
                                        <span className="mr-2 text-[#757575]">Email</span> :{' '}
                                        <span className="ml-2">{about.email}</span>
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
                            className="text-[#757575] w-[95%] text-sm mt-4 text-left"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {about.description}
                        </motion.p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
