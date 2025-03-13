"use client"
import React from 'react';
import { useThemeStore } from '@/lib/store';
const Navbar = () => {

  const theme= useThemeStore(state=> state.theme)
  const toggleTheme= useThemeStore(state=>state.toggleTheme)
  
  // Function to handle the theme toggle
  const handleThemeToggle = () => {
    document.getElementById('root')?.classList.toggle('dark');
  };

  return (
    <div>
      Navbar
      <button className='cursor-pointer  dark:bg-amber-300' onClick={handleThemeToggle}>
        Hello
      </button>
    </div>
  );
};

export default Navbar;
