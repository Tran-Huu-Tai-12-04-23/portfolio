import { InfoData } from "@/app/data";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdSend } from "react-icons/md";

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

function Contact() {
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
          CONTACT
        </motion.h1>
        <motion.div
          variants={item}
          className="w-[50%] bg-gradient-to-r h-[2px] from-btn to-btn2"
        />
      </div>

      <motion.div
        variants={item}
        className="flex gap-2 mt-2 items-center p-2 bg-primary rounded-lg"
      >
        <MdEmail className="text-3xl text-btn" />
        <span className="ml-2 text-main">{InfoData.email}</span>
      </motion.div>
      <motion.div
        variants={item}
        className="flex gap-2 mt-2 items-center p-2 bg-primary rounded-lg"
      >
        <MdPhone className="text-3xl text-btn" />
        <span className="ml-2 text-main">{InfoData.phone}</span>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-4 p-4 flex flex-col gap-2 rounded-lg bg-primary"
      >
        <h3 className="text-main">Message</h3>
        <input
          type="text"
          className="w-full focus-visible:ring-btn focus-visible:border-btn p-2 mt-2 rounded-lg border-[1px] border-transparent focus:ring-btn focus:border-btn bg-foreground text-main"
          placeholder="Type your name here..."
        />
        <input
          type="text"
          className="w-full focus-visible:ring-btn focus-visible:border-btn  rounded-lg p-2 mt-2 border-[1px] border-transparent focus:ring-btn focus:border-btn bg-foreground text-main"
          placeholder="Type your email here..."
        />
        <textarea
          className="w-full  focus-visible:ring-btn focus-visible:border-btn  rounded-lg bg-foreground h-24 border-[1px] border-transparent p-2 mt-2 focus:ring-btn focus:border-btn text-main"
          placeholder="Type your message here..."
        />
        <button className="btn_active w-fit mt-2 gap-2">
          <MdSend />
          <h1>Send</h1>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
