import * as React from 'react';
import { useRef } from 'react';
import { motion, sync, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './menuToggle';
import { Navigation } from './navigation';

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(30px at 40px 40px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

const MenuMobile = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            className="fixed top-0 bottom-0 left-0 right-0 w-full z-[9999999] xl:hidden lg:hidden block"
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
        >
            <motion.div
                className="absolute top-0 left-0 bottom-0 w-full right-0 bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(28,27,41,0.6)] backdrop-blur-xl "
                variants={sidebar}
            />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center items-center">
                <Navigation />
            </motion.div>
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};

export default MenuMobile;
