'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import { GoProject } from 'react-icons/go';
import { AiOutlineUser } from 'react-icons/ai';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ name, description, frameWorks, imageUrl }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group mb-3 sm:mb-8 last:mb-0 xl:p-10 lg:m-8 md:p-5 p-5"
        >
            <section className="bg-gray-100w  flex justify-start w-full border hover:border-black/5 border-transparent rounded-lg overflow-hidden sm:pr-8 relative sm:h-[30rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className="w-1/2">
                    <Image
                        src={imageUrl}
                        alt="Project I worked on"
                        style={{
                            backgroundSize: 'cover',
                            height: '100%',
                            width: '100%',
                        }}
                        quality={95}
                    />
                </div>
                <div className="p-4  flex flex-col h-full sm:group-even:ml-[18rem] w-2/3">
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    {/* <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p> */}
                    <div className="mt-2">
                        <ul>
                            <li className="flex justify-start  items-center text-lg p-2">
                                <GoProject className="text-3xl"></GoProject>
                                <div className="flex justify-start items-center  ml-2 ">
                                    <span className="text-white mr-2 font-semibold">Project</span> :
                                    <span className="ml-2 italic font-bold">Website</span>
                                </div>
                            </li>
                            <li className="flex justify-start  items-center text-lg p-2">
                                <AiOutlineUser className="text-3xl"></AiOutlineUser>
                                <div className="flex justify-start items-center  ml-2 ">
                                    <span className="text-white mr-2 font-semibold">Member</span> :
                                    <span className="ml-2 italic font-bold">owner</span>
                                </div>
                            </li>
                            <li className="flex justify-start  items-center text-lg p-2">
                                <GoProject className="text-3xl"></GoProject>
                                <div className="flex justify-start items-center  ml-2 ">
                                    <span className="text-white mr-2 font-semibold">Project</span> :
                                    <span className="ml-2 italic font-bold">Website</span>
                                </div>
                            </li>
                            <li className="flex justify-start  items-center text-lg p-2">
                                <GoProject className="text-3xl"></GoProject>
                                <div className="flex justify-start items-center  ml-2 ">
                                    <span className="text-white mr-2 font-semibold">Project</span> :
                                    <span className="ml-2 italic font-bold">Website</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button
                        type="button"
                        className="mt-5 transition-all w-64 mt- auto text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Preview
                    </button>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {frameWorks.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] hover:bg-primary px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                            >
                                #{tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </motion.div>
    );
}
