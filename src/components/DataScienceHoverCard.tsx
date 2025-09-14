import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DataScienceHoverCardProps {
  children: React.ReactNode;
}

export default function DataScienceHoverCard({ children }: DataScienceHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 w-[85vw] max-w-xs sm:max-w-lg sm:w-[28rem] -left-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 bottom-full mb-3"
          >
            {/* Arrow pointing down to the text */}
            <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-blue-200 dark:border-b-blue-800" />
            
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-3 sm:p-6 shadow-2xl backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-2xl sm:text-3xl"
                >
                  📊
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-800 dark:text-blue-200">
                    Data Science
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                    My Minor at UBC
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative mb-3 sm:mb-4">
                <div className="relative bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-1 overflow-hidden">
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
                    <img 
                      src="/static/DataScince.png" 
                      alt="Data Science" 
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent pointer-events-none" />
                  </div>
                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400/30 rounded-full" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-500/40 rounded-full" />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                  Data Science combines <span className="font-semibold text-blue-800 dark:text-blue-200">statistics</span>, <span className="font-semibold text-blue-800 dark:text-blue-200">programming</span>, and <span className="font-semibold text-blue-800 dark:text-blue-200">domain expertise</span> to extract insights from data.
                </p>
                <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 leading-relaxed">
                  It involves <span className="font-semibold">machine learning</span>, <span className="font-semibold">data visualization</span>, and <span className="font-semibold">predictive modeling</span> to solve real-world problems.
                </p>
              </div>

              {/* Footer */}
              <motion.div 
                className="flex items-center justify-center gap-2 mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-blue-200 dark:border-blue-700"
                animate={{ 
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
                  UBC Minor Program
                </span>
                <motion.span
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="text-blue-500 text-sm sm:text-base"
                >
                  ✨
                </motion.span>
              </motion.div>

              {/* Pulsing background effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-blue-200 dark:bg-blue-800 rounded-2xl pointer-events-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
