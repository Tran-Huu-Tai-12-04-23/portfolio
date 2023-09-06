import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ButtonUploadFile from '@/app/components/uploadImage';
import WaitLoadApi from '@/app/components/waitLoadApi';
import toast from 'react-hot-toast';
import Intro from '@/app/components/intro';
import Preview from './preview';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import Link from 'next/link';
import Service from '@/service';

function IntroSetting() {
    const [name, setName] = useState<string>('');
    const [avatar, setAvatar] = useState<any>([{}]);
    const [description, setDescription] = useState<string>('');
    const [facebook, setFacebook] = useState<string>('');
    const [youtube, setYoutube] = useState<string>('');
    const [instagram, setInstagram] = useState<string>('');
    const [github, setGithub] = useState<string>('');
    const [tiktok, setTiktok] = useState<string>('');
    const [linked, setLinked] = useState<string>('');
    const [waitSave, setWaitSave] = useState<boolean>(false);
    const [preview, setPreview] = useState<boolean>(false);
    const [cv, setCv] = useState<any>([{}]);
    const [dataIntro, setDataIntro] = useState<any>(null);

    const handleCallApi = async () => {
        const data = {
            name,
            description,
            avatar: avatar[0].fileUrl,
            facebookLink: facebook,
            youtubeLink: youtube,
            instagramLink: instagram,
            githubLink: github,
            tiktokLink: tiktok,
            linkedLink: linked,
            cv: cv[0].fileUrl,
        };

        try {
            const result = await Service.callApi('/api/intro', data);
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
        toast.promise(handleCallApi(), {
            loading: 'Saving...',
            success: <b>Init about successfully!</b>,
            error: <b>Could not save.</b>,
        });
    };

    useEffect(() => {
        const getDataIntro = async () => {
            setWaitSave(true);
            const result = await Service.getDataFromApi('/api/intro');
            setWaitSave(false);
            const data = result.data;
            if (data.status === 200) {
                setDataIntro(JSON.parse(data.data));
            }
        };

        getDataIntro();
    }, []);

    useEffect(() => {
        if (dataIntro) {
            console.log(dataIntro);
            setName(dataIntro.name);
            setAvatar(dataIntro.avatar);
            setDescription(dataIntro.description);
            setGithub(dataIntro.githubLink);
            setFacebook(dataIntro.facebookLink);
            setLinked(dataIntro.linkedLink);
            setYoutube(dataIntro.youtubeLink);
            setTiktok(dataIntro.tiktokLink);
        }
    }, [dataIntro]);
    return (
        <motion.div
            className="p-10 flex-shrink-0 relative"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
        >
            <HiOutlineComputerDesktop
                onClick={() => setPreview(true)}
                className="hover:text-primary text-3xl absolute top-16 right-16 cursor-pointer hover:scale-125 transition-"
            />
            <div className="p-4 bg-gray-100 rounded-md shadow-lg w-full">
                <h1 className="text-2xl font-bold font-mono">Edit data Intro for portfolio</h1>

                <div className="mt-10 mb-10 w-full">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            name="name"
                            id="name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Enter name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group  rounded-tl-xl rounded-tr-xl">
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={10}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  border-[1px] border-gray-300 focus:ring-primary focus:border-primary "
                            placeholder="Description ..."
                        ></textarea>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            name="facebook_link"
                            id="facebook_link"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder=" "
                            value={facebook}
                            onChange={(e) => setFacebook(e.target.value)}
                        />
                        <label
                            htmlFor="facebook_link"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Facebook link
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            name="youtubeLink"
                            id="youtubeLink"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder=" "
                            value={youtube}
                            onChange={(e) => setYoutube(e.target.value)}
                        />
                        <label
                            htmlFor="youtubeLink"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Youtube link
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            name="instagramLink"
                            id="instagramLink"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder=" "
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                        />
                        <label
                            htmlFor="instagramLink"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Instagram link
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            name="githubLink"
                            id="githubLink"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder=" "
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}
                        />
                        <label
                            htmlFor="githubLink"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Github link
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            name="linkedLink"
                            id="linkedLink"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder=" "
                            value={linked}
                            onChange={(e) => setLinked(e.target.value)}
                        />
                        <label
                            htmlFor="linkedLink"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Linked link
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            name="tiktokLink"
                            id="tiktokLink"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                            placeholder=" "
                            value={tiktok}
                            onChange={(e) => setTiktok(e.target.value)}
                        />
                        <label
                            htmlFor="tiktokLink"
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Tiktok link
                        </label>
                    </div>
                    <h5 className="font-bold text-sm text-gray-400">Add cv</h5>
                    <ButtonUploadFile
                        file={cv}
                        setFile={setCv}
                        route="allThing"
                        actionComplete={() => {}}
                    ></ButtonUploadFile>
                    {cv[0].fileUrl && (
                        <Link href={cv[0].fileUrl} target="_blank">
                            {cv[0].fileUrl}
                        </Link>
                    )}

                    <h5 className="font-bold text-sm text-gray-400">Add avatar</h5>
                    <ButtonUploadFile
                        file={avatar}
                        setFile={setAvatar}
                        route="imageUploader"
                        actionComplete={() => {}}
                    ></ButtonUploadFile>
                    <div className="w-full mt-10 flex-col items-center flex justify-center">
                        {avatar[0].fileUrl && (
                            <Image
                                src={avatar[0]?.fileUrl || ''}
                                alt={'Tran huu tai'}
                                className="rounded-md"
                                width={100}
                                height={100}
                            ></Image>
                        )}
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
            {waitSave && <WaitLoadApi />}

            <Preview preview={preview} setPreview={setPreview}>
                <Intro
                    type={'preview'}
                    data={{
                        name,
                        description,
                        avatar: avatar[0]?.fileUrl,
                        facebookLink: facebook,
                        youtubeLink: youtube,
                        instagramLink: instagram,
                        githubLink: github,
                        tiktokLink: tiktok,
                        linkedLink: linked,
                    }}
                ></Intro>
            </Preview>
        </motion.div>
    );
}

export default IntroSetting;
