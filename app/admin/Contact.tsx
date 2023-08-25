import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ButtonUploadFile from '@/app/components/uploadImage';
import WaitLoadApi from '@/app/components/waitLoadApi';
import toast from 'react-hot-toast';

function ContactSetting() {
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [country, setCountry] = useState<string>('');

    const handleSave = async () => {};
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
                <h1 className="text-2xl font-bold font-mono">Edit data contact setting for portfolio</h1>

                <div className="mt-10 mb-10 w-full">
                    <div className="grid-cols-2 grid gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="text"
                                name="email_id"
                                id="email_id"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email_id"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Enter email
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                type="text"
                                name="address_id"
                                id="address_id"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="address_id"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Enter address
                            </label>
                        </div>
                    </div>
                    <div className="grid-cols-2 grid gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                value={phoneNumber}
                                type="text"
                                name="phone_number_id"
                                id="phone_number_id"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="phone_number_id"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Phone number
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                onChange={(e) => setCountry(e.target.value)}
                                value={country}
                                type="text"
                                name="country_id"
                                id="country_id"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="country_id"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Enter country
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        onClick={handleSave}
                        className=" text-white bg-primary hover:brightness-105 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                        Save
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default ContactSetting;
