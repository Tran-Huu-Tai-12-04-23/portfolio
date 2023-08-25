import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ButtonUploadFile from '@/app/components/uploadImage';
import WaitLoadApi from '@/app/components/waitLoadApi';
import Button from '@/app/components/button';
import toast from 'react-hot-toast';
import FormReplyEmail from './formReplyEmail';

function EmailReceivedSetting() {
    const [reply, setReply] = useState<boolean>(false);
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
            <div className="p-4 bg-gray-100 rounded-md shadow-lg w-full">
                <h1 className="text-2xl font-bold font-mono">Email from user send for me </h1>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mb-10">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs bg-[rgba(168,85,247,0.5)] uppercase  text-primary">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    User name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    send date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Content
                                </th>
                                <th scope="col" className="px-6 py-3 text-primary ">
                                    <span className="sr-only">Action</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b hover:bg-gray-50   text-black">
                                <th scope="row" className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap ">
                                    Tran Huu tai
                                </th>
                                <td className="px-6 py-4">huutt201@gmail.com</td>
                                <td className="px-6 py-4">12/03/2003</td>
                                <td className="px-6 py-4">Hello ....</td>
                                <td className="px-6 py-4 text-right">
                                    <Button name={'Reply'} onClick={() => setReply(true)} type={'opacity'}></Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {reply && <FormReplyEmail setReply={setReply}></FormReplyEmail>}
        </motion.div>
    );
}

export default EmailReceivedSetting;
