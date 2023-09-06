'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import SectionHeading from '@/app/components/section-heading';
// import { dataSkill } from '@/lib/data/data';
import { motion } from 'framer-motion';
import { MdArrowForwardIos } from 'react-icons/md';
import Image from 'next/image';
import Service from '@/service';
import WaitLoadApi from '../components/waitLoadApi';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.8 + 0.4 * index,
        },
    }),
};
interface Props {
    type: string;
    data: any;
}

export default function Skills() {
    const [dataSkill, setDataSkill] = useState<any>(null);
    const [waitSave, setWaitSave] = useState<boolean>(false);

    useEffect(() => {
        const getDataSkill = async () => {
            setWaitSave(true);
            const result = await Service.getDataFromApi('/api/skill');
            console.log(result);
            setWaitSave(false);
            const data = result.data;
            if (data.status === 200) {
                setDataSkill(JSON.parse(data.data));
            }
        };

        getDataSkill();
    }, []);

    return (
        <>
            {waitSave && <WaitLoadApi />}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className=" w-full p-10 mt-10 flex justify-start items-start flex-col scroll-mt-28 text-center mb-40 "
            >
                <motion.h1
                    className="text-3xl uppercase font-bold"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    I'm Specialized in
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex mt-1 justify-start items-center"
                >
                    <MdArrowForwardIos className="text-3xl"></MdArrowForwardIos>
                    <h1 className="bg-clip-text bg-gradient-to-r text-transparent from-purple-500 via-pink-500 to-red-500 text-3xl font-bold ">
                        Front-end development! || Back-end development!
                    </h1>
                </motion.div>

                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h5 className="text-md border-b-[2px] border-solid border-[#4e4b74] font-bold">Back end</h5>
                </motion.div>
                <ul className="flex flex-wrap xl:justify-start lg:justify-start justify-center w-full gap-10  mt-5 text-lg text-gray-800 ">
                    {dataSkill &&
                        dataSkill?.backend.map((skill: any, index: number) => (
                            <motion.li
                                className="bg-white borderBlack rounded-xl px-5 py-3 hover:brightness-125 dark:bg-white/10 dark:text-white/80"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                            >
                                <Image
                                    src={skill?.linkImage}
                                    alt={skill?.name}
                                    width={200}
                                    height={200}
                                    className="rounded-full h-40 bg-contain w-40 border-solid border-[2px] border-purple-700"
                                ></Image>
                                <span className="capitalize">{skill?.name}</span>
                            </motion.li>
                        ))}
                </ul>
                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h5 className="text-md border-b-[2px] border-solid border-[#4e4b74] font-bold">Front end</h5>
                </motion.div>

                <ul className="flex flex-wrap xl:justify-start lg:justify-start justify-center w-full gap-10  mt-5 text-lg text-gray-800">
                    {dataSkill &&
                        dataSkill?.frontEnd.map((skill: any, index: number) => (
                            <motion.li
                                className="bg-white  borderBlack rounded-xl px-5 py-3 hover:brightness-125 dark:bg-white/10 dark:text-white/80"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                            >
                                <Image
                                    src={skill?.linkImage}
                                    alt={skill?.name}
                                    width={200}
                                    height={200}
                                    className="rounded-full h-40 bg-contain w-40 border-solid border-[2px] border-purple-700"
                                ></Image>
                                <span className="capitalize">{skill?.name}</span>
                            </motion.li>
                        ))}
                </ul>

                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <h5 className="text-md border-b-[2px] border-solid border-[#4e4b74] font-bold">Other</h5>
                </motion.div>

                <ul className="flex flex-wrap xl:justify-start lg:justify-start justify-center w-full gap-10  mt-5 text-lg text-gray-800 pb-10">
                    {dataSkill &&
                        dataSkill?.other.map((skill: any, index: number) => (
                            <motion.li
                                className="bg-white  borderBlack rounded-xl px-5 py-3 hover:brightness-125 dark:bg-white/10 dark:text-white/80"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                            >
                                <Image
                                    src={skill?.linkImage}
                                    alt={skill?.name}
                                    width={200}
                                    height={200}
                                    className="rounded-full h-40 bg-contain w-40 border-solid border-[2px] border-purple-700"
                                ></Image>
                                <span className="capitalize">{skill?.name}</span>
                            </motion.li>
                        ))}
                </ul>
            </motion.section>
        </>
    );
}
