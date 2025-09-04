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

interface HeatmapResponse {
  username: string;
  totalSubmissions: number;
  activeDays: number;
  maxStreak: number;
  currentStreak: number;
  heatmapData: ActivityData[];
}

export default function LeetCodeHeatmap({ username = "nimamot", className = "" }: LeetCodeHeatmapProps) {
  const [data, setData] = useState<ActivityData[]>([]);
  const [stats, setStats] = useState({ totalSubmissions: 0, activeDays: 0, maxStreak: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ visible: boolean; x: number; y: number; content: string }>({
    visible: false,
    x: 0,
    y: 0,
    content: ''
  });


  const fetchLeetCodeData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`https://leetrack.vercel.app/api/public/heatmap/${username}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found');
        } else if (response.status === 403) {
          throw new Error('Profile is private or heatmap is disabled');
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }
      
      const result: HeatmapResponse = await response.json();
      
      if (result.heatmapData && Array.isArray(result.heatmapData)) {
        setData(result.heatmapData);
        setStats({
          totalSubmissions: result.totalSubmissions,
          activeDays: result.activeDays,
          maxStreak: result.maxStreak
        });
        setError(null);
      } else {
        throw new Error('No heatmap data available');
      }
    } catch (err) {
      console.error('LeetCode Tracker API error:', err);
      setError(err instanceof Error ? err.message : 'Failed to load heatmap data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeetCodeData();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchLeetCodeData, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [username]);

  const getIntensityLevel = (count: number) => {
    if (count === 0) return 0;
    if (count === 1) return 1;
    if (count === 2) return 2;
    if (count === 3) return 3;
    return 4;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const showTooltip = (event: React.MouseEvent, date: string, count: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY - 30,
      content: `${formatDate(date)}: ${count} submission${count !== 1 ? 's' : ''}`
    });
  };

  const hideTooltip = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  const generateMonthLabels = () => {
    const months = [];
    const today = new Date();
    
    for (let i = 11; i >= 0; i--) {
      const date = new Date(today);
      date.setMonth(today.getMonth() - i);
      months.push(date.toLocaleDateString('en-US', { month: 'short' }));
    }
    
    return months;
  };

  const generateHeatmap = () => {
    if (!data.length) return null;

    // Group data into weeks (7 days per week)
    const weeks = [];
    const weekSize = 7;
    
    for (let i = 0; i < data.length; i += weekSize) {
      weeks.push(data.slice(i, i + weekSize));
    }

    return (
      <div>
        <div className="flex gap-1 overflow-x-auto pb-2">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => {
                const level = getIntensityLevel(day.count);
                const colors = [
                  'bg-gray-100 dark:bg-gray-800', // 0 submissions
                  'bg-green-200 dark:bg-green-900', // 1 submission
                  'bg-green-400 dark:bg-green-700', // 2 submissions
                  'bg-green-600 dark:bg-green-500', // 3 submissions
                  'bg-green-800 dark:bg-green-300', // 4+ submissions
                ];
                
                return (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 rounded-sm ${colors[level]} transition-all duration-200 hover:scale-125 cursor-pointer`}
                    onMouseEnter={(e) => showTooltip(e, day.date, day.count)}
                    onMouseLeave={hideTooltip}
                  />
                );
              })}
            </div>
          ))}
        </div>
        
        {/* Month labels */}
        <div className="flex gap-1 ml-8 mt-2">
          {generateMonthLabels().map((month, index) => (
            <div key={index} className="w-3 text-center text-xs text-gray-600 dark:text-gray-400">
              {index % 2 === 0 ? month : ''}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const getTotalSubmissions = () => {
    return stats.totalSubmissions;
  };

  const getActiveDays = () => {
    return stats.activeDays;
  };

  const getMaxStreak = () => {
    return stats.maxStreak;
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
          {error}
        </div>
        <div className="text-center mt-4">
          <button
            onClick={fetchLeetCodeData}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
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
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">LC</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">LeetCode Activity</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">@{username}</p>
          </div>
        </div>
        <button
          onClick={fetchLeetCodeData}
          disabled={loading}
          className="px-3 py-1.5 text-sm bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Loading...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </>
          )}
        </button>
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
        {generateHeatmap()}
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

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="fixed z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          {tooltip.content}
        </div>
      )}
    </motion.div>
  );
}
