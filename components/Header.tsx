"use client"; 
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const SoulDeedsLogo: React.FC = () => (
  <div className="flex items-center space-x-2 ml-4 lg:ml-20"> {/* Left spacing responsive */}
    <img src="/images/logo.png" alt="Soul Deeds Logo" className="w-24 h-10 lg:w-30 lg:h-10" /> {/* Logo size responsive */}
    {/* <span className="text-2xl font-bold text-gray-800">Soul Deeds</span> */}
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 py-4 flex justify-between items-center">
        <SoulDeedsLogo />
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              href="#"
              key={link}
              className="text-gray-600 hover:text-[#8B268F] transition-colors duration-300 text-sm sm:text-base"
            >
              {link}
            </a>
          ))}
        </nav>
        
        {/* Desktop Get Started Button */}
        <a
          href="#"
          className="hidden lg:inline-block bg-[#8B268F] text-white font-semibold px-4 sm:px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg mr-4 sm:mr-6 lg:mr-10 text-sm sm:text-base"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-[#8B268F] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <nav className="container mx-auto px-4 sm:px-6 pt-4 pb-6 flex flex-col items-start space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                href="#"
                key={link}
                className="text-gray-600 hover:text-[#8B268F] transition-colors duration-300 text-lg w-full"
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="w-full text-center bg-[#8B268F] text-white font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg mt-2"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

