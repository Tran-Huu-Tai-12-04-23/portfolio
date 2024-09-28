import { motion, wrap } from "framer-motion";
import { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const SlideImg = ({ imgs }: { imgs: string[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, imgs.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <motion.div className="w-full flex flex-col gap-4">
      <motion.div className="relative w-full overflow-hidden">
        {/* <AnimatePresence initial={false} custom={direction}> */}
        <div className="max-h-[20rem] w-full justify-center items-center">
          <motion.img
            className="rounded-lg h-[20rem] w-fit m-auto"
            key={page}
            src={imgs[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </div>
        {/* </AnimatePresence> */}
        <motion.div
          className="prev absolute -translate-y-1/2 top-1/2 left-2 bg-gradient-to-t from-btn to-btn2 p-4 hover:to-btn hover:from-btn2  rounded-lg text-btn"
          onClick={() => paginate(1)}
        >
          <GrLinkPrevious color="white" />
        </motion.div>
        <motion.div
          className="prev -translate-y-1/2 absolute top-1/2 right-2 bg-gradient-to-t from-btn p-4 rounded-lg  hover:to-btn hover:from-btn2 to-btn2 text-btn"
          onClick={() => paginate(-1)}
        >
          <GrLinkNext color="white" />
        </motion.div>
      </motion.div>

      <div className="flex max-h-[8rem] object-contain gap-4 overflow-x-auto overflow-y-hidden">
        {imgs.map((_, i) => (
          <motion.img
            key={i}
            src={imgs[i]}
            width={200}
            height={200}
            alt={""}
            onClick={() => {
              setPage([i, i - imageIndex]);
            }}
            className="rounded-lg h-[10rem] w-fit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SlideImg;
