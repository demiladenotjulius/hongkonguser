import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignUp = () => {
    navigate('/login');
  };
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-black tracking-wider hover:text-gray-600 transition-colors duration-200">
            TESLA
          </Link>
        </div>

        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-black font-semibold text-lg hover:text-gray-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            to="/Investment" 
            className="text-black font-semibold text-lg hover:text-gray-600 transition-colors duration-200"
          >
            Investment
          </Link>
          <Link 
            to="/Products" 
            className="text-black font-semibold text-lg hover:text-gray-600 transition-colors duration-200"
          >
            Tesla Products
          </Link>
          <Link 
            to="/Support" 
            className="text-black font-semibold text-lg hover:text-gray-600 transition-colors duration-200"
          >
            Support
          </Link>
          <Link 
            to="/Security" 
            className="text-black font-semibold text-lg hover:text-gray-600 transition-colors duration-200"
          >
            Security & Privacy
          </Link>
        </div>

        {/* Auth Buttons */}
       <div className="hidden md:flex items-center space-x-4">
  <Link 
    to="/login" 
    className="px-6 py-1 text-black font-semibold text-base border-2 border-gray-300 rounded-full hover:border-gray-400 hover:text-gray-600 transition-colors duration-200"
  >
    Login
  </Link>
  <button 
    onClick={handleSignUp}
    className="px-6 py-1 bg-red-800 text-white font-semibold text-base rounded-full hover:bg-red-700 transition-colors duration-200"
  >
    Sign Up
  </button>
</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-black hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
        <div className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-black font-semibold text-lg hover:text-gray-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/Investment" 
            className="text-black font-semibold text-lg hover:text-gray-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Investment
          </Link>
          <Link 
            to="/Products" 
            className="text-black font-semibold text-lg hover:text-gray-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tesla Products
          </Link>
          <Link 
            to="/Support" 
            className="text-black font-semibold text-lg hover:text-gray-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Support
          </Link>
          <Link 
            to="/Security" 
            className="text-black font-semibold text-lg hover:text-gray-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Security & Privacy
          </Link>
          <div className="flex flex-col space-y-2 pt-4">
            <Link 
              to="/login" 
              className="text-left text-black font-semibold text-lg hover:text-gray-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <button 
              onClick={() => {
                handleSignUp();
                setIsMobileMenuOpen(false);
              }}
              className="text-left px-6 py-2 bg-red-800 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition-colors duration-200"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;