'use client';
import React from 'react';
import {motion} from 'framer-motion';

const Navbar = () => {
  const handleResumeClick = () => {
    window.open('/docs/resume', '_blank');
  };

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 border-b border-gray-500"
      
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 3 }}
    >

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <a href={"/"} className="flex items-center space-x-4">
            <img src="/img/logo.png" alt="Marcos Logo" className="h-11 w-11 rounded-full" />
            <div className="text-white space-x-2">
              {/* <a href={"/"} className="text-gray-300 hover:text-white border-b">Home</a>
              <a href={"/#projects"} className="text-gray-300 hover:text-white border-b">Projects</a>
              <a href={"/#contact"} className="text-gray-300 hover:text-white border-b">Contact</a> */}
            </div>
          </a>
          <button 
            onClick={handleResumeClick} 
            className="ml-auto text-white border border-pink-700 px-4 py-2 rounded transition duration-300 ease-in-out transform hover:bg-pink-700 hover:text-white active:bg-pink-900"
          >
            My Resume
          </button>
        </div>
      </div>

    </motion.nav>
  );
};

export default Navbar;