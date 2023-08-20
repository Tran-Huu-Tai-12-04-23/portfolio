'use client';

import React from 'react';
import SectionHeading from '@/components/Section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from '@/components/Submit-btn';
import toast from 'react-hot-toast';
import NewContact from './newcontact';

export default function Contact() {
    return (
        <>
            {/* <motion.section
                className="mb-20 sm:mb-28 mt-20 w-[min(100%,38rem)] text-center"
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
            >
                <SectionHeading>Contact me</SectionHeading>

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-gray-700 -mt-6 dark:text-white/80"
                >
                    Please contact me directly at{' '}
                    <a className="underline" href="mailto:example@gmail.com">
                        example@gmail.com
                    </a>{' '}
                    or through this form.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-10 flex flex-col dark:text-black"
                    action={async (formData) => {
                        const { data, error } = await sendEmail(formData);

                        if (error) {
                            toast.error(error);
                            return;
                        }

                        toast.success('Email sent successfully!');
                    }}
                >
                    <motion.input
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.3 }}
                        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-al duration: 0.6,l dark:outline-none"
                        name="senderEmail"
                        type="email"
                        required
                        maxLength={500}
                        placeholder="Your email"
                    />
                    <motion.textarea
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-al duration: 0.6,l dark:outline-none"
                        name="message"
                        placeholder="Your message"
                        required
                        maxLength={5000}
                    />
                    <SubmitBtn />
                </motion.form>
            </motion.section> */}
            <NewContact></NewContact>
        </>
    );
}
