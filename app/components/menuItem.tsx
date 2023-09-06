import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

export const MenuItem = ({ data }: any) => {
    const pathName = usePathname();

    return (
        <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
                className={`${
                    data.hash === pathName ? 'text-primary font-bold' : ''
                }  hover:text-primary flex h-full w-full p-5 items-center justify-center py-3 `}
                href={data.hash}
                onClick={() => {}}
            >
                {data.name}

                <motion.span
                    className=" rounded-full absolute inset-0 -z-10 "
                    layoutId="activeSection"
                    transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                    }}
                ></motion.span>
            </Link>
        </motion.li>
    );
};
