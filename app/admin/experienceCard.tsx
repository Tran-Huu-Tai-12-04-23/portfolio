import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import ModalConfirmRemove from '../components/modalConfirmRemove';
import Service from '@/service';
import toast from 'react-hot-toast';

interface Props {
    data: any;
    setListExperiences: React.Dispatch<any>;
}
function ExperienceCard({ data, setListExperiences }: Props) {
    const [confirmRemove, setConfirmRemove] = useState<boolean>(false);

    const handleCallApi = async () => {
        try {
            const result = await Service.delete('/api/experience', `/?id=${data._id}`);
            const res = result.data;
            if (res.status === 200) {
                setListExperiences((prev: any) => {
                    return prev.filter((item: any) => item._id !== data._id);
                });
                return Promise.resolve(true);
            } else {
                return Promise.reject(false);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    };
    const handleRemoveExperience = async () => {
        toast.promise(handleCallApi(), {
            loading: 'Remove...',
            success: <b>Remove project successfully!</b>,
            error: <b>Could not remove.</b>,
        });
        setConfirmRemove(false);
    };

    return (
        <motion.div
            className="bg-[rgba(0,0,0,0.1)] relative p-10 rounded-md cursor-pointer hover:bg-[rgba(0,0,0,0.2)] group"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.6,
            }}
        >
            <AiOutlineClose
                onClick={() => {
                    setConfirmRemove(true);
                }}
                className="absolute hidden group-hover:block top-2 right-2 text-2xl duration-1000 hover:text-primary cursor-pointer hover:rotate-180 transition-all"
            />
            <h5 className="font-bold text-primary mb-4">{data?.title}</h5>
            <p className="font-semibold text-gray-700 text-sm">{data?.description}</p>
            <h5 className="font-semibold text-primary text-sm mt-5">#{data?.location}</h5>
            <h5 className="font-semibold text-primary text-sm mt-2">#{data?.time}</h5>

            {confirmRemove && (
                <ModalConfirmRemove
                    cancelAction={() => {
                        setConfirmRemove(false);
                    }}
                    confirmAction={handleRemoveExperience}
                ></ModalConfirmRemove>
            )}
        </motion.div>
    );
}

export default ExperienceCard;
