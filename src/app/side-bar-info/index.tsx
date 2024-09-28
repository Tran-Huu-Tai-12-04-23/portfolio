"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Avatar from "../../public/assets/imgs/avatar.png";
import BtnDownloadCV from "./btn-download-cv";
import { Info, SocialLinking } from "./data";

function SideBarInfo() {
  return (
    <div
      className={`h-full w-[38rem] relative items-center flex flex-col gap-2`}
    >
      <div className="rounded-xl absolute top-0 bg-[#D9D9D9] w-fit">
        <Image src={Avatar} width={220} height={220} alt="Huu tai" />
      </div>

      <div className="h-[80%] flex flex-col items-center mt-[9rem] rounded-xl bg-foreground w-full">
        <h1 className="mt-[5rem] font-semibold text-3xl text-main">
          Tran Huu Tai
        </h1>
        <h1 className="text-secondary font-bold">Mobile / API develop</h1>

        <div className="flex items-center flex-wrap gap-4 mt-5 justify-center">
          {SocialLinking.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-secondary btn_active w-1/5 flex items-center flex-col gap-2 p-4 rounded-xl bg-secondary"
            >
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </motion.button>
          ))}
        </div>

        <div className="p-4 w-[90%] mt-5 gap-4 rounded-xl bg-secondary">
          {Info.map((item, index) => (
            <div
              key={index}
              className={`flex items-center w-full mt-2 border-b-[1px] pb-4 border-[${
                index < Info.length - 1 ? "rgba(0,0,0,0.1)]" : "transparent"
              } `}
            >
              <div className="flex items-center gap-2 mr-2">
                <div className="mr-2">{item.icon}</div>
              </div>
              <div>
                <h1 className="text-secondary">{item.title}</h1>
                <h1 className="text-main font-bold w-full">{item.content}</h1>
              </div>
            </div>
          ))}
        </div>

        <BtnDownloadCV />
      </div>
    </div>
  );
}

export default SideBarInfo;
