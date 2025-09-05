import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-red-700 text-white p-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/Products" className="hover:underline">Products</Link>
          <Link to="/digital-services" className="hover:underline">Digital Services</Link>
          <Link to="/customer-care" className="hover:underline">Customer Care</Link>
          <Link to="/About" className="hover:underline">About Us</Link>
        </div>
      </div>
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-2 pb-2`}>
        <div className="flex flex-col space-y-2">
          <Link 
            to="/" 
            className="block px-4 py-2 text-white hover:bg-red-800"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/Products" 
            className="block px-4 py-2 text-white hover:bg-red-800"
            onClick={toggleMobileMenu}
          >
            Products
          </Link>
          <Link 
            to="/digital-services" 
            className="block px-4 py-2 text-white hover:bg-red-800"
            onClick={toggleMobileMenu}
          >
            Digital Services
          </Link>
          <Link 
            to="/customer-care" 
            className="block px-4 py-2 text-white hover:bg-red-800"
            onClick={toggleMobileMenu}
          >
            Customer Care
          </Link>
          <Link 
            to="/About" 
            className="block px-4 py-2 text-white hover:bg-red-800"
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;