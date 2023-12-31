'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useProjectId } from '@/context/project-id-context';
import { useRouter } from 'next/navigation';

interface Props {
    name: string;
    description: string;
    listFrameWork: Array<any>;
    projectImageLink: string;
    _id: string;
}

export default function Project({ name, description, listFrameWork, projectImageLink, _id }: Props) {
    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const { setProjectIdValue } = useProjectId();

    const handleDetailProject = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        router.push('/projects/detail-project/' + _id);
    };
    return (
        <motion.div
            onClick={(e) => {
                setProjectIdValue(_id);
                handleDetailProject(e);
            }}
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-[80%] "
        >
            <h1 className="text-2xl font-bold font-mono mt-5 mb-2">{name}</h1>

            <section className=" border-dashed dark:hover:border-[rgba(255,255,255,0.2)] hover:border-[rgba(0,0,0,0.2)] w-full p-4 flex flex-col gap-5 bg-[rgb(23,38,75,0.2)] justify-start border border-transparent rounded-lg overflow-hidden relative  transition sm:group-even:pl-8 dark:text-white ">
                <div className="w-full flex justify-center items-center">
                    <Image
                        src={projectImageLink}
                        alt="Project I worked on"
                        className="bg-contain cursor-pointer max-h-[30rem]  rounded-lg  border-dashed border-[1px] border-[rgba(0,0,0,0.1)]"
                        width={100}
                        height={100}
                    />
                </div>
                <p className="font-light text-sm text-gray-600 line-clamp-1 overflow-visible truncate">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {listFrameWork.map((tag, index) => (
                        <li
                            className="bg-[rgba(82,205,208,0.2)] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-[#52cdd0] rounded-full dark:text-[#52cdd0] hover:brightness-125"
                            key={index}
                        >
                            #{tag}
                        </li>
                    ))}
                </ul>
            </section>
        </motion.div>
    );
}
