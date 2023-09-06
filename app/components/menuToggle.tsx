import * as React from 'react';
import { SVGMotionProps, motion } from 'framer-motion';

const Path = (
    props: React.JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>,
) => <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />;

interface Props {
    toggle: () => void;
}
export const MenuToggle = ({ toggle }: Props) => (
    <button
        onClick={toggle}
        className="outline-none border-none select-none cursor-pointer absolute top-[1.7rem] text-primary left-[1.8rem] w-[2rem] h-[2rem]"
    >
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' },
                }}
            />
        </svg>
    </button>
);
