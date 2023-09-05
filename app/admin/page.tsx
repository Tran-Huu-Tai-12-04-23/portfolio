'use client';
import { useState } from 'react';
import SideBar from '@/app/admin/sidebar';
import MainBoard from '@/app/admin/mainBoard';

function Admin() {
    const [activeSidebar, setActiveSidebar] = useState(true);
    const [order, setOder] = useState<number>(1);

    return (
        <div className="flex justify-start h-screen w-screen overflow-hidden  bg-white">
            <SideBar setOder={setOder} order={order} activeSidebar={activeSidebar}></SideBar>
            <MainBoard order={order} activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar}></MainBoard>
        </div>
    );
}

export default Admin;
