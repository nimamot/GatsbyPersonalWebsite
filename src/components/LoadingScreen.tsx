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
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="loader-orb loader-orb-a absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl dark:bg-purple-600/35" />
            <div className="loader-orb loader-orb-b absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.18),transparent_55%)]" />
          </div>

          {/* One-pass scan line */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-purple-500/80 to-transparent dark:via-purple-400"
            initial={{ top: "8%", opacity: 0 }}
            animate={{ top: ["8%", "92%"], opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut", delay: 0.08 }}
          />

          <div className="relative z-20 flex flex-col items-center px-6">
            {/* Monogram + ring */}
            <div className="relative mb-5 sm:mb-6">
              <motion.div
                aria-hidden
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90"
                initial={{ rotate: 0, scale: 0.85, opacity: 0 }}
                animate={{ rotate: 300, scale: 1, opacity: 1 }}
                transition={{
                  rotate: { duration: 0.75, ease: "easeInOut" },
                  scale: { duration: 0.28, ease: [0.34, 1.4, 0.64, 1] },
                  opacity: { duration: 0.2 },
                }}
              />
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.32, ease: [0.34, 1.45, 0.64, 1] }}
                className="relative flex h-24 w-24 items-center justify-center rounded-full border border-gray-200/80 bg-white shadow-lg shadow-purple-500/10 dark:border-white/10 dark:bg-gray-900 dark:shadow-purple-900/40 sm:h-28 sm:w-28"
              >
                <span className="bg-gradient-to-br from-gray-900 via-purple-800 to-indigo-700 bg-clip-text text-4xl font-black tracking-tighter text-transparent dark:from-white dark:via-purple-200 dark:to-indigo-300 sm:text-5xl">
                  NM
                </span>
              </motion.div>
            </div>

            {/* Name — single reveal, no letter stagger */}
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.38, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                {NAME}
              </p>
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.35em" }}
                animate={{ opacity: 1, letterSpacing: "0.2em" }}
                transition={{ duration: 0.3, delay: 0.22 }}
                className="mt-2 text-[10px] font-medium uppercase text-purple-600/80 dark:text-purple-300/70 sm:text-xs"
              >
                Entering portfolio
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-7 h-0.5 w-28 overflow-hidden rounded-full bg-gray-200 dark:bg-white/10 sm:w-36"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15, delay: 0.1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.95, ease: "easeOut", delay: 0.05 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
