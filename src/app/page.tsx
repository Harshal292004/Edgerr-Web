"use client"
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';

const page = () => {
  const [isDark, setIsDark] = useState(false);

  // Wave path generator (simplified sine wave)
  const wavePath = (amplitude = 60) => {
    return `M 0 80 Q 100 ${80 - amplitude} 200 80 T 400 80 T 600 80 T 800 80 T 1000 80 V 180 H 0 Z`;
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
      {/* Wavy background */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1000 180" className="w-full h-full">
          <motion.path
            initial={{ d: wavePath(60) }}
            animate={{ d: wavePath(40) }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className={isDark ? 'fill-slate-800' : 'fill-slate-300'}
          />
          <motion.path
            initial={{ d: wavePath(40) }}
            animate={{ d: wavePath(60) }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className={isDark ? 'fill-slate-700' : 'fill-slate-200'}
            style={{ y: 30 }}
          />
        </svg>
      </div>

      {/* Centered text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className={`text-9xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
        >
          Edgerr
        </motion.h1>
      </div>

      {/* Theme toggle button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`absolute top-4 right-4 p-2 rounded-full ${
          isDark ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-900'
        }`}
      >
        {isDark ? '🌞' : '🌙'}
      </button>
    </div>
  );
};

export default page;