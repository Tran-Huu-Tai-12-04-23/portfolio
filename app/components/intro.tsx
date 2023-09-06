'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare, FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';
import Service from '@/service';
import { personal } from '@/data';
import Image from 'next/image';
import WaitLoadApi from './waitLoadApi';
interface Props {
    type: null | string;
    data: null | any;
}

export default function Intro({ type = 'default', data = {} }: Props) {
    const [introData, setIntroData] = useState<any>(null);
    const [waitApi, setWaitApi] = useState<boolean>(false);

    useEffect(() => {
        const getIntroData = async () => {
            setWaitApi(true);
            const result = await Service.getDataFromApi('/api/intro');
            setWaitApi(false);

            const data = result.data;

            if (data.status === 200) {
                setIntroData(JSON.parse(data.data));
            }
        };
        getIntroData();
    }, []);

    return (
        <section className=" max-w-[50rem] text-center flex justify-center items-center h-full xl:mt-10">
            {waitApi && <WaitLoadApi></WaitLoadApi>}
            <div>
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: 'tween',
                                duration: 0.6,
                            }}
                        >
                            {introData?.avatar && (
                                <Image
                                    src={introData?.avatar}
                                    alt={'huutai'}
                                    width={300}
                                    height={400}
                                    className=" h-24 w-24 rounded-full object-cover border-[0.35rem] border-purple-500 shadow-xl"
                                />
                            )}
                            {type === 'preview' && data.avatar && (
                                <Image
                                    src={introData?.avatar}
                                    alt={'huutai'}
                                    width={300}
                                    height={400}
                                    className=" h-24 w-24 rounded-full object-cover border-[0.35rem] border-purple-500 shadow-xl"
                                />
                            )}
                        </motion.div>
                    </div>
                </div>

                <motion.h1
                    className="mt-4  font-extrabold "
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {type === 'preview' ? data.name : introData?.name}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.6,
                    }}
                    className="flex justify-center items-center mt-5 mb-5"
                >
                    <div className="container flex justify-center items-center">
                        <div className="content">
                            <div className="content__container">
                                <p className="content__container__text">I'm love </p>
                                <ul className="content__container__list">
                                    {personal.favorites.map((fa, index) => {
                                        return (
                                            <li key={index} className="content__container__list__item">
                                                {fa}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.h1
                    className="mb-10 mt-4 px-4 text-md font-medium !leading-[1.5] sm:text-md"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {type === 'preview' ? data.description : introData?.description}
                </motion.h1>
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.6,
                    }}
                >
                    <div className="flex justify-center flex-shrink-0 w-full">
                        <Link
                            href="/contact"
                            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        >
                            Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                        </Link>

                        <a
                            className="group bg-white px-7 ml-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                            href="/CV.pdf"
                            download
                        >
                            Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="w-full mt-5 mb-5 flex gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.6,
                    }}
                >
                    {introData && (
                        <a
                            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                            href={introData?.linkedLink}
                            target="_blank"
                        >
                            <BsLinkedin className="text-blue-500 " />
                        </a>
                    )}

                    {introData && (
                        <a
                            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                            href={introData?.githubLink}
                            target="_blank"
                        >
                            <FaGithubSquare />
                        </a>
                    )}

                    {introData && (
                        <a
                            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                            href={introData?.youtubeLink}
                            target="_blank"
                        >
                            <FaYoutube className="text-red-500" />
                        </a>
                    )}
                    {introData && (
                        <a
                            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                            href={introData?.tiktokLink}
                            target="_blank"
                        >
                            <FaTiktok className="text-black" />
                        </a>
                    )}
                    {introData && (
                        <a
                            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                            href={introData?.facebookLink}
                            target="_blank"
                        >
                            <FaFacebook className="text-blue-500" />
                        </a>
                    )}

                    {type === 'preview' && data.linkedLink && (
                        <a
                            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                            href={data.linkedLink}
                            target="_blank"
                        >
                            <BsLinkedin className="text-blue-500 " />
                        </a>
                    )}

                    {type === 'preview' && data.githubLink && (
                        <a
                            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                            href={data.githubLink}
                            target="_blank"
                        >
                            <FaGithubSquare />
                        </a>
                    )}

                    {type === 'preview' && data.youtubeLink && (
                        <a
                            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                            href={data.youtubeLink}
                            target="_blank"
                        >
                            <FaYoutube className="text-red-500" />
                        </a>
                    )}
                    {type === 'preview' && data.tiktokLink && (
                        <a
                            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                            href={data.tiktokLink}
                            target="_blank"
                        >
                            <FaTiktok className="text-black" />
                        </a>
                    )}
                    {type === 'preview' && data.facebookLink && (
                        <a
                            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                            href={data.facebookLink}
                            target="_blank"
                        >
                            <FaFacebook className="text-blue-500" />
                        </a>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
