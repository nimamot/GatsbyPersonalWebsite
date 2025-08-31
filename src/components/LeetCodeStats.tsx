import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LeetCodeHeatmap from './LeetCodeHeatmap';

interface LeetCodeStatsProps {
  username?: string;
  className?: string;
}

export default function LeetCodeStats({ username = "nimamot", className = "" }: LeetCodeStatsProps) {

  const getCardUrl = () => {
    return `https://leetcard.jacoblin.cool/${username}?theme=dark&font=Inter`;
  };

  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          My Problem-Solving Progress
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Sharing my LeetCode journey because apparently I need the whole world to know when I'm slacking off. 
          Works like a charm! 🧠
        </p>
      </div>

      {/* LeetCode Card Display */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow p-6">
        <img
          src={getCardUrl()}
          alt={`LeetCode stats for ${username}`}
          className="w-full h-auto rounded-lg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      <div className="mt-6 text-center">
        <a 
          href={`https://leetcode.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium transition-colors"
        >
          View Full Profile on LeetCode
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        </a>
      </div>
    </motion.div>
  );
}
