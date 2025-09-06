import React from 'react';
import { motion } from 'framer-motion';

interface CurvyAnnotationProps {
  className?: string;
}

export default function CurvyAnnotation({ className = "" }: CurvyAnnotationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className={`absolute -right-56 top-1/2 transform -translate-y-1/2 z-20 ${className}`}
    >
      {/* Floating annotation with creative design */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 border-2 border-orange-200 dark:border-orange-700 rounded-2xl px-5 py-4 shadow-xl max-w-xs cursor-pointer"
      >
        {/* Floating sparkles around the bubble */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-2 -right-2 text-orange-400 text-lg"
        >
          ✨
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
          className="absolute -bottom-1 -left-1 text-orange-300 text-sm"
        >
          ⭐
        </motion.div>

        {/* Main content */}
        <div className="relative z-10">
          <motion.div 
            className="text-sm font-bold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2"
            animate={{ 
              color: ["#ea580c", "#f97316", "#ea580c"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span>My own tool!</span>
            <motion.span
              animate={{ 
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🚀
            </motion.span>
          </motion.div>
          
          <div className="text-xs text-orange-700 dark:text-orange-300 mb-3 leading-relaxed">
            Both the heatmap and problems list come from <strong>Leetrack</strong> - a coding practice tracker I built from scratch!
          </div>
          
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
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
              className="text-xs font-bold text-orange-800 dark:text-orange-200 hover:text-orange-900 dark:hover:text-orange-100 transition-colors duration-200 underline decoration-orange-400 dark:decoration-orange-500 underline-offset-2 hover:underline-offset-4"
            >
              Leetrack
            </a>
            <motion.span
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="text-orange-500"
            >
              ✨
            </motion.span>
          </motion.div>
        </div>

        {/* Pulsing background effect */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-orange-200 dark:bg-orange-800 rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
}
