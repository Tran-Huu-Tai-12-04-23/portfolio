import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { BsPersonWorkspace } from 'react-icons/bs';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
    {
        name: 'Home',
        hash: '/',
    },
    {
        name: 'About',
        hash: '/about',
    },
    {
        name: 'Projects',
        hash: '/projects',
    },
    {
        name: 'Skills',
        hash: '/skills',
    },
    {
        name: 'Experience',
        hash: '/experience',
    },
    {
        name: 'Contact',
        hash: '/contact',
    },
] as const;

export const experiencesData = [
    {
        title: 'Start studying at college at  TDTU( Ton Duc Thang University).',
        location: 'HCM city',
        description:
            'My major is computer network and data communication, yet I find great enjoyment in designing and building software. For example, I am involved in creating websites, apps, and application interfaces. As a result, I have made the decision to independently cultivate a diverse skill set within this domain. During my time at university, I am presented with the opportunity to work with programming languages and operating systems for the first time. This stroke of luck brings me immense joy, and I am thoroughly relishing the experience',
        icon: React.createElement(LuGraduationCap),
        date: '2021',
        time: '2021',
    },
    {
        title: 'Learning front-end on my own',
        location: 'HCM city',
        description:
            "I began learning front-end development through F8 education. This website is a valuable resource for self-studying HTML, CSS, and JavaScript for beginners, and it's available for everyone interested in learning programming languages. Initially, I found it quite challenging. Consequently, I dedicated nearly the entire day to it, and after about two months, I started to grasp the concepts. I consider myself fortunate in this regard. However, the journey was not without its difficulties.",
        icon: React.createElement(CgWorkAlt),
        date: '2021 - 2022',
        time: '2021 - 2022',
    },
    {
        title: 'Building Knowledge of Front-end and back-end ',
        location: 'HCM city',
        description:
            'I continued learning more front-end development, and I started learning back-end development. Up until now, I continue to engage in daily learning sessions focused on web development, aiming to enhance my skills for the future. Additionally, successfully completing all my subjects at school has provided me with a foundational knowledge of programming languages like Object-Oriented Programming (OOP) and Database management.',
        icon: React.createElement(FaReact),
        date: '2022 - present',
        time: '2022 - present',
    },
    {
        title: 'Advanced skills ',
        location: 'HCM city',
        description:
            'I am currently working on projects assigned by the university, as well as pursuing personal areas of interest. I am actively developing and expanding these projects. Looking ahead, I am eager to embrace new opportunities for learning and acquiring fresh knowledge.',
        icon: React.createElement(BsPersonWorkspace),
        date: '2023 - present',
        time: '2023 - present',
    },
    {
        title: 'Advanced skills ',
        location: 'HCM city',
        description:
            'I am currently working on projects assigned by the university, as well as pursuing personal areas of interest. I am actively developing and expanding these projects. Looking ahead, I am eager to embrace new opportunities for learning and acquiring fresh knowledge.',
        icon: null,
        date: '2023 - present',
        time: '2023 - present',
    },
] as const;

export const projectsData = [
    {
        title: 'CorpComment',
        name: 'CorpComment',
        description:
            'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
        frameWorks: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
        imageUrl: corpcommentImg,
        linkSource: 'https://source',
        videoDemo: 'https://source',
    },
    {
        title: 'rmtDev',
        name: 'rmtDev',
        description:
            'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
        frameWorks: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
        imageUrl: rmtdevImg,
        linkSource: 'https://source',
        videoDemo: 'https://source',
    },
    {
        title: 'Word Analytics',
        name: 'Word Analytics',
        description:
            'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
        frameWorks: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
        imageUrl: wordanalyticsImg,
        linkSource: 'https://source',
        videoDemo: 'https://source',
    },
] as const;

export const skillsData = {
    backEnd: [
        {
            name: 'nodejs',
            img: 'https://icon-library.com/images/nodejs-icon/nodejs-icon-17.jpg',
        },
        {
            name: 'nextjs',
            img: 'https://i.ibb.co/JnZNmCG/nextjs-icon-132160-1.png',
        },
    ],
    frontEnd: [
        {
            name: 'nextjs',
            img: 'https://i.ibb.co/JnZNmCG/nextjs-icon-132160-1.png',
        },
        {
            name: 'html',
            img: 'https://i.ibb.co/6P8Q7bJ/Screenshot-2023-08-13-154423-removebg-preview.png',
        },
        {
            name: 'css',
            img: 'https://w7.pngwing.com/pngs/458/222/png-transparent-css-logo-css-interface-website-isolated-logo-3d-icon-thumbnail.png',
        },
        {
            name: 'javascript',
            img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
        },
        {
            name: 'typescript',
            img: 'https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png',
        },
        {
            name: 'tailwindcss',
            img: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png',
        },
    ],
    other: [
        {
            name: 'figma',
            img: 'https://cdn.dribbble.com/users/3865/screenshots/14403810/media/50de49976e47e90626e7aac690176553.png?resize=1000x750&vertical=center',
        },
        {
            name: 'os',
            img: 'https://cdn2.iconfinder.com/data/icons/ios-7-style-metro-ui-icons/512/MetroUI_Ubuntu_Alt.png',
        },
    ],
} as const;
