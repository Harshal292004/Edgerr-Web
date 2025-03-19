"use client";
import React, { useState } from "react";
import { useThemeStore } from "@/lib/store";
import { space_mono } from "@/lib/fonts";
import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard ,DatabaseBackup, Code} from "lucide-react";
import {
  Database,
  Plus,
  Send,
  ChevronLeft,
  ChevronRight,
  ServerCrash,
} from "lucide-react";
import { motion } from "framer-motion";


type database={
  id: string,
  name: string
}


const page = () => {
  const theme = useThemeStore((state) => state.theme);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [prompt, setPrompt] = useState("SELECT * FROM users WHERE");
  const [databases, setDatabases] = useState<database[]>([]);

  // Toggle sidebar collapse state
  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  // Handle prompt input change
  const handlePromptChange = (e:any) => setPrompt(e.target.value);

  // Handle prompt submission
  const handleSubmitPrompt = (e:any) => {
    e.preventDefault();
    // Process prompt here
    console.log("Processing prompt:", prompt);
  };

  // Mock function to add a database
  const handleAddDatabase = () => {
    const newDb = {
      id: `db-${databases.length + 1}`,
      name: `Database ${databases.length + 1}`
    };
    setDatabases([...databases, newDb]);
  };

  const router=useRouter()
  const handleRouteChange=({href}:{href:string})=>{
    router.push(href)
  }
  return (
    <div
      className="flex min-h-screen"
    >
      
      <div className="absolute inset-0 transition-all duration-500  bg-gradient-to-br from-cyan-400 via-blue-300 to-green-200  dark:from-black dark:via-gray-900 dark:to-black" />
      
      {/* Sidebar */}
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        className={`
          ${sidebarCollapsed ? "w-20" : "w-64"} 
          h-screen fixed left-0 top-0 
          transition-all duration-300 ease-in-out
          dark:border-r dark:border-white/5
          border-r border-gray-200/50 text-gray-800
          backdrop-blur-xl backdrop-saturate-150
          flex flex-col
        `}
      >
          {/* Navigation */}

          <nav className="mt-10 flex-1 px-2 py-4 space-y-2 overflow-y-auto">
            <div className="flex flex-col gap-2 justify-center items-center p-6">
              <motion.div
                onClick={() => {handleRouteChange({href:"/dashboard"})}}
                className={`cursor-pointer p-4 rounded-lg
            transition-all duration-300
            dark:hover:bg-yellow-400/20 dark:text-yellow-400 text-cyan-700
      hover:bg-cyan-500/20
            ${space_mono.className}
            flex items-center justify-center sm:justify-between
            w-full sm:w-auto`}
                whileHover="hover"
                whileTap="tap"
              >
                <LayoutDashboard className="mr-2 h-8 w-8" />
                {!sidebarCollapsed?   <p className="text-2xl">Dashboard</p>:null}
              </motion.div>

              <motion.div
                onClick={() => {handleRouteChange({href:"/codd/queries"})}}
                className={`cursor-pointer p-4 rounded-lg
      transition-all duration-300
      dark:hover:bg-yellow-400/20 dark:text-yellow-400 text-cyan-700
      hover:bg-cyan-500/20 
      ${space_mono.className}
      flex items-center justify-center sm:justify-between
      w-full sm:w-auto`}
                whileHover="hover"
                whileTap="tap"
              >
                <Code className="mr-2 h-8 w-8" />
                {!sidebarCollapsed?<p className="text-2xl">Queries</p>:null}
              </motion.div>

              <motion.div
                onClick={() => {handleRouteChange({href:"/codd/databases"})}}
                className={`cursor-pointer p-4 rounded-lg
      transition-all duration-300
     dark:hover:bg-yellow-400/20 dark:text-yellow-400 text-cyan-700
      hover:bg-cyan-500/20
      ${space_mono.className}
      flex items-center justify-center sm:justify-between
      w-full sm:w-auto`}
                whileHover="hover"
                whileTap="tap"
              >
                <DatabaseBackup className="mr-2 h-8 w-8" />
                {!sidebarCollapsed?<p className="text-2xl">Databases</p>:null}
              </motion.div>
            </div>
          </nav>

          {/* Toggle button */}
          <motion.button
        onClick={toggleSidebar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`
          p-2 rounded-full fixed bottom-8 right-8
          backdrop-blur-lg border
          dark:bg-black/20 dark:border-yellow-400/30 dark:hover:bg-yellow-400/10
          bg-white/30 border-cyan-600/30 hover:bg-cyan-500/10
          transition-all duration-300 shadow-lg
          z-50
         
        `}
      >
        {sidebarCollapsed ? (
          <ChevronRight className={` ${sidebarCollapsed?"ml-20":""} h-8 w-8 text-cyan-600 dark:text-yellow-400 `} />
        ) : (
          <ChevronLeft className={` ${sidebarCollapsed?"ml-20":""} h-8 w-8 text-cyan-600 dark:text-yellow-400 `}  />
        )}
      </motion.button>


        
     
      </motion.div>

      {/* Main content */}
      <div
        className={`
        flex-1 transition-all duration-300 
        ${sidebarCollapsed ? "ml-16" : "ml-64"}
      `}
      >
        {/* Codd Hero */}
        <div
          className={`
          p-8 ${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
              : "bg-gradient-to-r from-blue-50 to-purple-50"
          }
        `}
        >
          <h1
            className={`
            text-4xl font-bold ${space_mono.className}
            ${theme === "dark" ? "text-white" : "text-gray-800"}
          `}
          >
            
          </h1>
        </div>

        {/* Database connection section */}
        <div className="p-6">
          <h2
            className={`
            text-xl font-semibold mb-4
            ${theme === "dark" ? "text-white" : "text-gray-800"}
          `}
          >
            Connected Databases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* Add database card */}
            <div
              onClick={handleAddDatabase}
              className={`
                cursor-pointer
                flex flex-col items-center justify-center p-6 rounded-xl h-36
                backdrop-blur-md backdrop-saturate-150
                ${
                  theme === "dark"
                    ? "bg-black/20 border border-white/10 hover:bg-black/30"
                    : "bg-white/60 border border-gray-200/50 hover:bg-white/80"
                }
                transition-all duration-200
              `}
            >
              <div
                className={`
                p-3 rounded-full mb-2
                ${theme === "dark" ? "bg-blue-500/20" : "bg-blue-500/10"}
              `}
              >
                <Plus
                  className={
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }
                />
              </div>
              <p
                className={theme === "dark" ? "text-gray-300" : "text-gray-700"}
              >
                Connect Database
              </p>
            </div>

            {/* Connected databases */}
            {databases.map((db) => (
              <div
                key={db.id}
                className={`
                  flex flex-col p-6 rounded-xl h-36
                  backdrop-blur-md backdrop-saturate-150
                  ${
                    theme === "dark"
                      ? "bg-black/20 border border-white/10"
                      : "bg-white/60 border border-gray-200/50"
                  }
                `}
              >
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`
                    p-2 rounded-lg
                    ${
                      theme === "dark" ? "bg-purple-500/20" : "bg-purple-500/10"
                    }
                  `}
                  >
                    <Database
                      className={`h-5 w-5 ${
                        theme === "dark" ? "text-purple-400" : "text-purple-600"
                      }`}
                    />
                  </div>
                  <span
                    className={`
                    text-xs px-2 py-1 rounded-full
                    ${
                      theme === "dark"
                        ? "bg-white/10 text-white"
                        : "bg-black/10 text-gray-800"
                    }
                  `}
                  >
                     Tables
                  </span>
                </div>
                <h3
                  className={`font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {db.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Connected • MySQL
                </p>
                <div className="mt-auto flex justify-end">
                  <button
                    className={`
                    text-xs px-3 py-1 rounded
                    ${
                      theme === "dark"
                        ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                        : "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20"
                    }
                  `}
                  >
                    Query
                  </button>
                </div>
              </div>
            ))}

            {databases.length === 0 && (
              <div
                className={`
                flex flex-col items-center justify-center p-6 rounded-xl h-36 col-span-2
                backdrop-blur-md backdrop-saturate-150
                ${
                  theme === "dark"
                    ? "bg-black/20 border border-white/10"
                    : "bg-white/60 border border-gray-200/50"
                }
              `}
              >
                <ServerCrash
                  className={`mb-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <p
                  className={`text-center ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  No databases connected yet
                </p>
              </div>
            )}
          </div>

          {/* Prompt input */}
          <div className="mt-8">
            <h2
              className={`
              text-xl font-semibold mb-4
              ${theme === "dark" ? "text-white" : "text-gray-800"}
            `}
            >
              AI Database Assistant
            </h2>

            <form onSubmit={handleSubmitPrompt}>
              <div
                className={`
                relative rounded-xl overflow-hidden
                backdrop-blur-md backdrop-saturate-150
                ${
                  theme === "dark"
                    ? "bg-black/20 border border-white/10"
                    : "bg-white/60 border border-gray-200/50"
                }
              `}
              >
                <textarea
                  value={prompt}
                  onChange={handlePromptChange}
                  rows={4}
                  placeholder="Enter your database query or question..."
                  className={`
                    w-full p-4 resize-none outline-none
                    ${
                      theme === "dark"
                        ? "bg-transparent text-white placeholder:text-gray-500"
                        : "bg-transparent text-gray-800 placeholder:text-gray-400"
                    }
                  `}
                />
                <div className="flex justify-between items-center p-3 border-t bg-opacity-50 border-opacity-50 backdrop-blur-sm">
                  <div
                    className={
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }
                  >
                    <span className="text-xs">
                      Try: "Create a table for users with email and password" or
                      "Find all users who joined last month"
                    </span>
                  </div>
                  <button
                    type="submit"
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg
                      ${
                        theme === "dark"
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }
                      transition-all duration-200
                    `}
                  >
                    Process <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
