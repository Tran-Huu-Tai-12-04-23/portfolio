'use client';

import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@/context/theme-context';
import { motion } from 'framer-motion';
import { IoCodeWorkingOutline } from 'react-icons/io5';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { BsPersonWorkspace } from 'react-icons/bs';
import { LuGraduationCap } from 'react-icons/lu';
import Service from '@/service';
import WaitLoadApi from '../components/waitLoadApi';

export default function Experience() {
    const { theme } = useTheme();
    const [experiencesData, setExperiencesData] = useState<Array<object>>([]);
    const [waitApi, setWaitApi] = useState<boolean>(false);

    useEffect(() => {
        const getExperiencesData = async () => {
            setWaitApi(true);
            const result = await Service.getDataFromApi('/api/experience');
            setWaitApi(false);

            const data = result.data;

            if (data.status === 200) {
                setExperiencesData(JSON.parse(data.data));
            }
        };
        getExperiencesData();
    }, []);

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-20 scroll-mt-28 mb-28 sm:mb-40">
            {waitApi && <WaitLoadApi></WaitLoadApi>}
            <motion.h1
                className="text-3xl font-medium capitalize mb-8 text-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                My experience
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
                <VerticalTimeline lineColor="">
                    {experiencesData &&
                        experiencesData.map((item: any, index: number) => (
                            <React.Fragment key={index}>
                                <VerticalTimelineElement
                                    contentStyle={{
                                        background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                                        boxShadow: 'none',
                                        border: '1px solid rgba(0, 0, 0, 0.05)',
                                        textAlign: 'left',
                                        padding: '1.3rem 2rem',
                                    }}
                                    contentArrowStyle={{
                                        borderRight:
                                            theme === 'light'
                                                ? '0.4rem solid #9ca3af'
                                                : '0.4rem solid rgba(255, 255, 255, 0.5)',
                                    }}
                                    date={item?.date}
                                    icon={
                                        index === 0
                                            ? React.createElement(LuGraduationCap)
                                            : index === 1
                                            ? React.createElement(CgWorkAlt)
                                            : index === 2
                                            ? React.createElement(FaReact)
                                            : index === 3
                                            ? React.createElement(BsPersonWorkspace)
                                            : React.createElement(IoCodeWorkingOutline)
                                    }
                                    iconStyle={{
                                        background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    <h3 className="font-semibold capitalize">{item?.title}</h3>
                                    <p className="font-normal !mt-0">{item?.location}</p>
                                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                        {item?.description}
                                    </p>
                                </VerticalTimelineElement>
                            </React.Fragment>
                        ))}
                </VerticalTimeline>
            </motion.div>
        </motion.section>
    );
}
