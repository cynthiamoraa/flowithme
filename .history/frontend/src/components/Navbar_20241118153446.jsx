import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold">MyApp</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="hamburger-line block w-6 h-0.5 bg-white mb-1"></span>
            <span className="hamburger-line block w-6 h-0.5 bg-white mb-1"></span>
            <span className="hamburger-line block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-600">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-600">
            About
          </a>
          <a href="#services" className="block px-4 py-2 hover:bg-gray-600">
            Services
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
