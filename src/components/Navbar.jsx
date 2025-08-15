import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="font-play uppercase shadow border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a className="text-xl dark:text-white sm:text-2xl font-bold flex items-center gap-2" href="#">
          <i className="fa-solid fa-circle-play"></i> Rutuja Kodag
        </a>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-8 text-sm sm:text-base">
          <li><a href="/" className="hover:text-blue-500 dark:text-white">Home</a></li>
          <li><a href="/about" className="hover:text-blue-500 dark:text-white">About Me</a></li>
          <li><a href="/RutujaKodagResume.pdf" className="hover:text-blue-500 dark:text-white">Resume</a></li>
          <li><a href="/skills" className="hover:text-blue-500 dark:text-white">Skills</a></li>
          <li><a href="/projects" className="hover:text-blue-500 dark:text-white">Projects</a></li>
          <li><a href="/experience" className="hover:text-blue-500 dark:text-white">Experience</a></li>
          <li><a href="/contact" className="hover:text-blue-500 dark:text-white">Contact Me</a></li>

          {/* Theme Toggle */}
          <li>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={darkMode} onChange={toggleTheme} className="sr-only peer"/>
              <div className="w-20 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 
                peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500
                after:content-['☀️'] after:absolute after:top-1 after:left-1 
                after:bg-white after:rounded-full after:h-8 after:w-8 
                after:flex after:items-center after:justify-center 
                after:transition-all after:duration-500 
                peer-checked:after:translate-x-10 
                peer-checked:after:content-['🌙'] after:shadow-md after:text-lg">
              </div>
            </label>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-6 pt-2 space-y-4 bg-gray-900 text-white text-sm sm:text-base">
          <ul className="space-y-4">
            <li><a href="/" className="block hover:text-blue-400 dark:text-white">Home</a></li>
            <li><a href="/about" className="block hover:text-blue-400 dark:text-white">About Me</a></li>
            <li><a href="/RutujaKodagResume.pdf" className="block hover:text-blue-400 dark:text-white">Resume</a></li>
            <li><a href="/skills" className="block hover:text-blue-400 dark:text-white">Skills</a></li>
            <li><a href="/projects" className="block hover:text-blue-400 dark:text-white">Projects</a></li>
            <li><a href="/experience" className="block hover:text-blue-400 dark:text-white">Experience</a></li>
            <li><a href="/contact" className="block hover:text-blue-400 dark:text-white">Contact Me</a></li>
          </ul>
          <div className="flex justify-center pt-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={darkMode} onChange={toggleTheme} className="sr-only peer"/>
              <div className="w-20 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 
                peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500
                after:content-['☀️'] after:absolute after:top-1 after:left-1 
                after:bg-white after:rounded-full after:h-8 after:w-8 
                after:flex after:items-center after:justify-center 
                after:transition-all after:duration-500 
                peer-checked:after:translate-x-10 
                peer-checked:after:content-['🌙'] after:shadow-md after:text-lg">
              </div>
            </label>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
