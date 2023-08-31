import { motion } from 'framer-motion';

interface Props {
    cancelAction: () => void;
    confirmAction: () => void;
}
function ModalConfirmRemove({ cancelAction, confirmAction }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.6,
            }}
            className="h-full overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
        >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow ">
                    <div className="flex justify-end p-2">
                        <button
                            onClick={cancelAction}
                            type="button"
                            className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 pt-0 text-center">
                        <svg
                            className="mx-auto mb-4 w-14 h-14 text-gray-500 "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 ">Are you sure you want to delete it?</h3>
                        <button
                            type="button"
                            onClick={confirmAction}
                            className="text-white bg-gradient-to-br from-[rgba(248,113,113,0.8)] to-[rgb(220,38,38,0.8)] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                        >
                            Yes, I'm sure
                        </button>
                        <button
                            type="button"
                            onClick={cancelAction}
                            className="text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
                        >
                            No, cancel
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ModalConfirmRemove;
