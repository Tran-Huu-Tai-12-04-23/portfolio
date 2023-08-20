import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
    children: React.ReactNode;
    preview: boolean;
    setPreview: React.Dispatch<any>;
}

const previews = {
    open: { left: 0, right: 0, bottom: 0, top: 0, opacity: 1, scale: 1 },
    closed: { left: 0, right: 0, bottom: 1000, opacity: 0, scale: 0 },
};

const Preview: React.FC<Props> = ({ children, preview, setPreview }) => {
    return (
        <motion.div
            transition={{
                duration: 0.4,
            }}
            onClick={() => setPreview(false)}
            variants={previews}
            initial={false} // Set this to false so that animation starts from current state
            animate={preview ? 'open' : 'closed'}
            className=" fixed z-50 flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)]"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative rounded-lg p-4 h-[40rem] w-[90%] flex justify-center items-center  dark:bg-gray-950 dark:text-white"
            >
                <AiOutlineClose
                    onClick={() => setPreview(false)}
                    className="absolute top-2 right-2 text-2xl hover:text-primary cursor-pointer hover:rotate-180 transition-all"
                />
                {children}
            </div>
        </motion.div>
    );
};

export default Preview;
