'use client';
import { motion } from 'framer-motion';
import SectionHeading from '../../../components/section-heading';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'next/navigation';
import Service from '@/service';
import WaitLoadApi from '@/app/components/waitLoadApi';

function DetailProject() {
    const params = useParams();
    const { projectId } = params;
    const [image, setImage] = useState<any>([{}]);
    const [listImage, setListImage] = useState<Array<string>>([]);
    const [linkVideoSource, setLinkVideoSource] = useState<string>('');
    const [linkSourceGit, setLinkSourceGit] = useState<string>('');
    const [linkWebsite, setLinkWebsite] = useState<string>('');
    const [description, setDescription] = useState<string>(
        ' Sky Go Desktop react javascript web application build on top of the Electron framework.',
    );
    const [name, setName] = useState<string>('');
    const [aboutProjects, setAboutProjects] = useState<Array<string>>([]);
    const [aboutProject, setAboutProject] = useState<string>('');
    const [addAboutProject, setAddAboutProject] = useState<boolean>(false);
    const [frameWorks, setFrameWorks] = useState<Array<string>>([]);
    const [frameWork, setFrameWork] = useState<string>('');
    const [addFrameWork, setAddFrameWork] = useState<boolean>(false);
    const [projectDetail, setProjectDetail] = useState<any>(null);
    const [waitApi, setWaitApi] = useState<boolean>(false);
    useEffect(() => {
        const getProjectDetail = async () => {
            setWaitApi(true);
            const result = await Service.getDataFromApi('/api/project/detail-project/', `?projectId=${projectId}`);
            const data = result.data;
            setWaitApi(false);

            if (data.status === 200) {
                setProjectDetail(JSON.parse(data.data));
            }
        };
        getProjectDetail();
    }, []);

    useEffect(() => {
        if (projectDetail) {
            const {
                name,
                description,
                linkSource,
                linkVideoDemo,
                listFrameWork,
                listImage,
                aboutProjects,
                linkWebsite,
            } = projectDetail;
            setName(name || '');
            setDescription(description || '');
            setLinkSourceGit(linkSource || '');
            setLinkVideoSource(linkVideoDemo || '');
            setFrameWorks(listFrameWork || '');
            setListImage(listImage || '');
            setAboutProjects(aboutProjects || '');
            setLinkWebsite(linkWebsite || '');
        }
    }, [projectDetail]);

    useEffect(() => {
        if (!projectId) {
            window.document.referrer;
        }
    }, [projectId]);

    const renderImage = () => {
        return listImage.map((image, index) => {
            return (
                <div key={index} className="flex justify-center items-center bg-contain w-full max-h-[40rem]">
                    <img className="object-contain rounded-lg max-w-[40rem]" alt={image || 'default'} src={image} />
                </div>
            );
        });
    };
    return (
        <motion.div
            className="mt-10 mb-64"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.6,
            }}
        >
            {waitApi && <WaitLoadApi />}
            <div className="flex justify-start items-start flex-col gap-5 p-10 max-w-[60rem]">
                <h1 className="bg-clip-text bg-gradient-to-r text-6xl font-mono text-transparent from-purple-500 via-pink-500 to-red-500 font-bold ">
                    {name}
                </h1>
                <SectionHeading>About this website</SectionHeading>
                <p className="font-mono text-md dark:text-white text-black">{description}</p>
                <ul className="dark:text-white text-black">
                    {aboutProjects &&
                        aboutProjects.length > 0 &&
                        aboutProjects.map((aboutContent, index) => {
                            return (
                                <li
                                    key={index}
                                    className="capitalize list-disc ml-5  mb-5 dark:text-white text-black font-mono"
                                >
                                    {aboutContent}
                                </li>
                            );
                        })}
                </ul>
                <SectionHeading>Technical Sheet</SectionHeading>
                <h5 className="font-mono text-md dark:text-white text-black">
                    Code technologies I got involved with while working on this project.
                </h5>
                <div className="h-[1px] w-full bg-[#4a2a5b] mb-5"></div>
                <ul className="">
                    {frameWorks &&
                        frameWorks.length > 0 &&
                        frameWorks.map((frameWork, index) => {
                            return (
                                <li
                                    key={index}
                                    className="capitalize list-disc  ml-5 mb-5 dark:text-white text-black font-mono"
                                >
                                    {frameWork}
                                </li>
                            );
                        })}
                </ul>
                <SectionHeading>Resources</SectionHeading>
                <div className="h-[1px] w-full bg-[#4a2a5b] mb-5"></div>
                <div className="flex justify-start items-center">
                    <span>Link github : </span>
                    <Link
                        target="_blank"
                        className="text-primary hover:text-blue-500 cursor-pointer underline ml-4"
                        href={'asd'}
                    >
                        {linkSourceGit}
                    </Link>
                </div>
                <div className="flex justify-start items-center">
                    <span>Link website : </span>
                    <Link
                        className="text-primary hover:text-blue-500 cursor-pointer underline ml-4"
                        target="_blank"
                        href={'asdasd'}
                    >
                        {linkWebsite}
                    </Link>
                </div>
                <SectionHeading>Image relative website</SectionHeading>
                <div className="h-[1px] w-full bg-[#4a2a5b] mb-5"></div>
                <Carousel>{renderImage()}</Carousel>

                <SectionHeading>Video demo website</SectionHeading>
                <div className="h-[1px] w-full bg-[#4a2a5b] mb-5"></div>

                {linkVideoSource && (
                    <video className="w-full rounded-lg" controls>
                        <source src={linkVideoSource} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </motion.div>
    );
}

export default DetailProject;
