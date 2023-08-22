import Image from 'next/image';
import Button from '@/components/button';
import Link from 'next/link';
interface Props {
    data: any;
}

function CardProject({ data }: Props) {
    return (
        <div className="hover:bg-[rgba(168,85,247,0.1)]   cursor-pointer max-w-sm p-4 text-black bg-white border border-gray-200 rounded-lg shadow ">
            <div className="h-[10rem]  bg-contain">
                <Image src={data?.imageUrl} alt={''} width={100} height={100} className="bg-contain h-full"></Image>
            </div>
            <div className="mt-4">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{data?.name}</h5>
                </a>
                <p className="h-24 text-sm text-ellipsis line-clamp-4 overflow-hidden font-normal text-gray-700 dark:text-gray-400">
                    {data?.description}
                </p>
            </div>
            <div className="flex justify-start items-center mb-2">
                <h5 className="text-black/30 font-bold text-md ">Link source:</h5>
                <Link
                    target="_blank"
                    href={data.linkSource}
                    className="text-indigo-600 italic font-mono ml-2 text-sm hover:text-primary hover:brightness-150 underline"
                >
                    {data.linkSource}
                </Link>
            </div>
            <div className="flex justify-start items-center mb-2">
                <h5 className="text-black/30 font-bold text-md ">Link video demo:</h5>
                <Link
                    target="_blank"
                    href={data.videoDemo}
                    className="text-indigo-600 italic font-mono ml-2 text-sm hover:text-primary hover:brightness-150 underline"
                >
                    {data.videoDemo}
                </Link>
            </div>
            <ul className="flex flex-wrap gap-2 sm:mt-auto mb-4">
                {data.frameWorks.map((tag: any, index: number) => (
                    <li
                        className="bg-black/[0.7] hover:bg-primary px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                        key={index}
                    >
                        #{tag}
                    </li>
                ))}
            </ul>
            <div className=" justify-start items-center gap-5 flex">
                <Button name={'Remove'} onClick={() => {}} type={'cancel'}></Button>
                <Button name={'Read more'} onClick={() => {}} type={'opacity'}></Button>
            </div>
        </div>
    );
}

export default CardProject;
