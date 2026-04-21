import React from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

const FULL_NAME = "Nima Motieifard";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center px-4">
        <motion.div
          className="flex flex-wrap justify-center gap-x-0.5 sm:gap-x-1 gap-y-1 max-w-[min(100%,56rem)] mx-auto"
          variants={container}
          initial="hidden"
          animate="visible"
          aria-label={`Loading, ${FULL_NAME}`}
        >
          {FULL_NAME.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letter}
              className={`inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white select-none ${
                char === " " ? "w-2 sm:w-3 md:w-4" : ""
              }`}
            >
              {char === " " ? "\u00a0" : char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-12 w-40 sm:w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-purple-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
