'use client';
import '@uploadthing/react/styles.css';
import { UploadDropzone } from '@uploadthing/react';

import toast from 'react-hot-toast';
import { OurFileRouter } from '@/app/api/uploadthing/core';

interface Props {
    setFile: React.Dispatch<any>;
    file: any;
    route: 'allThing' | 'imageUploader' | 'mediaPost';
    actionComplete: () => void;
}

export default function ButtonUploadFile({ setFile, file, route = 'allThing', actionComplete = () => {} }: Props) {
    return (
        <div>
            <UploadDropzone<OurFileRouter>
                endpoint={route}
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    // console.log('Files: ', res);
                    if (res) {
                        setFile(res);
                    }
                    actionComplete();
                }}
                onUploadError={(error: Error) => {
                    toast.error(error.message);
                }}
            />

            {/* {file &&
                file.map((fi: any, index: number) => {
                    return (
                        <a key={index} className="underline text-primary text-md" href={fi?.fileUrl} target="_blank">
                            {fi?.fileKey}
                        </a>
                    );
                })} */}
        </div>
    );
}
