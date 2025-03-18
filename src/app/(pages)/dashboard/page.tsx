"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { DatabaseZap, Github,ArrowRight,BrainCircuit,Code,ArrowRightLeft } from 'lucide-react'
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
          className="grid grid-cols-5 grid-rows-5 w-full h-screen p-8 backdrop-blur-xl rounded-[40px] border-2 dark:border-white/10 border-gray-200/50 dark:bg-black/30 bg-white/20 shadow-2xl"
        >
            {/* Codd Section */}
            <motion.div 
              variants={gridItemVariants}
              className="row-span-3 col-span-3 dark:bg-white/5 bg-black/5 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 border dark:border-white/10 border-gray-200/30"
            >
              <DatabaseZap className="w-16 h-16 dark:text-yellow-400 text-cyan-600" />
              <h1 className={`${space_mono.className} text-4xl dark:text-yellow-400 text-cyan-700`}>Codd</h1>
              <ul>
                <li>
                <p className="dark:text-white/80 text-gray-600 text-center">Design <b><i>OLAP</i></b> databases like never before</p>
    
                </li>
                <li>
                <p className="dark:text-white/80 text-gray-600 text-center">In 2 easy steps:</p>
                <li>
                <p className="dark:text-white/80 text-gray-600 text-center">Enter your business needs</p>

                </li>          
                <li>
                <p className="dark:text-white/80 text-gray-600 text-center">Answer some questions related to your business need</p>
                </li>          
                </li>          
              </ul>
              
            </motion.div>

            {/* StoneBreaker Section */}
            <motion.div 
              variants={gridItemVariants}
              className="row-span-4 col-span-2 dark:bg-white/5 bg-black/5 rounded-3xl p-8 flex flex-col items-center justify-center gap-6 border dark:border-white/10 border-gray-200/30"
            >
              <BrainCircuit className='w-16 h-16 dark:text-yellow-400 text-cyan-600'></BrainCircuit>
              <h1 className={`${space_mono.className} text-4xl dark:text-yellow-400 text-cyan-700`}>Stone Breaker</h1>
              <ul>
                <li>
                <p className="dark:text-white/80 text-gray-600 text-center">Generate polished and optimized <b><i>SQL Queries</i></b> with natural language</p>
                </li>
                <li>
                <p className="dark:text-white/80 text-gray-600 text-center">In 2 easy steps:</p>
                <li>
                  {/*TODO: Accomodate prompts like create me a data base like this ( as there will be no context whatsoever(I am thinking of making a conditional edge to Codd module for this)) */}
                <p className="dark:text-white/80 text-gray-600 text-center">Connect your database or just add your table generation query</p>

                </li>          
                <li>
                <p className="dark:text-white/80 text-gray-600 text-center">Enter the <b><i>SQL Prompt</i></b></p>
                </li>          
                </li>          
              </ul>
            </motion.div>

            {/* Chamberlin Section */}
            <motion.div 
              variants={gridItemVariants}
              className="row-span-2 col-span-3 dark:bg-white/5 bg-black/5 rounded-3xl p-8 flex flex-col justify-center border dark:border-white/10 border-gray-200/30"
            >
              <Code className='w-16 h-16 dark:text-yellow-400 text-cyan-600'></Code>
              <h1 className={`${space_mono.className} text-4xl dark:text-yellow-400 text-cyan-700`}>Chamberlin</h1>
              <ul>
                <li>
                <p className="dark:text-white/80 text-gray-600 text-center">Stuck while wrting an query or just bored out of it use Chamberlin</p>
                </li>
                <li>
                <p className="dark:text-white/80 text-gray-600 text-center">Context aware assistance for sql completion</p>
                </li>
                <li>
                <p className="dark:text-white/80 text-gray-600 text-center">In a single step:</p>
                          
                </li>
                <li>
                <p className="dark:text-white/80 text-gray-600 text-center">Just start writing in our text editor</p>

                </li>          
                          
              </ul>
            </motion.div>

            {/* Selinger Section */}
            <motion.div 
              variants={gridItemVariants}
              className="row-span-1 col-span-2 dark:bg-white/5 bg-black/5 rounded-3xl p-8 flex flex-col justify-center border dark:border-white/10 border-gray-200/30"
              
            >
               <ArrowRightLeft className='w-16 h-16 dark:text-yellow-400 text-cyan-600'></ArrowRightLeft>
              <h1 className={`${space_mono.className} text-4xl dark:text-yellow-400 text-cyan-700`}>Slinger</h1>
              <ul>
              <li>
                <p className="dark:text-white/80 text-gray-600 text-center">Take a query and convert it to the syntax of any database provider</p>
                </li>
                <li>
                  <p className="dark:text-white/80 text-gray-600 text-center">In 2 easy steps:</p>
                </li>
                <li>
                  <p className="dark:text-white/80 text-gray-600 text-center">Enter the query to convert</p>
                </li>     
                <li>
                  <p className="dark:text-white/80 text-gray-600 text-center">Select the database provider</p>
                </li>            
              </ul>
            </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Her