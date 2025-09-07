import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CogsHoverCardProps {
  children: React.ReactNode;
}

export default function CogsHoverCard({ children }: CogsHoverCardProps) {
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
            <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-purple-200 dark:border-b-purple-800" />
            
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-3 sm:p-6 shadow-2xl backdrop-blur-sm">
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
                  🧠
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-purple-800 dark:text-purple-200">
                    Cognitive Systems
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400">
                    My Major at UBC
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative mb-3 sm:mb-4">
                <div className="relative bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-800 rounded-2xl p-1 overflow-hidden">
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
                    <img 
                      src="/static/COGS.png" 
                      alt="Cognitive Systems" 
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent pointer-events-none" />
                  </div>
                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400/30 rounded-full" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-500/40 rounded-full" />
                </div>
              </div>
              
              {/* Description */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-xs sm:text-sm text-purple-700 dark:text-purple-300 leading-relaxed">
                  Cognitive Systems links <span className="font-semibold text-purple-800 dark:text-purple-200">Computer Science</span> with <span className="font-semibold text-purple-800 dark:text-purple-200">neuroscience</span>, <span className="font-semibold text-purple-800 dark:text-purple-200">psychology</span>, <span className="font-semibold text-purple-800 dark:text-purple-200">linguistics</span>, and <span className="font-semibold text-purple-800 dark:text-purple-200">philosophy</span> to study intelligence.
                </p>
                <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 leading-relaxed">
                  It focuses on <span className="font-semibold">computational modeling</span>, <span className="font-semibold">data analysis</span>, and <span className="font-semibold">human-centered design</span> to connect brain and behavior with AI.
                </p>
              </div>

              {/* Footer */}
              <motion.div 
                className="flex items-center justify-center gap-2 mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-purple-200 dark:border-purple-700"
                animate={{ 
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium">
                  UBC Major Program
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
                  className="text-purple-500 text-sm sm:text-base"
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
                className="absolute inset-0 bg-purple-200 dark:bg-purple-800 rounded-2xl pointer-events-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
