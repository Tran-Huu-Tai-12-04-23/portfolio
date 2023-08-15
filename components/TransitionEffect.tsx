'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Layout from './layout';

function TransitionEffect({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <Layout>{children}</Layout>
            <motion.div className="z-30" key={pathName} initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
                <motion.div
                    className="w-screen fixed top-0 bottom-0 h-screen bg-gradient-to-r dark:from-[#0f0f16] dark:via-[#1d1c2a] dark:to-[#222030] from-[#e5dbf4] via-[#e7e3f7] to-[#eeecfb] right-full z-30"
                    initial={{
                        x: '100%',
                        width: '100%',
                    }}
                    animate={{
                        x: '0%',
                        width: '0%',
                    }}
                    exit={{
                        x: ['0%', '100%'],
                        width: ['0%', '100%'],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}
                ></motion.div>
                <motion.div
                    className="w-screen fixed top-0 bottom-0  h-screen right-full dark:bg-[#1d1c2a] bg-[#cbc1da] z-20"
                    initial={{
                        x: '100%',
                        width: '100%',
                    }}
                    animate={{
                        x: '0%',
                        width: '0%',
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                        delay: 0.1,
                    }}
                ></motion.div>
                <motion.div
                    className="w-screen fixed top-0 bottom-0  h-screen right-full  dark:bg-[#222030] bg-[#b3aadc] z-10"
                    initial={{
                        x: '100%',
                        width: '100%',
                    }}
                    animate={{
                        x: '0%',
                        width: '0%',
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: 'easeInOut',
                    }}
                ></motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default TransitionEffect;
