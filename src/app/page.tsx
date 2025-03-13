"use client"
import React from 'react';
import { useThemeStore } from '@/lib/store';
import { space_mono, space_mono_italic } from '@/lib/fonts';
import { Github, ArrowRight, Zap, Shield, Code, Database } from 'lucide-react';

export default function Home() {
  const theme = useThemeStore(state => state.theme);
  // Mock state for user authentication status
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  // Toggle login status for demonstration
  const toggleLoginStatus = () => setIsLoggedIn(!isLoggedIn);
  
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className={`
        relative py-20 px-4 md:px-8 
        ${theme === "dark" ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" : "bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50"}
      `}>
        {/* Glass shapes decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`
            absolute top-20 right-10 w-64 h-64 rounded-full 
            ${theme === "dark" ? "bg-purple-500/10" : "bg-blue-500/10"} 
            blur-3xl
          `}></div>
          <div className={`
            absolute bottom-10 left-10 w-64 h-64 rounded-full 
            ${theme === "dark" ? "bg-blue-500/10" : "bg-purple-500/10"} 
            blur-3xl
          `}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex-1 space-y-6">
              <h1 className={`
                text-5xl md:text-7xl font-bold ${space_mono.className}
                ${theme === "dark" 
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" 
                  : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"}
              `}>
                Edgerr
              </h1>
              <p className={`
                text-lg md:text-xl max-w-md
                ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
              `}>
                The next generation platform for streamlined development workflows and enhanced productivity.
              </p>
              <button className={`
                group flex items-center gap-2 px-6 py-3 rounded-lg
                ${theme === "dark" 
                  ? "bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md" 
                  : "bg-black/10 hover:bg-black/20 text-gray-800 border border-black/10 backdrop-blur-md"}
                transition-all duration-300
              `}>
                <Github className="h-5 w-5" />
                View on Github
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className={`
              p-6 rounded-xl w-full max-w-md
              backdrop-blur-xl backdrop-saturate-150
              ${theme === "dark" 
                ? "bg-black/10 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
                : "bg-white/20 border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.2)]"}
            `}>
              <h2 className={`text-xl font-semibold mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                {isLoggedIn ? "Welcome back!" : "Get started with Edgerr"}
              </h2>
              
              {isLoggedIn ? (
                <button onClick={toggleLoginStatus} className={`
                  w-full py-3 px-6 rounded-lg font-medium 
                  ${theme === "dark" 
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white" 
                    : "bg-gradient-to-r from-blue-600 to-purple-700 hover:opacity-90 text-white"}
                  transition-all duration-300
                `}>
                  Go to Dashboard
                </button>
              ) : (
                <div className="space-y-4">
                  <button onClick={toggleLoginStatus} className={`
                    w-full py-3 px-6 rounded-lg font-medium
                    ${theme === "dark" 
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white" 
                      : "bg-gradient-to-r from-blue-600 to-purple-700 hover:opacity-90 text-white"}
                    transition-all duration-300
                  `}>
                    Login
                  </button>
                  <button onClick={toggleLoginStatus} className={`
                    w-full py-3 px-6 rounded-lg font-medium 
                    ${theme === "dark" 
                      ? "bg-white/10 hover:bg-white/20 text-white border border-white/10" 
                      : "bg-black/10 hover:bg-black/20 text-gray-800 border border-black/10"}
                    transition-all duration-300
                  `}>
                    Signup
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Uneven Grid */}
      <section className={`py-20 px-4 md:px-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className={`
            text-3xl md:text-4xl font-bold text-center mb-16 ${space_mono.className}
            ${theme === "dark" ? "text-white" : "text-gray-800"}
          `}>
            Powerful Modules
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Codd Module */}
            <div className={`
              p-6 rounded-xl h-full
              backdrop-blur-md backdrop-saturate-150
              ${theme === "dark" 
                ? "bg-black/30 border border-white/5 shadow-lg" 
                : "bg-white/70 border border-gray-200/50 shadow-md"}
            `}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`
                  p-3 rounded-lg
                  ${theme === "dark" ? "bg-blue-500/20" : "bg-blue-500/10"}
                `}>
                  <Database className={theme === "dark" ? "text-blue-400" : "text-blue-600"} />
                </div>
                <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Codd Module
                </h3>
              </div>
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                Advanced database management system with intelligent query optimization and automated schema migrations.
              </p>
            </div>
            
            {/* Stone Breaker Module */}
            <div className={`
              p-6 rounded-xl h-full
              backdrop-blur-md backdrop-saturate-150
              ${theme === "dark" 
                ? "bg-black/30 border border-white/5 shadow-lg" 
                : "bg-white/70 border border-gray-200/50 shadow-md"}
            `}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`
                  p-3 rounded-lg
                  ${theme === "dark" ? "bg-purple-500/20" : "bg-purple-500/10"}
                `}>
                  <Shield className={theme === "dark" ? "text-purple-400" : "text-purple-600"} />
                </div>
                <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Stone Breaker Module
                </h3>
              </div>
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                Enterprise-grade security framework with zero-trust architecture and real-time threat intelligence.
              </p>
            </div>
            
            {/* Chamberlin Module */}
            <div className={`
              p-6 rounded-xl h-full
              backdrop-blur-md backdrop-saturate-150
              ${theme === "dark" 
                ? "bg-black/30 border border-white/5 shadow-lg" 
                : "bg-white/70 border border-gray-200/50 shadow-md"}
            `}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`
                  p-3 rounded-lg
                  ${theme === "dark" ? "bg-green-500/20" : "bg-green-500/10"}
                `}>
                  <Zap className={theme === "dark" ? "text-green-400" : "text-green-600"} />
                </div>
                <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Chamberlin Module
                </h3>
              </div>
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                Performance optimization engine that dynamically scales resources based on usage patterns and workload demands.
              </p>
            </div>
            
            {/* Selinger Module */}
            <div className={`
              p-6 rounded-xl h-full
              backdrop-blur-md backdrop-saturate-150
              ${theme === "dark" 
                ? "bg-black/30 border border-white/5 shadow-lg" 
                : "bg-white/70 border border-gray-200/50 shadow-md"}
            `}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`
                  p-3 rounded-lg
                  ${theme === "dark" ? "bg-amber-500/20" : "bg-amber-500/10"}
                `}>
                  <Code className={theme === "dark" ? "text-amber-400" : "text-amber-600"} />
                </div>
                <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Selinger Module
                </h3>
              </div>
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                Smart code generation and refactoring tools powered by AI to accelerate development and reduce technical debt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}