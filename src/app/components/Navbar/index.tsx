import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 border-b border-gray-500">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <img src="/img/logo.png" alt="Marcos Logo" className="h-11 w-11 rounded-full" />
          <div className="flex space-x-4 text-white">
            {/* <a className=' text-white' href="https://google.com">Dashboard</a>
            <a className=' text-white' href="#">About</a>
            <a className=' text-white' href="#">Projects</a>
            <a className=' text-white ' href="#">Contact</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;