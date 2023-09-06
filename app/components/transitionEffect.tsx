'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Layout from './layout';
import ThemeSwitch from './theme-switch';
import CursorCustom from './cursorCustom';
import MenuMobile from '@/app/components/menuMobile';

function TransitionEffect({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            {pathName !== '/admin' && (
                <Layout>
                    <MenuMobile />
                    <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[30rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
                    {children}
                    <ThemeSwitch />
                    <CursorCustom />
                </Layout>
            )}
            {pathName === '/admin' && children}
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
