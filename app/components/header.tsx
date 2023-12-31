'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Header() {
    const pathName = usePathname();
    return (
        <header className="z-[999] relative lg:block xl:block hidden">
            {/* <motion.div
                className="fixed bottom-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:bottom-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            ></motion.div> */}
            <nav className="flex fixed xl:bottom-7 left-0 right-0 lg:bottom-7 justify-center items-center md:bottom-0 sm:bottom-0 bottom-0">
                <motion.ul
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex min-w-[22rem] gap-y-1 text-[0.9rem] text-[#0f1724] dark:text-white font-bold dark:bg-[rgba(118,111,204,0.1)] bg-[rgba(118,111,204,0.1)] backdrop-blur-3xl pt-2 xl:rounded-full lg:rounded-full  pb-2"
                >
                    {links.map((link) => (
                        <motion.li
                            className="flex items-center justify-center relative pl-4 pr-4"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={`${
                                    link.hash === pathName ? 'text-primary font-bold' : ''
                                }  hover:text-primary flex h-full w-full items-center justify-center p-3 py-3  transition  `}
                                href={link.hash}
                                onClick={() => {}}
                            >
                                {link.name}

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
                    ))}
                </motion.ul>
            </nav>
        </header>
    );
}
