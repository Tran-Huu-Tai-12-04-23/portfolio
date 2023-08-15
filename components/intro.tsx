'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare, FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';

import { personal } from '@/data';

export default function Intro() {
    return (
        <section className="mb-20 max-w-[50rem] text-center sm:mb-0 scroll-mt-[10rem]">
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
                        <img
                            src={personal.avatar}
                            alt={personal.name}
                            width="300"
                            height="400"
                            className=" h-24 w-24 rounded-full object-cover border-[0.35rem] border-purple-500 shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.h1
                className="mt-4  font-extrabold "
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {personal.name}
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
                {personal.description}
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
                        href="#contact"
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
                {personal.socials.linked && (
                    <a
                        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href={personal.socials.linked}
                        target="_blank"
                    >
                        <BsLinkedin className="text-blue-500 " />
                    </a>
                )}

                {personal.socials.github && (
                    <a
                        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href={personal.socials.github}
                        target="_blank"
                    >
                        <FaGithubSquare />
                    </a>
                )}

                {personal.socials.youtube && (
                    <a
                        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href={personal.socials.youtube}
                        target="_blank"
                    >
                        <FaYoutube className="text-red-500" />
                    </a>
                )}
                {personal.socials.tiktok && (
                    <a
                        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href={personal.socials.tiktok}
                        target="_blank"
                    >
                        <FaTiktok className="text-black" />
                    </a>
                )}
                {personal.socials.facebook && (
                    <a
                        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href={personal.socials.facebook}
                        target="_blank"
                    >
                        <FaFacebook className="text-blue-500" />
                    </a>
                )}
            </motion.div>
        </section>
    );
}
