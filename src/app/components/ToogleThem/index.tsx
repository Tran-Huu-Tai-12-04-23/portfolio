"use client";
import { motion } from "framer-motion";
import { FaMoon } from "react-icons/fa";

const ThemeToggleBtn = () => {
  const handleToggle = () => {
    const element = document.querySelector(".dark");
    if (element) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="p-5 rounded-full group bg-foreground hover-gradient flex items-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <FaMoon className="text-main group-hover:text-white" size={26} />
    </motion.button>
  );
};

export default ThemeToggleBtn;
