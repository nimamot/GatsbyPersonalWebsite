import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CogsHoverCardProps {
  children: React.ReactNode;
}

export default function CogsHoverCard({ children }: CogsHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-full -left-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 mb-3 z-50 w-[85vw] max-w-xs sm:max-w-lg sm:w-[28rem]"
          >
            {/* Arrow pointing down */}
            <div className="absolute top-full left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-50 dark:border-t-gray-800"></div>
            
            {/* Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl shadow-2xl border border-blue-200 dark:border-gray-600 p-3 sm:p-6 w-full backdrop-blur-sm">
              {/* Header with icon */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">🧠</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-lg">
                    Cognitive Systems
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    (COGS)
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="mb-4 relative group">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-2xl border-2 border-blue-300 dark:border-blue-600 transform group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img 
                    src="/static/COGS.png" 
                    alt="Cognitive Systems Interdisciplinary Diagram" 
                    className="w-full h-48 sm:h-64 object-cover rounded-2xl drop-shadow-2xl filter brightness-110 contrast-130 saturate-110"
                  />
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-blue-700 dark:text-blue-300">Cognitive Systems (COGS)</span> links <span className="font-semibold text-purple-600 dark:text-purple-400">Computer Science</span> with <span className="font-semibold text-green-600 dark:text-green-400">neuroscience</span>, <span className="font-semibold text-pink-600 dark:text-pink-400">psychology</span>, <span className="font-semibold text-orange-600 dark:text-orange-400">linguistics</span>, and <span className="font-semibold text-indigo-600 dark:text-indigo-400">philosophy</span> to study intelligence.
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  It focuses on <span className="font-semibold text-blue-600 dark:text-blue-400">computational modeling</span>, <span className="font-semibold text-emerald-600 dark:text-emerald-400">data analysis</span>, and <span className="font-semibold text-rose-600 dark:text-rose-400">human-centered design</span> to connect brain and behavior with <span className="font-semibold text-cyan-600 dark:text-cyan-400">AI</span>, preparing students to build and evaluate <span className="font-semibold text-violet-600 dark:text-violet-400">ML systems</span> for language, vision, and decision making.
                </p>
              </div>

              {/* Footer with sparkle */}
              <div className="mt-2 sm:mt-4 pt-2 sm:pt-3 border-t border-blue-200 dark:border-gray-600 flex items-center justify-center">
                <span className="text-blue-500 dark:text-blue-400 text-xs font-medium flex items-center gap-1">
                  <span className="animate-pulse">✨</span>
                  <span className="hidden sm:inline">Interdisciplinary Excellence</span>
                  <span className="sm:hidden">Interdisciplinary</span>
                  <span className="animate-pulse">✨</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
