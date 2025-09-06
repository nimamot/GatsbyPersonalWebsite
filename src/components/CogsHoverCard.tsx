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
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50"
          >
            {/* Arrow pointing down */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>
            
            {/* Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm w-80">
              {/* Image */}
              <div className="mb-3">
                <img 
                  src="/static/COGS.png" 
                  alt="Cognitive Systems" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              
              {/* Content */}
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">
                  Cognitive Systems (COGS)
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  Cognitive Systems (COGS) links Computer Science with neuroscience, psychology, linguistics, and philosophy to study intelligence. It focuses on computational modeling, data analysis, and human centered design to connect brain and behavior with AI, preparing students to build and evaluate ML systems for language, vision, and decision making.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
