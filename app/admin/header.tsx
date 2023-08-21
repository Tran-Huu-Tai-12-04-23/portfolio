import { motion } from 'framer-motion';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import Image from 'next/image';
import SectionHeading from '@/components/section-heading';

interface Props {
    activeSidebar: boolean;
    setActiveSidebar: any;
}
function Header({ activeSidebar, setActiveSidebar }: Props) {
    return (
        <motion.div
            className="w-full z-50 flex sticky top-0 justify-between items-center transition-all text-black p-4 shadow-xl bg-white"
            initial={{
                y: -300,
            }}
            animate={{
                y: 0,
            }}
            exit={{
                y: -300,
            }}
            transition={{
                duration: 1.2,
            }}
        >
            <AiOutlineMenu
                onClick={() => setActiveSidebar(!activeSidebar)}
                // onAuxClick={}
                className={`text-xl cursor-pointer hover:scale-110 transition-all ${
                    activeSidebar ? 'text-primary' : ''
                }`}
            ></AiOutlineMenu>

            <div className="flex justify-end items-center">
                <IoIosNotificationsOutline className="text-3xl mr-3 cursor-pointer hover:text-primary hover:scale-125 transition-all " />
                <h5 className="text-md font-bold font-mono mr-2 text-primary">Hello, Huu Tai</h5>
                <Image
                    className="rounded-full"
                    src={'https://avatars.githubusercontent.com/u/99662952?v=4'}
                    width={40}
                    height={40}
                    alt={''}
                ></Image>
            </div>
        </motion.div>
    );
}

export default Header;
