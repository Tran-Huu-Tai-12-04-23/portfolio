'use client';

import React, { useEffect, useState } from 'react';
import NewContact from './newcontact';
import Service from '@/service';
import WaitLoadApi from '../components/waitLoadApi';

interface Props {
    data: any;
    type: null | string;
}
export default function Contact({ data, type = 'default' }: Props) {
    const [dataContact, setDataContact] = useState<any>(null);
    const [waitApi, setWaitApi] = useState<boolean>(false);

    useEffect(() => {
        const getDataContact = async () => {
            setWaitApi(true);
            const result = await Service.getDataFromApi('/api/contact');
            setWaitApi(false);
            const data = result.data;
            console.log(data);
            if (data.status === 200) {
                setDataContact(JSON.parse(data.contact));
            }
        };

        getDataContact();
    }, []);

    return (
        <>
            {waitApi && <WaitLoadApi></WaitLoadApi>}
            <NewContact data={dataContact}></NewContact>
        </>
    );
}
