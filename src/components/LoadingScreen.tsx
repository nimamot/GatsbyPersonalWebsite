import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Hand-drawn character */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            {/* Head */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full"></div>
            
            {/* Hair */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-8 bg-gray-900 rounded-full -mt-1"></div>
            
            {/* Eyes */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            
            {/* Smile */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-1 border-b-2 border-white rounded-full"></div>
            
            {/* Body/Robe */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-purple-600 rounded-t-full"></div>
            
            {/* Belt */}
            <div className="absolute top-18 left-1/2 transform -translate-x-1/2 w-14 h-2 bg-purple-400 rounded-full"></div>
            
            {/* Arms and hands */}
            <div className="absolute top-12 left-2 w-3 h-8 bg-purple-600 rounded-full transform -rotate-12">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
            </div>
            <div className="absolute top-12 right-2 w-3 h-8 bg-purple-600 rounded-full transform rotate-12">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
            </div>
            
            {/* Legs */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-3 h-4 bg-gray-800 rounded-full"></div>
              <div className="w-3 h-4 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </motion.div>
        
        <motion.h1
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          LOADING...
        </motion.h1>
        
        <motion.div
          className="w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden"
        >
          <motion.div
            className="h-full bg-purple-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
