"use client";
import { projectsData, TypeOfProject } from "@/app/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GoScreenFull } from "react-icons/go";

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

const typesProject = [
  {
    name: "All",
    key: TypeOfProject.All,
  },
  {
    name: "Web Development",
    key: TypeOfProject.Web,
  },
  {
    name: "Mobile Development",
    key: TypeOfProject.Mobile,
  },
  {
    name: "UI/UX Design",
    key: TypeOfProject.UI,
  },
  {
    name: "API Development",
    key: TypeOfProject.API,
  },
];
function Project({
  onChangeSelectItem,
  onProjectFullView,
}: {
  onChangeSelectItem: (id: string) => void;
  onProjectFullView: () => void;
}) {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full relative h-full p-4"
        layoutId="PROJECT_FULL_VIEW"
      >
        <motion.div
          onClick={() => onProjectFullView()}
          className="absolute z-[100000] btn_active right-10 top-10"
        >
          <GoScreenFull className="text-btn text-3xl" />
        </motion.div>
        <div className="flex gap-2 items-center">
          <motion.h1
            variants={item}
            className="text-main font-semibold text-3xl"
          >
            PROJECT RECENT
          </motion.h1>
          <motion.div
            variants={item}
            className="w-[50%] bg-gradient-to-r h-[2px] from-btn to-btn2"
          />
        </div>

        <ProjectView onChangeSelectItem={onChangeSelectItem} />
      </motion.div>
    </>
  );
}

export const ProjectView = ({
  onChangeSelectItem,
  isFull = false,
}: {
  onChangeSelectItem: (id: string) => void;
  isFull?: boolean;
}) => {
  const [type, setType] = useState<string>("all");

  const [lstProject, setLstProject] = useState(projectsData);

  useEffect(() => {
    if (type === TypeOfProject.All) {
      setLstProject(projectsData);
    } else {
      setLstProject(
        projectsData.filter((data) => {
          return data.type === type;
        })
      );
    }
  }, [type]);

  return (
    <motion.div className="">
      <motion.div variants={item} className="flex gap-4 mt-4">
        {typesProject.map((data) => (
          <motion.button
            onClick={() => setType(data.key)}
            variants={item}
            key={data.key}
            className={`${
              data.key === type ? "text-btn font-semibold" : "text-main"
            } p-2 rounded-md min-h-[3rem]`}
          >
            {data.name}
            {data.key === type && (
              <motion.div
                variants={item}
                className="w-[100%] bg-gradient-to-r h-[2px] from-btn to-btn2"
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        variants={item}
        className={`flex ${
          isFull ? "h-full" : "h-[60vh]"
        } flex-wrap overflow-x-hidden overflow-y-scroll w-full cards gap-10 p-4 mt-4`}
      >
        {lstProject.map((data, index) => {
          return (
            <motion.div
              layoutId={data.id.toString()}
              onClick={(e) => {
                e.stopPropagation();
                onChangeSelectItem(data.id.toString());
              }}
              key={index}
              variants={item}
              className="bg-white rounded-md p-4 card w-[28%] "
              whileHover={{ scale: 1.06 }}
            >
              <img
                src={data.img}
                alt={data.name}
                className="w-full h-[200px] object-cover rounded-md"
              />
              <h1 className="text-main font-semibold text-xl mt-2 overflow-hidden w-full truncate">
                {data.name}
              </h1>
              <p className="text-main text-sm mt-2 truncate max-w-[15rem]">
                {data.description}
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {data.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-main text-white p-1 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Project;
