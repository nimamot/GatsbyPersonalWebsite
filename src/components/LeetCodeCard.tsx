import React from 'react';
import { motion } from 'framer-motion';

interface LeetCodeCardProps {
  username?: string;
  className?: string;
  theme?: 'light' | 'dark' | 'nord' | 'dracula' | 'unicorn' | 'tokyo' | 'candy' | 'sunset' | 'ocean' | 'forest' | 'midnight' | 'sunrise';
  hide?: string; // Comma-separated list of elements to hide: 'rank,streak,submit,acceptance'
}

export default function LeetCodeCard({ 
  username = "nimamot", 
  className = "",
  theme = "dark",
  hide = ""
}: LeetCodeCardProps) {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">LC</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">LeetCode Activity</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">@{username}</p>
        </div>
      </div>
      
      <div className="overflow-hidden rounded-lg">
        <img
          src={`https://leetcard.jacoblin.cool/${username}?theme=${theme}${hide ? `&hide=${hide}` : ''}`}
          alt={`LeetCode stats for ${username}`}
          className="w-full h-auto rounded-lg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      
      <div className="mt-4 text-center">
        <a 
          href={`https://leetcode.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium transition-colors"
        >
          View Profile on LeetCode
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
