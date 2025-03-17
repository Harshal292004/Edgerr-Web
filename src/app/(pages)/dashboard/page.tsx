"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { DatabaseZap, Github,ArrowRight,Shield,Code,Zap } from 'lucide-react'
import { space_mono } from '@/lib/fonts'
import { useRouter } from 'next/navigation'

const Her = () => {
  const router = useRouter()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-black bg-[#f0f7ff]">
      <div className="relative min-h-screen flex items-center justify-center p-4">
        {/* Gradient Background */}
        <div className="absolute inset-0 transition-all duration-500 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black bg-gradient-to-br from-cyan-400 via-blue-300 to-green-200" />
        
        {/* Full-screen Glass Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-screen p-8 backdrop-blur-xl rounded-[40px] border-2 dark:border-white/10 border-gray-200/50 dark:bg-black/30 bg-white/20 shadow-2xl"
        >
          {/* Grid Layout */}
          <div className="grid grid-cols-5 grid-rows-5 h-full gap-6">
            {/* Main Section */}
            <motion.div 
              variants={gridItemVariants}
              className="row-span-3 col-span-3 dark:bg-white/5 bg-black/5 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 border dark:border-white/10 border-gray-200/30"
            >
              <DatabaseZap className="w-16 h-16 dark:text-yellow-400 text-cyan-600" />
              <h1 className={`${space_mono.className} text-4xl dark:text-yellow-400 text-cyan-700`}>Codd</h1>
              <p className="dark:text-white/80 text-gray-600 text-center">Relational database management reimagined for modern web applications</p>
            </motion.div>

            {/* Features Section */}
            <motion.div 
              variants={gridItemVariants}
              className="row-span-4 col-span-2 dark:bg-white/5 bg-black/5 rounded-3xl p-8 flex flex-col items-center justify-center gap-6 border dark:border-white/10 border-gray-200/30"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Zap className="w-8 h-8 dark:text-yellow-400 text-cyan-600" />
                  <h3 className={`${space_mono.className} dark:text-white text-gray-800`}>Lightning Fast</h3>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="w-8 h-8 dark:text-yellow-400 text-cyan-600" />
                  <h3 className={`${space_mono.className} dark:text-white text-gray-800`}>Secure by Design</h3>
                </div>
                <div className="flex items-center gap-4">
                  <Code className="w-8 h-8 dark:text-yellow-400 text-cyan-600" />
                  <h3 className={`${space_mono.className} dark:text-white text-gray-800`}>Developer First</h3>
                </div>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              variants={gridItemVariants}
              className="row-span-2 col-span-2 dark:bg-white/5 bg-black/5 rounded-3xl p-8 flex flex-col justify-center border dark:border-white/10 border-gray-200/30"
            >
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className={`${space_mono.className} text-3xl dark:text-yellow-400 text-cyan-600`}>99.9%</div>
                  <p className="dark:text-white/80 text-gray-600">Uptime</p>
                </div>
                <div className="text-center">
                  <div className={`${space_mono.className} text-3xl dark:text-yellow-400 text-cyan-600`}>1M+</div>
                  <p className="dark:text-white/80 text-gray-600">Queries/sec</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              variants={gridItemVariants}
              className="row-span-1 col-span-1 dark:bg-yellow-400/20 bg-cyan-600/20 rounded-3xl p-6 flex items-center justify-center cursor-pointer border dark:border-yellow-400/30 border-cyan-600/30 hover:dark:bg-yellow-400/10 hover:bg-cyan-600/10 transition-colors"
              onClick={() => router.push('/dashboard')}
            >
              <div className="text-center">
                <ArrowRight className="w-8 h-8 dark:text-yellow-400 text-cyan-600 mx-auto" />
                <p className={`${space_mono.className} mt-2 dark:text-yellow-400 text-cyan-600`}>Launch</p>
              </div>
            </motion.div>

            {/* GitHub Link */}
            <motion.a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="row-start-5 col-span-2 flex items-center justify-center gap-2 dark:text-white/80 text-gray-600 hover:dark:text-yellow-400 hover:text-cyan-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Github className="w-6 h-6" />
              <span className={`${space_mono.className} text-sm`}>View on GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Her