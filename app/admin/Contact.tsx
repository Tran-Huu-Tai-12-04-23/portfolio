import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ButtonUploadFile from '@/components/UploadImage';
import WaitLoadApi from '@/components/WaitLoadApi';
import toast from 'react-hot-toast';

function Contact() {
    return (
        <motion.div
            className="p-10 flex-shrink-0 "
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
        >
            <div className="p-4 bg-gray-100 rounded-md shadow-lg w-full">Contact</div>
        </motion.div>
    );
}

export default Contact;
