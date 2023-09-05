import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ButtonUploadFile from '@/app/components/uploadImage';
import WaitLoadApi from '@/app/components/waitLoadApi';
import Button from '@/app/components/button';
import toast from 'react-hot-toast';
import FormReplyEmail from './formReplyEmail';
import Service from '@/service';

function EmailReceivedSetting() {
    const [reply, setReply] = useState<boolean>(false);
    const [waitCallApi, setWaitCallApi] = useState<boolean>(false);
    const [emailReceived, setEmailReceived] = useState<Array<object>>([]);

    useEffect(() => {
        const getEmailReceived = async () => {
            setWaitCallApi(true);
            const result = await Service.getDataFromApi('/api/email-received');
            setWaitCallApi(false);
            const data = result.data;
            if (data.status === 200) {
                setEmailReceived(JSON.parse(data.data));
            }
        };
        getEmailReceived();
    }, []);
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
            {waitCallApi && <WaitLoadApi></WaitLoadApi>}
            <div className="p-4 bg-gray-100 rounded-md shadow-lg w-full">
                <h1 className="text-2xl font-bold font-mono">Email from user send for me </h1>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mb-10">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs bg-[rgba(168,85,247,0.5)] uppercase  text-primary">
                            <tr>
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
                            {emailReceived &&
                                emailReceived.map((email: any, index: number) => {
                                    return (
                                        <tr key={index} className="bg-white border-b hover:bg-gray-50   text-black">
                                            <td className="px-6 py-4">{email.from}</td>
                                            <td className="px-6 py-4">{email.sendDate}</td>
                                            <td className="px-6 py-4">{email.message}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>

            {reply && <FormReplyEmail setReply={setReply}></FormReplyEmail>}
        </motion.div>
    );
}

export default EmailReceivedSetting;
