"use client";
import React, { useState } from "react";
import { fira_code, josefin_sans, roboto_mono, space_mono } from "@/lib/fonts";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  DatabaseBackup,
  FileChartPie,
  Database,
  Code,
  ArrowUp,
  Mic,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

type database = {
  id: string;
  name: string;
};

const page = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [databases, setDatabases] = useState<database[]>([]);
  const [isPromptSubmitted, setIsPromptSubmitted] = useState(false);
  // Toggle sidebar collapse state
  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  // Handle prompt input change
  const handlePromptChange = (e: any) => setPrompt(e.target.value);

  // Handle prompt submission
  const handleSubmitPrompt = () => {
    if (prompt.trim()) {
      setIsPromptSubmitted(true);
      // Process prompt here
      console.log("Processing prompt:", prompt);
    }
  };

  // Mock function to add a database
  const handleAddDatabase = () => {
    const newDb = {
      id: `db-${databases.length + 1}`,
      name: `Database ${databases.length + 1}`,
    };
    setDatabases([...databases, newDb]);
  };

  const router = useRouter();
  const handleRouteChange = ({ href }: { href: string }) => {
    router.push(href);
  };
  return (
    <div className="flex min-h-screen">
      <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-br from-cyan-400 via-blue-300 to-green-200 dark:from-black dark:via-gray-900 dark:to-black" />

      {/* Sidebar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
              onClick={() => {
                handleRouteChange({ href: "/dashboard" });
              }}
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
              {!sidebarCollapsed ? <p className="text-2xl">Dashboard</p> : null}
            </motion.div>

            <motion.div
              onClick={() => {
                handleRouteChange({ href: "/codd/queries" });
              }}
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
              {!sidebarCollapsed ? <p className="text-2xl">Queries</p> : null}
            </motion.div>

            <motion.div
              onClick={() => {
                handleRouteChange({ href: "/codd/databasesgenerated" });
              }}
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
              <Database className="mr-2 h-8 w-8" />
              {!sidebarCollapsed ? <p className="text-2xl">Databases Generated</p> : null}
            </motion.div>

             <motion.div
              onClick={() => {
                handleRouteChange({ href: "/codd/erdiagrams" });
              }}
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
              <FileChartPie className="mr-2 h-8 w-8" />
              {!sidebarCollapsed ? <p className="text-2xl">ER Diagrams</p> : null}
            </motion.div>
            
          </div>
        </nav>

        {/* Toggle button */}
        <motion.button
          onClick={toggleSidebar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`
            p-2 rounded-full fixed bottom-8 right-4
            backdrop-blur-lg border
            dark:bg-black/20 dark:border-yellow-400/30 dark:hover:bg-yellow-400/10
            bg-white/30 border-cyan-600/30 hover:bg-cyan-500/10
            transition-all duration-300 shadow-lg
            z-50
            
          `}
        >
          {sidebarCollapsed ? (
            <ChevronRight
              className={`h-8 w-8 text-cyan-600 dark:text-yellow-400`}
            />
          ) : (
            <ChevronLeft
              className={`h-8 w-8 text-cyan-600 dark:text-yellow-400`}
            />
          )}
        </motion.button>
      </motion.div>

      {/*Main Content*/}
      <motion.div
        className={`flex flex-col items-center justify-start w-full min-h-screen pt-20 transition-all duration-300 ${
          sidebarCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        {/* Animated StoneBreaker Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`transition-all duration-500 z-30 ${
            isPromptSubmitted
              ? `fixed ${sidebarCollapsed ? "left-20" : "left-60"} top-20`
              : "relative mb-8"
          }`}
        >
          <motion.div
            animate={{
              opacity: isPromptSubmitted ? 0.7 : 1,
              scale: isPromptSubmitted ? 0.7 : 1,
            }}
            className="text-center"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`${space_mono.className} text-5xl font-bold mb-2
        dark:text-yellow-400 text-cyan-600`}
            >
              Codd
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`${josefin_sans.className} dark:text-gray-300 text-gray-600 text-xl`}
            >
              Make efficient and fast <b className="dark:text-yellow-400 text-cyan-600">OLAP</b> databases 
            </motion.p>
          </motion.div>
        </motion.div>
{/* Results area - appears after submission */}
{isPromptSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-3xl mt-6 px-4 mb-16"
          >
            <div
              className="w-full rounded-xl shadow-lg border dark:border-gray-700 border-gray-300
                  bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 min-h-64"
            >
              <h2
                className={`${space_mono.className} text-xl font-bold mb-4 dark:text-yellow-400 text-cyan-600`}
              >
                Query Results
              </h2>
              <p
                className={`${fira_code.className} text-gray-600 dark:text-gray-300`}
              >
                Your SQL query results will appear here...
              </p>
            </div>
          </motion.div>
        )}
        {/* Input Container */}
        <motion.div
          className={`w-full max-w-3xl px-4 ${
            isPromptSubmitted ? "mt-8" : "mt-4"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div
            className={`w-full rounded-xl shadow-lg border dark:border-gray-700 border-gray-300
                bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm
                focus-within:ring-2 focus-within:ring-cyan-500 dark:focus-within:ring-yellow-400
                text-cyan-600 dark:text-yellow-400 overflow-hidden`}
          >
            <textarea
              value={prompt}
              onChange={handlePromptChange}
              placeholder="Enter your SQL prompt here..."
              className={`w-full p-4 min-h-16 bg-transparent resize-none
                    focus:outline-none
                    text-cyan-600 dark:text-yellow-400 text-lg ${fira_code.className}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.ctrlKey) {
                  handleSubmitPrompt();
                }
              }}
            />

            <div className="flex flex-row justify-between p-2 border-t dark:border-gray-700 border-gray-300">
              <div className="flex flex-row items-center gap-2">
                <motion.button
                  className={`cursor-pointer p-3 rounded-lg
                    transition-all duration-300
                    dark:hover:bg-yellow-400/20 dark:text-yellow-400 text-cyan-700
                    hover:bg-cyan-500/20 ${space_mono.className}
                    flex items-center justify-center`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mic className="h-5 w-5" />
                </motion.button>

                <motion.button
                  onClick={handleSubmitPrompt}
                  className={`cursor-pointer p-3 rounded-lg
                    transition-all duration-300
                    dark:hover:bg-yellow-400/20 dark:text-yellow-400 text-cyan-700
                    hover:bg-cyan-500/20 ${space_mono.className}
                    flex items-center justify-center`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        
      </motion.div>
    </div>
  );
};

export default page;

