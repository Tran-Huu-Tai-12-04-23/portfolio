import { EDUCATIONS, EXPERIENCE, skills } from "@/app/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoCalendarClear, IoLocationSharp } from "react-icons/io5";
import { MdOutlineWork, MdSchool } from "react-icons/md";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Resume() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full h-full max-h-[75vh] p-4 overflow-y-scroll overflow-x-hidden"
    >
      <div className="flex gap-2 items-center">
        <motion.h1
          variants={item}
          className=" top-0 text-main font-semibold text-3xl"
        >
          RESUME
        </motion.h1>
        <motion.div
          variants={item}
          className="w-[50%] bg-gradient-to-r h-[2px] from-btn to-btn2"
        />
      </div>
      <motion.div variants={item} className="flex gap-2 mt-2 items-center">
        <MdSchool className="text-3xl text-btn" />
        <span className="ml-2 text-2xl font-semibold text-main">Education</span>
      </motion.div>

      {EDUCATIONS.map((education, index) => (
        <motion.div
          variants={item}
          key={index}
          className="p-4 bg-primary rounded-xl mt-2 flex flex-col gap-2 justify-start item-start"
        >
          <div className="full justify-between flex items-center">
            <h1 className="text-main font-semibold text-xl">
              {education.title}
            </h1>
            <p className="text-btn font-semibold text-center">
              {education.duration}
            </p>
          </div>
          <p className="text-secondary ">{education.description}</p>
          <div className="flex gap-2 items-center">
            <IoLocationSharp className="text-2xl text-btn" />
            <p className="text-btn ">
              {education.schoolName}-{education.address}
            </p>
          </div>
        </motion.div>
      ))}

      <motion.div variants={item} className="flex gap-2 items-center mt-5">
        <MdOutlineWork className="text-3xl text-btn" />
        <span className="ml-2 text-2xl font-semibold text-main">
          Work experience
        </span>
      </motion.div>

      <motion.div className="flex flex-col gap-4 mt-2">
        {EXPERIENCE.map((data, index) => (
          <motion.div
            variants={item}
            key={index}
            className="p-4 rounded-xl bg-primary flex flex-col  gap-2"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-main font-semibold text-xl">{data.title}</h1>
              <div className="flex gap-2">
                <Image
                  src="https://apetechs.com/wp-content/uploads/2024/08/logo.png"
                  width={50}
                  height={50}
                  alt={data.companyName}
                />
                <h1 className="text-btn font-bold ">{data.companyName}</h1>
              </div>
              <div className="flex justify-end gap-2 items-center">
                <IoCalendarClear className="text-btn text-2xl" />
                <p className="text-btn font-semibold text-center">
                  {data.duration}
                </p>
              </div>
            </div>
            <ul className="flex flex-col list-disc ml-4">
              {data.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-lg text-secondary">
                  {responsibility}
                </li>
              ))}
            </ul>
            <p className="text-btn font-bold text-xl">{data.achievements}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={item}
        className="grid grid-cols-2 gap-10 items-center mt-5"
      >
        <div>
          <motion.h1 className="text-main font-semibold text-2xl">
            Work skills
          </motion.h1>
          <motion.div
            variants={item}
            className="w-[50%] bg-gradient-to-r h-[2px] from-btn to-btn2"
          />
          <ul className="flex flex-row flex-wrap gap-2 mt-2">
            {skills.work.map((skill, index) => (
              <button
                key={index}
                className="h-[2.5rem] bg-primary p-2 rounded-xl text-secondary"
              >
                {skill}
              </button>
            ))}
          </ul>
        </div>
        <div>
          <motion.h1 className="text-main font-semibold text-2xl">
            Soft skills
          </motion.h1>
          <motion.div
            variants={item}
            className="w-[50%] bg-gradient-to-r h-[2px] from-btn to-btn2"
          />
          <ul className="flex flex-row flex-wrap gap-2 mt-2">
            {skills.softSkill.map((skill, index) => (
              <button
                key={index}
                className="h-[2.5rem] bg-primary p-2 rounded-xl text-secondary"
              >
                {skill}
              </button>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Resume;
