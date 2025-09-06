import React from 'react';
import { motion } from 'framer-motion';

interface CurvyAnnotationProps {
  className?: string;
}

export default function CurvyAnnotation({ className = "" }: CurvyAnnotationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className={`absolute -right-48 bottom-4 z-20 pointer-events-none ${className}`}
    >
      {/* Test line to make sure something shows */}
      <div className="absolute top-1/2 left-0 w-40 h-1 bg-red-500 transform -translate-y-1/2"></div>
      
      {/* Curvy Line SVG - positioned to connect bubble to list */}
      <svg
        width="180"
        height="80"
        viewBox="0 0 180 80"
        className="absolute"
        style={{ left: '0px', top: '10px' }}
      >
        {/* Curvy path connecting bubble to problems list */}
        <path
          d="M160 40 Q120 10 60 40 T20 40"
          stroke="#3B82F6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="8,4"
        />
        
        {/* Arrow head pointing to the problems list */}
        <path
          d="M15 40 L25 35 L25 45 Z"
          fill="#3B82F6"
        />
      </svg>

      {/* Annotation Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute top-0 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 shadow-lg max-w-xs"
      >
        <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
          My own tool! 🚀
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
          This data comes from Leetrack - a coding practice tracker I built
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">Built with</span>
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-xs font-semibold text-orange-700 dark:text-orange-300 hover:text-orange-800 dark:hover:text-orange-200 transition-colors duration-200 underline decoration-orange-300 dark:decoration-orange-600 underline-offset-2"
          >
            Leetrack
          </a>
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            className="text-orange-500"
          >
            ✨
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}
