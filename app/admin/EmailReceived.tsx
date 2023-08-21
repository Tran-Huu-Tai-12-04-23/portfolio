import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ButtonUploadFile from '@/components/uploadImage';
import WaitLoadApi from '@/components/waitLoadApi';
import toast from 'react-hot-toast';

function EmailReceived() {
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
            <div className="p-4 bg-gray-100 rounded-md shadow-lg w-full">EmailReceived</div>
        </motion.div>
    );
}

export default EmailReceived;
