'use client';
import React, { useEffect, useState } from 'react';
import NewContact from './newcontact';
import Service from '@/service';
import WaitLoadApi from '../components/waitLoadApi';

interface Props {
    data: object;
    type?: string; // Make the type prop optional
}

export default function Contact() {
    const [dataContact, setDataContact] = useState<object>({});
    const [waitApi, setWaitApi] = useState<boolean>(false);

    useEffect(() => {
        const getDataContact = async () => {
            setWaitApi(true);
            try {
                const result = await Service.getDataFromApi('/api/contact');
                const data = result.data;

                if (data.status === 200) {
                    setDataContact(JSON.parse(data.contact));
                }
            } catch (error) {
                // Handle errors here
            } finally {
                setWaitApi(false);
            }
        };

        getDataContact();
    }, []);

    return (
        <>
            {waitApi && <WaitLoadApi />}
            <NewContact data={dataContact} />
        </>
    );
}
