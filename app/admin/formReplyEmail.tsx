import { motion } from 'framer-motion';
import Button from '@/app/components/button';
import { IoIosClose } from 'react-icons/io';

interface Props {
    setReply: React.Dispatch<boolean>;
}
function FormReplyEmail({ setReply }: Props) {
    return (
        <motion.div
            className="fixed top-0 right-0 bottom-0  z-50 flex justify-center items-center left-0 backdrop-blur-md bg-[rgba(0,0,0,0.1)]"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.4,
            }}
        >
            <section className="bg-white relative dark:bg-gray-900 xl:min-w-[40rem] w-[40%] rounded-xl">
                <IoIosClose
                    onClick={() => {
                        setReply(false);
                    }}
                    className="absolute top-2 text-white right-2 text-4xl duration-1000 hover:text-primary cursor-pointer hover:rotate-180 transition-all"
                />
                <div className="  mx-auto max-w-screen-md p-4">
                    <h1 className="text-2xl font-bold font-mono text-white mb-10">Reply email</h1>

                    <div className="space-y-8">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                        <Button
                            name={'Send message'}
                            onClick={function (): void {
                                throw new Error('Function not implemented.');
                            }}
                            type={'opacity'}
                        ></Button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default FormReplyEmail;
