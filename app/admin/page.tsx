'use client';
import { useState } from 'react';
import SideBar from '@/app/admin/sidebar';
import MainBoard from '@/app/admin/mainBoard';
import toast from 'react-hot-toast';

function Admin() {
    const [activeSidebar, setActiveSidebar] = useState(true);
    const [order, setOder] = useState<number>(1);
    const [checkAuthentication, setCheckAuthentication] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');

    const handleCheckPassword = () => {
        if (password.trim() === '1204huutt201@gmail.com') {
            setCheckAuthentication(true);
        } else {
            toast.error('Password incorrect!');
        }
    };

    return (
        <div className="flex justify-start h-screen w-screen overflow-hidden bg-white">
            {checkAuthentication && (
                <>
                    <SideBar setOder={setOder} order={order} activeSidebar={activeSidebar}></SideBar>
                    <MainBoard
                        order={order}
                        activeSidebar={activeSidebar}
                        setActiveSidebar={setActiveSidebar}
                    ></MainBoard>
                </>
            )}
            {!checkAuthentication && (
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm flex justify-center items-center">
                    <div className="min-w-[25rem] min-h-[15rem] w-1/2 h-3/4">
                        <h1 className="text-2xl font-bold font-mono">Enter password to asset-admin</h1>

                        <div className="relative z-0 w-full mb-6 group mt-5">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                name="email_id"
                                id="email_id"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-/00 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email_id"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Enter password
                            </label>
                        </div>
                        <button
                            onClick={handleCheckPassword}
                            className=" text-white bg-primary hover:brightness-105 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Admin;
