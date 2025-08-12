import React, { useState } from 'react';

const TeslaFooter = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Subscription:', { firstName, email });
  };

  return (
    <footer className="bg-gray-900 text-white pt-24">
      {/* Newsletter Section */}
      <div className="relative">
        <div className="bg-gradient-to-r from-red-700 to-red-600 rounded-2xl mx-auto max-w-5xl -mb-16 relative z-10">
          {/* Decorative Elements */}
          <div className="absolute top-3 left-3 w-12 h-12 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-3 right-3 w-16 h-16 border-2 border-white/20 rounded-full"></div>
          
          <div className="px-8 py-8 text-center relative z-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Subscribe to our newsletter
            </h2>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                onClick={handleSubscribe}
                className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-24 pb-8 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Decorative Line with Logo */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-gray-600"></div>
            <div className="mx-8">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-600 to-gray-600"></div>
          </div>

          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 ml-28">
            {/* Tesla Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4 tracking-wider">TESLA</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Invest in Tesla, crypto, and future tech. Secure, rewarding, and built for believers in innovation.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-red-400 font-semibold mb-4 text-sm uppercase tracking-wider">COMPANY</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Investment</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Tesla Product</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">FAQ's</a></li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="text-red-400 font-semibold mb-4 text-sm uppercase tracking-wider">HELP</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Customer Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Delivery Details</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-red-400 font-semibold mb-4 text-sm uppercase tracking-wider">RESOURCES</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Free eBooks</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Ride Tutorial</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">How to - Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-center text-gray-400 text-sm">
              © Copyright 2025, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TeslaFooter;