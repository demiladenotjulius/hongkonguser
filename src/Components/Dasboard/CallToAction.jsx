import React from 'react';
import image from './image.png'; 

const CallToActionSection = () => {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center">
    
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})` 
        }}
      >
        
        <div className="absolute inset-0 bg-opacity-60"></div>
      </div>
      
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
       
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Don't Wait—Join the Future Today!
        </h2>
        
       
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Sign up now to experience the comfort and innovation of premium investment.<br />
          Take advantage of our exclusive discount for the first 5,000<br />
          customers and start your journey in style!
        </p>
        
        
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 text-sm md:text-base">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default CallToActionSection;