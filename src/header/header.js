

import './header.css';
import logo from '../images/logo.png';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold"><img className="white-logo" src={logo} alt="" /></div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
              <button>button</button>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
