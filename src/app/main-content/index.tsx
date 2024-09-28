"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IProject, projectsData } from "../data";
import Contact from "../screens/contact";
import Home from "../screens/home";
import Project, { ProjectView } from "../screens/project";
import Resume from "../screens/resume";
import Nav, { NavItem } from "./nav";
import SlideImg from "./slide-img";

function MainContent() {
  const [page, setPage] = useState<NavItem>(NavItem.Home);
  const [selectedId, setSelectedId] = useState<any>(null);
  const [projectFullVIew, setProjectFullView] = useState<boolean>(false);

  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    if (selectedId) {
      const project = projectsData.find((project) => project.id === selectedId);
      if (project) setProject(project);
    }
  }, [selectedId]);
  return (
    <>
      <div
        className={`h-full  w-full flex flex-col gap-4`}
        onClick={() => setSelectedId(null)}
      >
        <div className="flex justify-end w-full">
          <Nav onChangePage={(page) => setPage(page)} activePage={page} />
        </div>

        <div className="w-full h-[85%] bg-foreground rounded-xl">
          {page === NavItem.Home && <Home />}
          {page === NavItem.Resume && <Resume />}
          {page === NavItem.Contact && <Contact />}
          {page === NavItem.Project && (
            <Project
              onProjectFullView={() => setProjectFullView(!projectFullVIew)}
              onChangeSelectItem={(id) => {
                setSelectedId(id);
              }}
            />
          )}
        </div>
      </div>
      <AnimatePresence>
        {projectFullVIew && (
          <motion.div
            className="fixed top-0 bottom-0 right-0 left-0 p-4 bg-[rgba(0,0,0,0.1)] backdrop-blur-3xl"
            layoutId={"PROJECT_FULL_VIEW"}
          >
            <motion.div
              className="btn_active w-fit absolute top-2 right-2"
              onClick={() => setProjectFullView(!projectFullVIew)}
            >
              <IoMdClose />
            </motion.div>
            <ProjectView
              isFull
              onChangeSelectItem={(id) => setSelectedId(id)}
            />
          </motion.div>
        )}
        {selectedId && project && (
          <motion.div
            className="fixed overflow-y-auto h-[80vh] right-20 left-20 rounded-xl p-4 bg-[rgba(0,0,0,0.1)] backdrop-blur-3xl"
            layoutId={selectedId}
          >
            <motion.div
              className="btn_active w-fit absolute top-2 right-2"
              onClick={() => {
                setSelectedId(null);
              }}
            >
              <IoMdClose />
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-10">
              <motion.div className="flex flex-col gap-2">
                <motion.h5 className="font-semibold text-3xl text-btn">
                  {project.name}
                </motion.h5>
                <motion.div className="w-[50%] bg-gradient-to-r h-[2px] from-btn to-btn2" />
                <motion.div className=" w-full ">
                  <SlideImg imgs={project.lstImg} />
                </motion.div>
              </motion.div>
              <motion.div className="flex flex-col gap-2">
                <motion.h5 className="font-semibold text-3xl text-btn">
                  Details
                </motion.h5>
                <motion.div className="w-[50%] bg-gradient-to-r h-[2px] from-btn to-btn2" />
                <div className="flex gap-2 items-start flex-wrap">
                  <motion.h5 className="font-semibold w-fit text-main">
                    Description :{" "}
                  </motion.h5>
                  <motion.p className="text-main">
                    {project.description}
                  </motion.p>
                </div>
                <div className="flex gap-2 mt-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-t from-btn to-btn2 text-white p-1 rounded-md text-xs"
                    >
                      # {tech}
                    </span>
                  ))}
                </div>
                {project.linkDemo && (
                  <div className="flex gap-2 items-center">
                    <motion.h5 className="font-semibold text-xl text-main ">
                      Demo :{" "}
                    </motion.h5>
                    <motion.a
                      href={project.linkDemo}
                      target="_blank"
                      className="text-btn hover:text-btn2 font-semibold underline"
                    >
                      {project.linkDemo}
                    </motion.a>
                  </div>
                )}
                {project.linkGitBackend && (
                  <div className="flex gap-2 items-center">
                    <motion.h5 className="font-semibold text-xl text-main">
                      Source code backend :{" "}
                    </motion.h5>
                    <motion.a
                      href={project.linkGitBackend}
                      target="_blank"
                      className="text-btn hover:text-btn2 font-semibold underline"
                    >
                      Click here
                    </motion.a>
                  </div>
                )}
                {project.linkGitFrontend && (
                  <div className="flex gap-2 items-center  w-full ">
                    <motion.h5 className="font-semibold text-xl text-main">
                      Source code front end :{" "}
                    </motion.h5>
                    <motion.a
                      href={project.linkGitFrontend}
                      className="hover:text-btn2 font-semibold text-btn overflow-hidden underline"
                    >
                      Click here
                    </motion.a>
                  </div>
                )}
                <video className="w-full max-h-[16.5rem] rounded-lg" controls>
                  <source src={project.videoDemo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainContent;
