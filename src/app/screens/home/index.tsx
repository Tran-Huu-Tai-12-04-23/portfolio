import { Services } from "@/app/data";
import { motion } from "framer-motion";

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

function Home() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full h-full p-4"
    >
      <div className="flex gap-2 items-center">
        <motion.h1 variants={item} className="text-main font-semibold text-3xl">
          ABOUT ME
        </motion.h1>
        <motion.div
          variants={item}
          className="w-[50%] bg-gradient-to-r h-[2px] from-btn to-btn2"
        />
      </div>
      <motion.p variants={item} className="text-secondary text-xl mt-2">
        Hello there! I'm thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </motion.p>

      <motion.h1
        variants={item}
        className="text-main font-semibold text-3xl mt-5"
      >
        What I do!
      </motion.h1>
      <motion.div
        variants={item}
        className="w-[50%] bg-gradient-to-r h-[2px] from-btn to-btn2"
      />

      <motion.div className="grid grid-cols-2 gap-10 mt-10">
        {Services.map((service, index) => (
          <motion.div
            variants={item}
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            className="p-4 bg-primary rounded-xl flex flex-col items-center gap-2"
          >
            {service.icon}
            <h1 className="text-main font-semibold text-xl">{service.title}</h1>
            <p className="text-secondary text-center">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Home;
