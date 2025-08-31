import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LeetCodeHeatmapProps {
  username?: string;
  className?: string;
}

interface ActivityData {
  date: string;
  count: number;
}

export default function LeetCodeHeatmap({ username = "nimamot", className = "" }: LeetCodeHeatmapProps) {
  const [data, setData] = useState<ActivityData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        setLoading(true);
        
        // Try multiple API endpoints
        const endpoints = [
          `https://leetcode-stats-six.vercel.app/api?username=${username}`,
          `https://leetcode-stats-api.vercel.app/api/${username}`,
          `https://leetcode-stats.vercel.app/api?username=${username}`,
          `https://leetcode-stats-api.vercel.app/api/${username}/calendar`
        ];
        
        let result = null;
        let lastError = null;
        
        for (const endpoint of endpoints) {
          try {
            const response = await fetch(endpoint);
            if (response.ok) {
              result = await response.json();
              break;
            }
          } catch (err) {
            lastError = err;
            continue;
          }
        }
        
        if (!result) {
          throw new Error('All API endpoints failed');
        }
        
        if (result.submissionCalendar) {
          // Parse the submission calendar data
          const calendarData = JSON.parse(result.submissionCalendar);
          const activityData: ActivityData[] = Object.entries(calendarData).map(([timestamp, count]) => ({
            date: new Date(Number(timestamp) * 1000).toISOString().split('T')[0],
            count: count as number
          }));
          
          setData(activityData);
        } else {
          throw new Error('No submission calendar data available');
        }
              } catch (err) {
          console.error('LeetCode API error:', err);
          setError('Unable to fetch real LeetCode data. Please check your username or try again later.');
        } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, [username]);

  const generateHeatmap = () => {
    if (!data.length) return null;

    // Get the last 365 days
    const today = new Date();
    const oneYearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
    
    const heatmapData: { [key: string]: number } = {};
    
    // Initialize all days with 0
    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      heatmapData[dateStr] = 0;
    }
    
    // Fill in actual data
    data.forEach(item => {
      if (heatmapData[item.date] !== undefined) {
        heatmapData[item.date] = item.count;
      }
    });

    // Group by weeks
    const weeks: { [key: string]: { [key: string]: number } } = {};
    Object.entries(heatmapData).forEach(([date, count]) => {
      const weekStart = new Date(date);
      weekStart.setDate(weekStart.getDate() - weekStart.getDay());
      const weekKey = weekStart.toISOString().split('T')[0];
      
      if (!weeks[weekKey]) {
        weeks[weekKey] = {};
      }
      weeks[weekKey][date] = count;
    });

    return Object.entries(weeks).map(([weekStart, days]) => (
      <div key={weekStart} className="flex flex-col gap-1">
        {Object.entries(days).map(([date, count]) => {
          const intensity = count === 0 ? 0 : Math.min(Math.ceil(count / 5) + 1, 4);
          const colors = [
            'bg-gray-100 dark:bg-gray-800', // 0 submissions
            'bg-green-200 dark:bg-green-900', // 1-5 submissions
            'bg-green-400 dark:bg-green-700', // 6-10 submissions
            'bg-green-600 dark:bg-green-500', // 11-15 submissions
            'bg-green-800 dark:bg-green-300', // 16+ submissions
          ];
          
          return (
            <div
              key={date}
              className={`w-3 h-3 rounded-sm ${colors[intensity]} transition-colors hover:scale-125`}
              title={`${date}: ${count} submissions`}
            />
          );
        })}
      </div>
    ));
  };

  const getTotalSubmissions = () => {
    return data.reduce((sum, item) => sum + item.count, 0);
  };

  const getActiveDays = () => {
    return data.filter(item => item.count > 0).length;
  };

  const getMaxStreak = () => {
    let currentStreak = 0;
    let maxStreak = 0;
    
    const today = new Date();
    const oneYearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
    
    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      const dayData = data.find(item => item.date === dateStr);
      
      if (dayData && dayData.count > 0) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    }
    
    return maxStreak;
  };

  if (loading) {
    return (
      <motion.div
        className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-500 dark:text-gray-400">Loading LeetCode activity...</div>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center text-red-500 dark:text-red-400">
          Failed to load LeetCode data: {error}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">LC</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">LeetCode Activity</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">@{username}</p>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{getTotalSubmissions()}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Submissions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{getActiveDays()}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Active Days</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{getMaxStreak()}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Max Streak</div>
        </div>
      </div>

      {/* Heatmap */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Submission activity in the past year
        </h4>
        <div className="flex gap-1 overflow-x-auto pb-2">
          {generateHeatmap()}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800"></div>
          <div className="w-3 h-3 rounded-sm bg-green-200 dark:bg-green-900"></div>
          <div className="w-3 h-3 rounded-sm bg-green-400 dark:bg-green-700"></div>
          <div className="w-3 h-3 rounded-sm bg-green-600 dark:bg-green-500"></div>
          <div className="w-3 h-3 rounded-sm bg-green-800 dark:bg-green-300"></div>
        </div>
        <span>More</span>
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
