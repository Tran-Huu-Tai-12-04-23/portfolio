import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Service from '@/service';
// import Preview from './preview';
// import Contact from '../contact/page';
// import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import WaitLoadApi from '../components/waitLoadApi';

function ContactSetting() {
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [preview, setPreview] = useState<boolean>(false);
    const [contact, setContact] = useState<any>({});
    const [waitSave, setWaitSave] = useState<boolean>(false);

    useEffect(() => {
        const getContact = async () => {
            setWaitSave(true);
            const result = await Service.getDataFromApi('/api/contact');
            const data = result.data;
            setWaitSave(false);
            if (data.contact) {
                setContact(JSON.parse(data.contact)[0]);
            }
        };

        getContact();
    }, []);

    useEffect(() => {
        setEmail(contact?.email);
        setPhoneNumber(contact?.phoneNumber);
        setAddress(contact?.address);
        setCountry(contact?.country);
    }, [contact]);
    const checkDataEmpty = () => {
        if (!email) {
            return 'Please enter your email!';
        } else if (!phoneNumber) {
            return 'Please enter a phoneNumber!';
        } else if (!address) {
            return 'Please select a address!';
        } else if (!country) {
            return 'Please select a country!';
        }
        return true;
    };
    const handleCallApi = async () => {
        const data = {
            email,
            phoneNumber,
            address,
            country,
        };

        try {
            const result = await Service.callApi('/api/contact', data);
            const res = result.data;

            if (res.status === 200) {
                return Promise.resolve(true);
            } else {
                return Promise.reject(false);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const handleSave = async () => {
        const checkEmpty = checkDataEmpty();
        if (checkEmpty !== true) {
            toast(checkEmpty, {
                icon: '⚠️',
            });
        }

        toast.promise(handleCallApi(), {
            loading: 'Saving...',
            success: <b>Save contact data successfully!</b>,
            error: <b>Could not save.</b>,
        });
    };
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
            {waitSave && <WaitLoadApi />}

            {/* <div className="relative p-4 bg-gray-100 rounded-md shadow-lg w-full">
                <HiOutlineComputerDesktop
                    onClick={() => setPreview(true)}
                    className="hover:text-primary group text-3xl absolute top-6 right-6 cursor-pointer transition-all hover:scale-105"
                />
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
                <Preview preview={preview} setPreview={setPreview}>
                    <Contact></Contact>
                </Preview>
            </div> */}
        </motion.div>
    );
}

export default ContactSetting;
