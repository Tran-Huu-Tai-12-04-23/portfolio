'use client';

import React, { Fragment } from 'react';
import SectionHeading from '@/components/section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/theme-context';
import { motion } from 'framer-motion';

export default function Experience() {
    const { theme } = useTheme();

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-20 scroll-mt-28 mb-28 sm:mb-40">
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
                    {experiencesData.map((item, index) => (
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
                                // icon={item?.icon}
                                iconStyle={{
                                    background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                                    fontSize: '1.5rem',
                                }}
                            >
                                <h3 className="font-semibold capitalize">{item.title}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))}
                </VerticalTimeline>
            </motion.div>
        </motion.section>
    );
}
