

import './header.css';
import logo from '../images/logo.png';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <nav className='bg-blue-700'>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold"><img className="white-logo" src={logo} alt="" /></div>
        <div className="hidden md:flex space-x-4 text-white">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/services'>Services</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
          {isOpen && (
          <ImCross />
        )
      }
      {!isOpen &&(
        ( <GiHamburgerMenu />)
      )

      }
       
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute bg-black w-[100%] left-0 z-10">
          <div className="items-center">
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium border-b-2 block w-100">Home</Link>
            <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium border-b-2 block">About</Link>
            <Link to="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium border-b-2 block">Services</Link>
            <Link to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium block">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
