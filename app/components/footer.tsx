'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 0.8,
            }}
            className="pb-10 mt-6 mb-20 px-4 text-center text-gray-500"
        >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <small className="mb-2 block text-xs">
                    &copy; 2023 Huu Tai edit, clone - source :{' '}
                    <a
                        target="_blank"
                        href="https://github.com/ByteGrad/portfolio-website"
                        className="text-blue-500 font-bold italic"
                    >
                        https://github.com/ByteGrad/portfolio-website
                    </a>
                    . All rights reserved.
                </small>
                <p className="text-xs">
                    <span className="font-semibold">About this website:</span> built with React & Next.js (App Router &
                    Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
                </p>
            </motion.div>
        </motion.footer>
    );
}
