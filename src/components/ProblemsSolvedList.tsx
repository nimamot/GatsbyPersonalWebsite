import React from 'react';
import { motion } from 'framer-motion';

interface SolvedProblem {
  title: string;
  difficulty: string;
  platform: string;
  solvedAt: string;
}

interface ProblemsSolvedListProps {
  problems: SolvedProblem[];
  className?: string;
}

export default function ProblemsSolvedList({ problems, className = "" }: ProblemsSolvedListProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'hard':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  if (problems.length === 0) {
    return (
      <div className="relative">
        {/* Curvy Annotation Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute -right-32 top-8 z-20 pointer-events-none"
        >
          {/* Curvy Line SVG */}
          <motion.svg
            width="200"
            height="120"
            viewBox="0 0 200 120"
            className="absolute"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
          >
            <motion.path
              d="M20 60 Q60 20 100 60 T180 60"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="5,5"
              animate={{ 
                strokeDashoffset: [0, -10],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Arrow head pointing to the list */}
            <motion.path
              d="M15 60 L25 55 L25 65 Z"
              fill="#3B82F6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            />
          </motion.svg>

          {/* Annotation Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
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

        <motion.div
          className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm ${className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">✓</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Solved Problems</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Latest submissions</p>
          </div>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
          <div className="text-4xl mb-2">📝</div>
          <p>No problems solved yet</p>
          <p className="text-sm mt-1">Start your coding journey!</p>
        </div>

        {/* Built with Leetrack Badge with Modern Annotation */}
        <div className="mt-6 relative">
          {/* Modern Annotation Pointer */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Animated Arrow */}
              <motion.div
                animate={{ 
                  x: [0, 8, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center"
              >
                <svg 
                  width="60" 
                  height="20" 
                  viewBox="0 0 60 20" 
                  className="text-blue-500"
                  fill="none"
                >
                  <path
                    d="M5 10 L50 10 M45 5 L50 10 L45 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              
              {/* Floating Annotation Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-12 -right-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 shadow-lg"
              >
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  My own tool! 🚀
                </div>
                {/* Small triangle pointer */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-200 dark:border-t-gray-600"></div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Badge */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700 rounded-full text-sm font-medium text-orange-700 dark:text-orange-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <span>Built with</span>
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  // Scroll to projects section and highlight Leetrack
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                    // Add a small delay to ensure smooth scrolling
                    setTimeout(() => {
                      // You could add highlighting logic here if needed
                    }, 500);
                  }
                }}
                className="font-semibold text-orange-800 dark:text-orange-200 hover:text-orange-900 dark:hover:text-orange-100 transition-colors duration-200 underline decoration-orange-300 dark:decoration-orange-600 underline-offset-2 hover:underline-offset-4"
              >
                Leetrack
              </a>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="text-orange-600 dark:text-orange-400"
              >
                ✨
              </motion.span>
            </motion.div>
          </div>
        </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Curvy Annotation Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute -right-32 top-8 z-20 pointer-events-none"
      >
        {/* Curvy Line SVG */}
        <motion.svg
          width="200"
          height="120"
          viewBox="0 0 200 120"
          className="absolute"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
        >
          <motion.path
            d="M20 60 Q60 20 100 60 T180 60"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="5,5"
            animate={{ 
              strokeDashoffset: [0, -10],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Arrow head pointing to the list */}
          <motion.path
            d="M15 60 L25 55 L25 65 Z"
            fill="#3B82F6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          />
        </motion.svg>

        {/* Annotation Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
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

      <motion.div
        className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">✓</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Solved Problems</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{problems.length} problems completed</p>
          </div>
        </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {problems
          .sort((a, b) => new Date(b.solvedAt).getTime() - new Date(a.solvedAt).getTime())
          .map((problem, index) => (
            <motion.div
              key={`${problem.title}-${problem.solvedAt}`}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-gray-900 dark:text-white truncate">
                    {problem.title}
                  </h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(problem.solvedAt)}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formatTime(problem.solvedAt)}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 ml-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      <div className="mt-6 text-center">
        <a 
          href={`https://leetcode.com/problemset/all/`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
        >
          View All Problems on LeetCode
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Built with Leetrack Badge */}
      <div className="mt-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700 rounded-full text-sm font-medium text-orange-700 dark:text-orange-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
        >
          <span>Built with</span>
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              // Scroll to projects section and highlight Leetrack
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
                // Add a small delay to ensure smooth scrolling
                setTimeout(() => {
                  // You could add highlighting logic here if needed
                }, 500);
              }
            }}
            className="font-semibold text-orange-800 dark:text-orange-200 hover:text-orange-900 dark:hover:text-orange-100 transition-colors duration-200 underline decoration-orange-300 dark:decoration-orange-600 underline-offset-2 hover:underline-offset-4"
          >
            Leetrack
          </a>
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="text-orange-600 dark:text-orange-400"
          >
            ✨
          </motion.span>
        </motion.div>
      </div>
      </motion.div>
    </div>
  );
}
