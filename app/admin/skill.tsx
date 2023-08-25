import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import WaitLoadApi from '@/app/components/waitLoadApi';
import toast from 'react-hot-toast';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { GrAdd, GrFormClose } from 'react-icons/gr';
import Preview from './preview';
import Skills from '../skills/page';
import Button from '@/app/components/button';
import ButtonUploadFile from '@/app/components/uploadImage';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.8 + 0.4 * index,
        },
    }),
};

function SkillSetting() {
    const [preview, setPreview] = useState<boolean>(false);
    const [waitSave, setWaitSave] = useState<boolean>(false);
    const [addBackendSkill, setAddBackendSkill] = useState<boolean>(false);
    const [nameSkillBackend, setNameSkillBackEnd] = useState<string>('');
    const [listBackEndSkill, setListBackEndSkill] = useState<Array<object>>([]);
    const [skillImage, setSkillImage] = useState<Array<any>>([{}]);
    const [addFrontEndSkill, setAddFrontEndSkill] = useState<boolean>(false);
    const [nameSkillFrontEnd, setNameSkillFrontEnd] = useState<string>('');
    const [listFrontEndSkill, setListFrontEndSkill] = useState<Array<object>>([]);
    const [addOtherSkill, setAddOtherSkill] = useState<boolean>(false);
    const [nameOtherSkill, setNameOtherSkill] = useState<string>('');
    const [listOtherSkill, setListOtherSkill] = useState<Array<object>>([]);

    const handleRemoveBackEndSkill = (indexR: number) => {
        setListBackEndSkill((prev) => {
            return prev.filter((dev, index) => index !== indexR);
        });
    };

    const handleRemoveFrontEndSkill = (indexR: number) => {
        setListFrontEndSkill((prev) => {
            return prev.filter((dev, index) => index !== indexR);
        });
    };

    const handleRemoveOtherSkill = (indexR: number) => {
        setListFrontEndSkill((prev) => {
            return prev.filter((dev, index) => index !== indexR);
        });
    };
    const handleAddBackEndSkill = () => {
        if (nameSkillBackend && skillImage.length > 0) {
            setListBackEndSkill((prev: any) => {
                return [
                    ...prev,
                    {
                        name: nameSkillBackend,
                        imageUrl: skillImage[0]?.fileUrl,
                    },
                ];
            });
            setSkillImage([]);
            setNameSkillBackEnd('');
        }
    };

    const handleAddFrontEndSkill = () => {
        if (nameSkillFrontEnd && skillImage.length > 0) {
            setListFrontEndSkill((prev: any) => {
                return [
                    ...prev,
                    {
                        name: nameSkillFrontEnd,
                        imageUrl: skillImage[0]?.fileUrl,
                    },
                ];
            });
            setSkillImage([]);
            setNameSkillFrontEnd('');
        }
    };

    const handleAddOtherSkill = () => {
        if (nameOtherSkill && skillImage.length > 0) {
            setListOtherSkill((prev: any) => {
                return [
                    ...prev,
                    {
                        name: nameOtherSkill,
                        imageUrl: skillImage[0]?.fileUrl,
                    },
                ];
            });
            setSkillImage([]);
            setNameOtherSkill('');
        }
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
            <div className="p-4 bg-gray-100 rounded-md shadow-lg w-full relative">
                <HiOutlineComputerDesktop
                    onClick={() => setPreview(true)}
                    className="hover:text-primary group text-3xl absolute top-8 right-8 cursor-pointer transition-all hover:scale-105"
                />
                <h1 className="text-2xl font-bold font-mono mb-6">Edit data skill setting for portfolio</h1>

                <div className="mb-5">
                    <h1 className="text-sm mb-2 font-bold text-md text-primary border-b-primary border-solid border-b-[1px] w-fit ">
                        Add skill backend
                    </h1>
                    {listBackEndSkill.length > 0 && (
                        <ul className="flex justify-start items-center gap-5">
                            {listBackEndSkill.map((dev: any, index) => {
                                return (
                                    <motion.li
                                        className="relative bg-gray-500 w-fit borderBlack rounded-xl px-5 py-3 hover:brightness-125 "
                                        key={index}
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true,
                                        }}
                                        custom={index}
                                    >
                                        <Image
                                            src={dev && dev.imageUrl}
                                            alt={dev.name}
                                            width={200}
                                            height={200}
                                            className="rounded-full h-40 bg-contain w-40 border-solid border-[2px] border-purple-700"
                                        ></Image>
                                        <GrFormClose
                                            onClick={() => handleRemoveBackEndSkill(index)}
                                            className="absolute top-1 right-1 hover:scale-105 mr-4 text-2xl transition-all hover:text-red-500 cursor-pointer"
                                        ></GrFormClose>
                                        <span className="capitalize">{dev.name}</span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    )}

                    {!addBackendSkill && (
                        <>
                            <div className="flex w-fit" onClick={() => setAddBackendSkill(!addBackendSkill)}>
                                <GrAdd className="text-2xl hover:bg-[rgb(168,85,247,0.2)] rounded-lg hover:rotate-180 transition-all cursor-pointer duration-1000 hover:text-primary"></GrAdd>
                            </div>
                        </>
                    )}

                    {addBackendSkill && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                        >
                            <input
                                onChange={(e) => setNameSkillBackEnd(e.target.value)}
                                value={nameSkillBackend}
                                type="text"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder="Enter name nameSkillBackend..."
                            />
                            <div className="mt-4">
                                <h1 className="text-sm font-bold mb-2">Add img description skill</h1>
                                <ButtonUploadFile
                                    file={skillImage}
                                    setFile={setSkillImage}
                                    route="imageUploader"
                                    actionComplete={() => {}}
                                ></ButtonUploadFile>
                                <div className="w-full mt-4 mb-2 flex-col items-start flex justify-start">
                                    {skillImage[0] && skillImage[0]?.fileUrl && (
                                        <Image
                                            src={skillImage[0]?.fileUrl}
                                            alt={''}
                                            className="rounded-lg"
                                            width={200}
                                            height={200}
                                        ></Image>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-start mt-3 gap-5 items-center">
                                <Button
                                    name={'Cancel'}
                                    onClick={() => {
                                        setNameSkillBackEnd('');
                                        setAddBackendSkill(!addBackendSkill);
                                    }}
                                    type={'cancel'}
                                ></Button>
                                <Button name={'Add'} onClick={handleAddBackEndSkill} type={'opacity'}></Button>
                            </div>
                        </motion.div>
                    )}
                </div>
                <div className="mb-5">
                    <h1 className="text-sm mb-2 font-bold text-md text-primary border-b-primary border-solid border-b-[1px] w-fit ">
                        Add skill front end
                    </h1>
                    {listFrontEndSkill.length > 0 && (
                        <ul className="flex justify-start items-center gap-5">
                            {listFrontEndSkill.map((dev: any, index) => {
                                return (
                                    <motion.li
                                        className="relative bg-gray-500 w-fit borderBlack rounded-xl px-5 py-3 hover:brightness-125 "
                                        key={index}
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true,
                                        }}
                                        custom={index}
                                    >
                                        <Image
                                            src={dev && dev.imageUrl}
                                            alt={dev.name}
                                            width={200}
                                            height={200}
                                            className="rounded-full h-40 bg-contain w-40 border-solid border-[2px] border-purple-700"
                                        ></Image>
                                        <GrFormClose
                                            onClick={() => handleRemoveBackEndSkill(index)}
                                            className="absolute top-1 right-1 hover:scale-105 mr-4 text-2xl transition-all hover:text-red-500 cursor-pointer"
                                        ></GrFormClose>
                                        <span className="capitalize">{dev.name}</span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    )}
                    {listFrontEndSkill.length > 0 && (
                        <ul className="flex justify-start items-center gap-5">
                            {listFrontEndSkill.map((dev: any, index) => {
                                return (
                                    <motion.li
                                        className="relative bg-gray-500 w-fit borderBlack rounded-xl px-5 py-3 hover:brightness-125 "
                                        key={index}
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true,
                                        }}
                                        custom={index}
                                    >
                                        <Image
                                            src={dev && dev.imageUrl}
                                            alt={dev.name}
                                            width={200}
                                            height={200}
                                            className="rounded-full h-40 bg-contain w-40 border-solid border-[2px] border-purple-700"
                                        ></Image>
                                        <GrFormClose
                                            onClick={() => handleRemoveFrontEndSkill(index)}
                                            className="absolute top-2 right-2 hover:scale-105 mr-4 text-2xl transition-all hover:text-red-500 cursor-pointer"
                                        ></GrFormClose>
                                        <span className="capitalize">{dev.name}</span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    )}
                    {!addFrontEndSkill && (
                        <>
                            <div className="flex w-fit" onClick={() => setAddFrontEndSkill(!addFrontEndSkill)}>
                                <GrAdd className="text-2xl hover:bg-[rgb(168,85,247,0.2)] rounded-lg hover:rotate-180 transition-all cursor-pointer duration-1000 hover:text-primary"></GrAdd>
                            </div>
                        </>
                    )}

                    {addFrontEndSkill && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                        >
                            <input
                                onChange={(e) => setNameSkillBackEnd(e.target.value)}
                                value={nameSkillBackend}
                                type="text"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder="Enter name nameSkillBackend..."
                            />
                            <div className="mt-4">
                                <h1 className="text-sm font-bold mb-2">Add img description skill</h1>
                                <ButtonUploadFile
                                    file={skillImage}
                                    setFile={setSkillImage}
                                    route="imageUploader"
                                    actionComplete={() => {}}
                                ></ButtonUploadFile>
                                <div className="w-full mt-4 mb-2 flex-col items-start flex justify-start">
                                    {skillImage[0] && skillImage[0]?.fileUr && (
                                        <Image
                                            src={skillImage[0]?.fileUrl}
                                            alt={''}
                                            className="rounded-lg"
                                            width={200}
                                            height={200}
                                        ></Image>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-start mt-3 gap-5 items-center">
                                <Button
                                    name={'Cancel'}
                                    onClick={() => {
                                        setNameSkillFrontEnd('');
                                        setAddFrontEndSkill(!addFrontEndSkill);
                                    }}
                                    type={'cancel'}
                                ></Button>
                                <Button name={'Add'} onClick={handleAddFrontEndSkill} type={'opacity'}></Button>
                            </div>
                        </motion.div>
                    )}
                </div>

                <div className="mb-5">
                    <h1 className="text-sm mb-2 font-bold text-md text-primary border-b-primary border-solid border-b-[1px] w-fit ">
                        Add other skill
                    </h1>
                    {listOtherSkill.length > 0 && (
                        <ul className="flex justify-start items-center gap-5">
                            {listOtherSkill.map((dev: any, index) => {
                                return (
                                    <motion.li
                                        className="relative bg-gray-500 w-fit borderBlack rounded-xl px-5 py-3 hover:brightness-125 "
                                        key={index}
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true,
                                        }}
                                        custom={index}
                                    >
                                        <Image
                                            src={dev && dev.imageUrl}
                                            alt={dev.name}
                                            width={200}
                                            height={200}
                                            className="rounded-full h-40 bg-contain w-40 border-solid border-[2px] border-purple-700"
                                        ></Image>
                                        <GrFormClose
                                            onClick={() => handleRemoveOtherSkill(index)}
                                            className="absolute top-1 right-1 hover:scale-105 mr-4 text-2xl transition-all hover:text-red-500 cursor-pointer"
                                        ></GrFormClose>
                                        <span className="capitalize">{dev.name}</span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    )}
                    {listOtherSkill.length > 0 && (
                        <ul className="flex justify-start items-center gap-5">
                            {listOtherSkill.map((dev: any, index) => {
                                return (
                                    <motion.li
                                        className="relative bg-gray-500 w-fit borderBlack rounded-xl px-5 py-3 hover:brightness-125 "
                                        key={index}
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true,
                                        }}
                                        custom={index}
                                    >
                                        <Image
                                            src={dev && dev.imageUrl}
                                            alt={dev.name}
                                            width={200}
                                            height={200}
                                            className="rounded-full h-40 bg-contain w-40 border-solid border-[2px] border-purple-700"
                                        ></Image>
                                        <GrFormClose
                                            onClick={() => handleRemoveOtherSkill(index)}
                                            className="absolute top-2 right-2 hover:scale-105 mr-4 text-2xl transition-all hover:text-red-500 cursor-pointer"
                                        ></GrFormClose>
                                        <span className="capitalize">{dev.name}</span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    )}
                    {!addOtherSkill && (
                        <>
                            <div className="flex w-fit" onClick={() => setAddOtherSkill(!addOtherSkill)}>
                                <GrAdd className="text-2xl hover:bg-[rgb(168,85,247,0.2)] rounded-lg hover:rotate-180 transition-all cursor-pointer duration-1000 hover:text-primary"></GrAdd>
                            </div>
                        </>
                    )}

                    {addOtherSkill && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                        >
                            <input
                                onChange={(e) => setNameOtherSkill(e.target.value)}
                                value={nameOtherSkill}
                                type="text"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder="Enter name name other skill..."
                            />
                            <div className="mt-4">
                                <h1 className="text-sm font-bold mb-2">Add img description skill</h1>
                                <ButtonUploadFile
                                    file={skillImage}
                                    setFile={setSkillImage}
                                    route="imageUploader"
                                    actionComplete={() => {}}
                                ></ButtonUploadFile>
                                <div className="w-full mt-4 mb-2 flex-col items-start flex justify-start">
                                    {skillImage[0] && skillImage[0]?.fileUr && (
                                        <Image
                                            src={skillImage[0]?.fileUrl}
                                            alt={''}
                                            className="rounded-lg"
                                            width={200}
                                            height={200}
                                        ></Image>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-start mt-3 gap-5 items-center">
                                <Button
                                    name={'Cancel'}
                                    onClick={() => {
                                        setNameOtherSkill('');
                                        setAddOtherSkill(!addOtherSkill);
                                    }}
                                    type={'cancel'}
                                ></Button>
                                <Button name={'Add'} onClick={handleAddOtherSkill} type={'opacity'}></Button>
                            </div>
                        </motion.div>
                    )}
                </div>

                {waitSave && <WaitLoadApi />}

                <Preview preview={preview} setPreview={setPreview}>
                    <Skills></Skills>
                </Preview>
            </div>
        </motion.div>
    );
}

export default SkillSetting;
