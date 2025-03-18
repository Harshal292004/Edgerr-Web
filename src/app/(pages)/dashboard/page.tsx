"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { DatabaseZap, Github,ArrowRight,BrainCircuit,Code,ArrowRightLeft } from 'lucide-react'
import { space_mono, roboto_mono_italic,josefin_sans,josefin_sans_italic } from '@/lib/fonts'
import { useRouter } from 'next/navigation'

const Her = () => {

  const router = useRouter()
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren"
      } 
    },
  }

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  const handleRouteChange = ({href}: {href:string}) => {
    router.push(href)
  }

  // Grid item common classes
  const gridItemClasses = [
    "cursor-pointer flex flex-col items-center justify-center",
    "dark:bg-white/5 bg-black/5 backdrop-blur-sm",
    "border dark:border-white/10 border-gray-200/30",
    "p-4 md:p-6 lg:p-8 gap-3 md:gap-4",
    "transition-all duration-300"
  ].join(' ')


  return (
    <div className="min-h-screen transition-colors duration-300  bg-gradient-to-br from-cyan-400 via-blue-300 to-green-200  dark:from-black dark:via-gray-900 dark:to-black">
      <div className="relative min-h-screen flex items-center justify-center p-4">
        {/* Gradient Background */}
        <div className="absolute inset-0 transition-all duration-500  bg-gradient-to-br from-cyan-400 via-blue-300 to-green-200  dark:from-black dark:via-gray-900 dark:to-black" />
        
        {/* Full-screen Glass Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-7 w-full h-auto md:h-screen p-4 md:p-8 backdrop-blur-xl rounded-3xl md:rounded-[40px] border-2 dark:border-white/10 border-gray-200/50 dark:bg-black/30 bg-white/20 shadow-2xl"
        >
            {/* Codd Section */}
            <motion.div 
              onClick={()=>handleRouteChange({href:"/codd"})}
              variants={gridItemVariants}
              whileHover="hover"
              className={
                [
                  gridItemClasses,
                  "md:row-span-3 md:col-span-3",
              "rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-none",
              "md:border-r-0"
                ].join(" ")
              }
              >
              <DatabaseZap className="w-12 h-12 md:w-16 md:h-16 dark:text-yellow-400 text-cyan-600" />
              <div className='felx flex-col mb-2'>
                <h1  className={`${space_mono.className} text-center text-2xl md:text-4xl dark:text-yellow-400 text-cyan-700`}>Codd</h1>
                <p className={`${roboto_mono_italic.className} text-center text-sm md:text-base dark:text-white/80 text-gray-600`}>Design <b className='dark:text-yellow-400 text-cyan-700'>OLAP</b> databases like never before</p>
              </div>
              <div className={`${josefin_sans.className} text-sm md:text-base`}>
                <p className={` dark:text-white/80 text-center text-gray-600 `}>In 2 easy steps:</p>
                <p className={` dark:text-white/80 text-center text-gray-600 `}>1. Enter your <b className='dark:text-yellow-400 text-cyan-700'>business needs</b> </p>
                <p className={` dark:text-white/80 text-center text-gray-600 `}>2. Answer some questions related to your business need</p>
              </div>
            </motion.div>

            {/* StoneBreaker Section */}
            <motion.div 

              onClick={()=>handleRouteChange({href:"/stonebreaker"})}
              variants={gridItemVariants}
              whileHover="hover"
              className={[
                gridItemClasses,
                "md:row-span-4 md:col-span-2",
                "rounded-none md:rounded-tr-3xl",
                "border-t-0 md:border-t"
              ].join(' ')}
  
            >

<BrainCircuit className="w-12 h-12 md:w-16 md:h-16 dark:text-yellow-400 text-cyan-600" />
              <div className='felx flex-col mb-2'>
                <h1  className={`${space_mono.className} text-center text-2xl md:text-4xl dark:text-yellow-400 text-cyan-700`}>StoneBreaker</h1>
                <p className={`${roboto_mono_italic.className} text-center text-sm md:text-base dark:text-white/80 text-gray-600`}>Generate polished and optimized  <b className='dark:text-yellow-400 text-cyan-700'>SQL Queries</b> with <b className='dark:text-yellow-400'>natural language</b></p>
              </div>
              <div className={`${josefin_sans.className} text-sm md:text-base`}>
                <p className={` dark:text-white/80 text-center text-gray-600 `}>In 2 easy steps:</p>
                <p className={` dark:text-white/80 text-center text-gray-600 `}>1. Connect your database or just add your table generation query </p>
                <p className={` dark:text-white/80 text-center text-gray-600 `}>2. Enter the <b className='dark:text-yellow-400 text-cyan-700'>SQL prompt</b></p>
              </div>


            </motion.div>

            {/* Chamberlin Section */}
            <motion.div 

        onClick={()=>handleRouteChange({href:"/chamberlin"})}
              variants={gridItemVariants}
              whileHover="hover"
              className={[
                gridItemClasses,
                "md:row-span-4 md:col-span-3",
                "rounded-none md:rounded-bl-3xl",
                "border-t-0 md:border-t"
              ].join(' ')}
            >
              <Code className='w-12 h-12 md:w-16 md:h-16 dark:text-yellow-400 text-cyan-600'></Code>
              <div className='felx flex-col mb-2'>
                <h1 className={`${space_mono.className} text-center text-2xl md:text-4xl dark:text-yellow-400 text-cyan-700`}>Chamberlin</h1>
                <p className={`${roboto_mono_italic.className} text-sm md:text-base dark:text-white/80 text-gray-600 `}>Stuck while wrting an   <b className='dark:text-yellow-400 text-cyan-700'>query</b> or just bored out of it use Chamberlin</p>
              </div>
              <div className={`${josefin_sans.className} text-sm md:text-base`}>
                <p className={ `dark:text-white/80 text-center text-gray-600 `}>In a single step:</p>
                <p className={` dark:text-white/80 text-center text-gray-600 `}>1. Just start writing in our text editor</p>
              </div>
            </motion.div>

            {/* Selinger Section */}
            <motion.div 

        onClick={()=>handleRouteChange({href:"/selinger"})}
              variants={gridItemVariants}
              whileHover="hover"
            className={[
              gridItemClasses,
              "md:row-span-3 md:col-span-2",
              "rounded-b-3xl md:rounded-br-3xl md:rounded-bl-none",
              "border-t-0"
            ].join(' ')}
            >
               <ArrowRightLeft className='w-12 h-12 md:w-16 md:h-16 dark:text-yellow-400 text-cyan-600'></ArrowRightLeft>
               <div className='felx flex-col mb-2'>
                <h1 className={`${space_mono.className} text-center text-2xl md:text-4xl dark:text-yellow-400 text-cyan-700`}>Selinger</h1>
                <p className={`${roboto_mono_italic.className} dark:text-white/80 text-center text-sm md:text-base text-gray-600 `}>Take a query and convert it to the syntax of any database provider</p>
              </div>
              <div className={`${josefin_sans.className} text-sm md:text-base`} >
                <p className={` dark:text-white/80 text-center text-gray-600 `}>In 2 easy steps:</p>
                <p className={`dark:text-white/80 text-gray-600 text-center`}>1. Enter the <b className='dark:text-yellow-400 text-cyan-700'>query</b> to convert</p>
                <p className="dark:text-white/80 text-gray-600 text-center">2. Select the <b className='dark:text-yellow-400 text-cyan-700'>database provider</b></p>
              </div>
            </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Her