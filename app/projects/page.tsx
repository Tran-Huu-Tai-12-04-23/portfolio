'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data/data';
import Project from '@/components/project';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <section className="scroll-mt-28 mb-28 mt-10">
            <SectionHeading>My projects</SectionHeading>
            <motion.div
                className="no-scrollbar"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </motion.div>
        </section>
    );
}
