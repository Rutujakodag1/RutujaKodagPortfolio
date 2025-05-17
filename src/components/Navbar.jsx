import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import leetcode from '../assets/leetcode.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-white font-play uppercase">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a className="text-xl sm:text-2xl font-bold flex items-center gap-2" href="#">
          <i className="fa-solid fa-circle-play"></i>
          Rutuja Kodag
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
        {!isOpen && (
          <>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:items-center md:space-x-8 text-sm sm:text-base">
          <li><a href="/" className="hover:text-blue-500">Home</a></li>
          <li><a href="/about" className="hover:text-blue-500">About Me</a></li>
          <li><a href="/RutujaKodagResume.pdf" className="hover:text-blue-500">Resume</a></li>
          <li><a href="/skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="/contact" className="hover:text-blue-500">Contact Me</a></li>
        

        {/* Social Icons */}
        <li className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/Rutujakodag1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-500"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rutuja-kodag-878251285/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/kodagrutuja0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              className="w-6 h-6 fill-current translate-y-[2px]"
            >
              <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
            </svg>
          </a>

          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/profile/kodagrutuja0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HackerRank"
            className="hover:text-blue-500"
          >
            <i className="fa-brands fa-hackerrank"></i>
          </a>
        
        </li>
        </ul>
        </>
        )}
      </div>
        
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-6 pt-2 space-y-4 bg-darkBlue text-white text-sm sm:text-base">
          <ul className="space-y-4">
            <li><a href="/" className="block hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="block hover:text-blue-500">About Me</a></li>
            <a 
    href="/RutujaKodagResume.pdf" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block hover:text-blue-500"
  >
    Resume
  </a>            <li><a href="/skills" className="block hover:text-blue-500">Skills</a></li>
            <li><a href="/projects" className="block hover:text-blue-500">Project</a></li>
            <li><a href="/contact" className="block hover:text-blue-500">Contact Me</a></li>
          </ul>

          <div className="flex justify-center space-x-6 pt-4 text-lg">
            <a href="https://github.com/Rutujakodag1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/rutuja-kodag-878251285/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/kodagrutuja0" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="w-6 h-6 fill-current translate-y-[2px]">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
              </svg>
            </a>
            <a href="https://www.hackerrank.com/profile/kodagrutuja0" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <i className="fa-brands fa-hackerrank"></i>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
