'use client';

import React, { useEffect, useState } from 'react';
import SectionHeading from '@/app/components/section-heading';
import { projectsData } from '@/lib/data/data';
import Project from '@/app/components/project';
import { motion } from 'framer-motion';
import Service from '@/service';
import WaitLoadApi from '../components/waitLoadApi';

export default function Projects() {
    const [projects, setProjects] = useState<any>(null);
    const [waitApi, setWaitApi] = useState<boolean>(false);

    useEffect(() => {
        const getProjects = async () => {
            setWaitApi(true);
            const result = await Service.getDataFromApi('/api/project');
            setWaitApi(false);

            const data = result.data;

            if (data.status === 200) {
                setProjects(JSON.parse(data.projects));
            }
        };
        getProjects();
    }, []);

    console.log(projects);
    return (
        <section className="scroll-mt-28 mb-28 mt-10">
            {waitApi && <WaitLoadApi></WaitLoadApi>}
            <SectionHeading>My projects</SectionHeading>
            <motion.div
                className="no-scrollbar w-screen flex flex-col items-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {projects &&
                    projects.map((project: any, index: number) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))}
            </motion.div>
        </section>
    );
}
