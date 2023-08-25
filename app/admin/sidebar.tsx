import { motion } from 'framer-motion';
import SectionHeading from '@/app/components/section-heading';
import { GoHome } from 'react-icons/go';
import { SiMinutemailer } from 'react-icons/si';
import { FiUser } from 'react-icons/fi';
import { PiChalkboardSimpleDuotone, PiBriefcaseDuotone, PiCodeDuotone } from 'react-icons/pi';
import { AiFillThunderbolt, AiFillPhone } from 'react-icons/ai';

const variants = {
    open: { x: 0 },
    closed: { x: '-100%' },
};
interface Props {
    activeSidebar: boolean;
    setOder: any;
    order: number;
}
function SideBar({ activeSidebar, setOder, order }: Props) {
    const navigate = [
        {
            name: 'DashBoard',
            icon: <GoHome className="text-xl"></GoHome>,
            order: 1,
        },
        {
            name: 'Intro setting',
            icon: <AiFillThunderbolt className="text-xl"></AiFillThunderbolt>,
            order: 2,
        },
        {
            name: 'About setting',
            icon: <FiUser className="text-xl"></FiUser>,
            order: 3,
        },
        {
            name: 'Projects setting',
            icon: <PiCodeDuotone className="text-xl"></PiCodeDuotone>,
            order: 4,
        },
        {
            name: 'Experience setting',
            icon: <PiChalkboardSimpleDuotone className="text-xl"></PiChalkboardSimpleDuotone>,
            order: 5,
        },
        {
            name: 'Skill setting',
            icon: <PiBriefcaseDuotone className="text-xl"></PiBriefcaseDuotone>,
            order: 6,
        },
        {
            name: 'Contact setting',
            icon: <AiFillPhone className="text-xl"></AiFillPhone>,
            order: 7,
        },
        {
            name: 'Email received',
            icon: <SiMinutemailer className="text-xl"></SiMinutemailer>,
            order: 8,
        },
    ];
    return (
        <motion.div
            className="relative bg-[#212b36] h-screen min-w-[15rem] w-1/5 p-4"
            animate={activeSidebar ? 'open' : 'closed'}
            variants={variants}
        >
            <h1 className="mb-10 text-xl dark:text-white font-bold font-mono border-b-4 border-solid border-primary w-fit">
                Dashboard Admin
            </h1>

            <ul>
                {navigate.map((nav, index) => {
                    return (
                        <li
                            key={index}
                            onClick={(e) => setOder(nav.order)}
                            className={`${
                                order === nav.order ? 'bg-[rgba(168,85,247,0.1)] text-primary' : ''
                            } p-2 text-md hover:cursor-pointer hover:text-primary rounded-md hover:bg-[rgba(168,85,247,0.1)] flex justify-start items-center mt-4`}
                        >
                            {nav.icon}
                            <span className="ml-4">{nav.name}</span>
                        </li>
                    );
                })}
            </ul>
        </motion.div>
    );
}

export default SideBar;
