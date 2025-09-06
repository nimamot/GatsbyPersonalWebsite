import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

interface CurvyAnnotationProps {
  className?: string;
}

export default function CurvyAnnotation({ className = "" }: CurvyAnnotationProps) {
  // Spring animation for the path drawing
  const pathSpring = useSpring({
    from: { pathLength: 0 },
    to: { pathLength: 1 },
    config: { duration: 2000 },
    delay: 1200,
  });

  // Spring animation for the dash offset
  const dashSpring = useSpring({
    from: { strokeDashoffset: 0 },
    to: { strokeDashoffset: -20 },
    loop: { reverse: true },
    config: { duration: 2000 },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className={`absolute -right-40 bottom-8 z-20 pointer-events-none ${className}`}
    >
      {/* Curvy Line SVG with proper animations */}
      <svg
        width="200"
        height="100"
        viewBox="0 0 200 100"
        className="absolute"
      >
        {/* Main curvy path */}
        <animated.path
          d="M180 50 Q140 20 80 50 T20 50"
          stroke="#3B82F6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="8,4"
          strokeDashoffset={dashSpring.strokeDashoffset}
          pathLength={pathSpring.pathLength}
          style={{
            strokeDasharray: "8,4",
            strokeDashoffset: dashSpring.strokeDashoffset,
          }}
        />
        
        {/* Arrow head pointing to the list */}
        <motion.path
          d="M15 50 L25 45 L25 55 Z"
          fill="#3B82F6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        />
      </svg>

      {/* Annotation Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute top-0 left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 shadow-lg max-w-xs"
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
