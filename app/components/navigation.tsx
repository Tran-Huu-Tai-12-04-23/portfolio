import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './menuItem';
import { links } from '@/lib/data/data';
const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export const Navigation = () => (
    <motion.ul
        variants={variants}
        className="w-[230px] top-[100px] p-4 absolute h-full flex flex-col justify-between items-center max-h-[30rem] m-auto"
    >
        {links.map((i, index) => (
            <MenuItem data={i} key={index} />
        ))}
    </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
