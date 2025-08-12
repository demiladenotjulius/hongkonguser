import React from 'react';

const TeslaProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Tesla Model 3",
      subtitle: "Compact Executive Sedan",
      rating: 5.0,
      seats: "4 seats",
      features: "Air Conditioner",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Starlink",
      subtitle: "Version 2.0",
      rating: 5.0,
      features: "Faster Network",
      subFeatures: "Wide Range Coverage",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Tesla Model X",
      subtitle: "Mid-Size Luxury SUV",
      rating: 5.0,
      seats: "7 seats",
      features: "Air Conditioner",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=250&fit=crop"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-black group-hover:text-white fill-current transition-colors duration-300" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-medium text-black group-hover:text-white transition-colors duration-300">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-sm text-gray-600 font-medium">Exclusive Deals Await</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Tesla Products Available
          </h1>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our range of Tesla Product, offering the perfect balance of innovation, 
            performance and style From RoboVan to Robotaxi, find the ideal car for your journey.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white hover:bg-red-700 text-black hover:text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              
              <div className="mb-4">
                <StarRating rating={product.rating} />
              </div>

              
              <div className="mb-6 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>

              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1 text-black group-hover:text-white transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm mb-4 text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                  {product.subtitle}
                </p>

                
                <div className="space-y-2">
                  {product.seats && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-black group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                      <span className="text-sm text-black group-hover:text-white transition-colors duration-300">{product.seats}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-black group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm text-black group-hover:text-white transition-colors duration-300">{product.features}</span>
                  </div>
                  {product.subFeatures && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-black group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-black group-hover:text-white transition-colors duration-300">{product.subFeatures}</span>
                    </div>
                  )}
                </div>
              </div>

             
              <button className="w-full bg-black group-hover:bg-white text-white group-hover:text-black py-3 px-6 rounded-lg font-semibold text-sm hover:opacity-90 transition-all duration-300">
                Buy now
              </button>
            </div>
          ))}
        </div>

       
        <div className="text-center">
          <button className="text-red-500 hover:text-red-600 font-medium text-sm underline transition-colors duration-200">
            See all
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeslaProductsSection;