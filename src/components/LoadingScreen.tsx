import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

const NAME = "Nima Motieifard";

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          role="status"
          aria-live="polite"
          aria-label={`Loading ${NAME}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <h1 className="loader-name-shimmer px-6 text-center text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {NAME}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
