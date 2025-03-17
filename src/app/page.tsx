// components/HeroSection.tsx
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Space_Mono } from 'next/font/google';
import { Github } from 'lucide-react';

import { useRouter } from 'next/navigation';
const spaceMono = Space_Mono({
  weight: '700',
  subsets: ['latin'],
});

export default function Home() {
  const [isLoggedIn,setIsLoggedIn]=useState(true)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const router=useRouter()

  const handleRouteChange=({href}:{href:string})=>{
    router.push(href)
  }

  return (
    <div className="min-h-screen transition-colors duration-300  dark:bg-black bg-[#f0f7ff]">
      <div className="relative min-h-screen flex items-center justify-center p-4">
        {/* Gradient Background */}
        <div className="absolute inset-0 transition-all duration-500  dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black 
        bg-gradient-to-br from-cyan-400 via-blue-300 to-green-200" />
        
        {/* Glassmorphism Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-lg rounded-3xl border  dark:bg-black/20 dark:border-white/10 bg-white/30 border-gray-200/50 p-12 shadow-2xl max-w-2xl w-full"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Title */}
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className={`${spaceMono.className} text-6xl dark:text-yellow-400 text-cyan-700 mb-4 text-center`}
            >
              Edgerr
            </motion.h1>

            {isLoggedIn ? (
              <motion.button
              onClick={()=>handleRouteChange({href:"/dashboard"})}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-semibold transition-colors dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300 bg-cyan-600 text-white hover:bg-cyan-500"
              >
                Go to Dashboard
              </motion.button>
            ) : (
              <div className="flex gap-4">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-6 py-2 rounded-full border-2 font-medium  dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400/10 border-cyan-600 text-cyan-600 hover:bg-cyan-600/10"
                >
                  Login
                </motion.button>
                
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-6 py-2 rounded-full font-medium  dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300 bg-cyan-600 text-white hover:bg-cyan-500">
                  Sign Up
                </motion.button>
              </div>
            )}

            {/* GitHub Link */}
            <motion.a
              href="https://github.com/Harshal292004/Edgerr-Web"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mt-8 px-4 py-2 rounded-full border  dark:border-white/20 dark:text-white/80 dark:hover:bg-white/10 border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              <Github size={18} />
              <span className="text-sm font-medium">View on GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}