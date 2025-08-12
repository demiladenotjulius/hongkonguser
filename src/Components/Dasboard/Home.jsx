import React, { useState } from 'react';
import { ArrowRight, Search, TrendingUp, TrendingDown, Truck } from 'lucide-react';
import ProductAvailable from "../Dasboard/ProductAvailable"
import CallToActionSection from './CallToAction';
import Footer from "../Footer/Footer"
import bg from "./bg.png"
import tesla from "./truck.png"
import testing from "./test.png"

const Home = () => {
  const [selectedPlan, setSelectedPlan] = useState('Gold'); // Default Gold is selected
  const [clickedPlan, setClickedPlan] = useState(''); // Track which card was just clicked

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setClickedPlan(plan);
    // Remove the effect after animation
    setTimeout(() => setClickedPlan(''), 2000);
  };

  const marketTrendData = [
    { symbol: '$TSLA', name: 'Tesla, Inc.', price: '$8594', change: '2,540', trend: 'up' },
    { symbol: '$NVDA', name: 'Nvidia', price: '$57207', change: '2,304', trend: 'down' },
    { symbol: '$PLUG', name: 'Plug Power', price: '$71129', change: '1,320', trend: 'down' },
    { symbol: '$QCOM', name: 'Qualcomm', price: '$18661', change: '2,140', trend: 'up' },
    { symbol: '$LTHM', name: 'Livent Corp', price: '$37166', change: '1,976', trend: 'up' },
    { symbol: '$BLNK', name: 'Blink Charging Co.', price: '$72650', change: '1,903', trend: 'down' },
  ];

  const assetsData = [
    { symbol: 'T', name: 'Tesla, Inc.', ticker: '$TSLA', amount: '0.14', value: '$4,455.2' },
    { symbol: 'D', name: 'Doge', ticker: 'Dogecoin', amount: '4.65', value: '$1,888.2' },
    { symbol: 'N', name: 'Nvidia', ticker: '$NVDA', amount: '0.14', value: '$4,455.2' },
  ];

  return (
   <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full">
        <img 
          src={bg} 
          alt="Tesla Cybertruck" 
          className="w-full h-[700px]"
        />
        
        {/* Content Overlay */}
        <div className="absolute top-24 flex flex-col w-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
          
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-end px-6 py-20">
            <div className="max-w-6xl mx-auto w-full flex justify-end">
              
              {/* Right Content */}
              <div className="text-right max-w-lg">
                <h1 className="font-bold mb-8" style={{ fontSize: '60px', lineHeight: '1.1' }}>
                  <span className="text-black">Invest in Tesla. Own the </span>
                  <span className="text-red-600">Future.</span>
                </h1>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-full hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                    Start Investing
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-full hover:bg-gray-50 transition-all duration-300 border-2 border-red-600 flex items-center justify-center gap-2">
                    Explore More
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Bottom Investment Bar */}
          <div className="flex items-center justify-center py-8">
            <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 px-6 py-3 items-center rounded-[5px] ml-24">   
              <div className="max-w-6xl mx-auto flex items-center gap-8">          
                {/* Tesla */}     
                <div className="flex items-center gap-3">       
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">         
                    <span className="text-white font-bold text-sm">T</span>       
                  </div>       
                  <div>         
                    <h3 className="font-bold text-black text-sm">Tesla</h3>         
                    <p className="text-xs text-gray-400">302.63 USD</p>       
                  </div>       
                  <div className="w-6 h-4 bg-green-500 rounded-sm"></div>     
                </div>          
                
                {/* Doge */}     
                <div className="flex items-center gap-3">       
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">         
                    <span className="text-white font-bold text-sm">D</span>       
                  </div>       
                  <div>         
                    <h3 className="font-bold text-black text-sm">Doge</h3>         
                    <p className="text-xs text-gray-400">0.20USD</p>       
                  </div>       
                  <div className="w-6 h-4 bg-red-500 rounded-sm"></div>     
                </div>          
                
                {/* SpaceX */}     
                <div className="flex items-center gap-3">       
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">         
                    <span className="text-white font-bold text-sm">✕</span>       
                  </div>       
                  <div>         
                    <h3 className="font-bold text-black text-sm">SpaceX & Emerging Tech</h3>         
                    <p className="text-xs text-gray-400">$246.30 per share</p>       
                  </div>       
                  <div className="w-6 h-4 bg-green-500 rounded-sm"></div>     
                </div>          
                
                {/* Spacer to push buttons to right */}     
                <div className="flex-1"></div>          
                
                {/* Action Buttons */}     
                <div className="flex gap-3">       
                  <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-colors">         
                    Invest       
                  </button>       
                  <button className="px-6 py-2 bg-white text-red-600 border border-red-600 rounded-lg font-bold text-sm hover:bg-red-50 transition-colors">         
                    Learn More       
                  </button>     
                </div>        
              </div> 
            </div>
          </div>
          
        </div>
      </div>

      {/* Tesla Tech Portfolio Section + How It Works Section - Unified Gray Background */}
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Tesla Tech Portfolio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            {/* Left Side - Content */}
            <div className="space-y-6">
              {/* Header Section */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Build Your Tesla Tech Portfolio
                </h1>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                    Select Stocks or Crypto
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                    Set investment amount
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                    Choose plan duration
                  </li>
                </ul>
              </div>

              {/* Market Trend Section */}
              <div className="bg-gray-800 rounded-2xl p-4 text-white max-w-md">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="font-normal" style={{ fontFamily: 'Inter', fontSize: '11.73px', fontWeight: '400', lineHeight: '16.75px', letterSpacing: '0.37px' }}>Market Trend</h2>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3" style={{ fontFamily: 'Inter', fontSize: '11.73px', fontWeight: '400', lineHeight: '16.75px', letterSpacing: '0.37px', color: '#9CA3AF' }}>
                  <div>Name</div>
                  <div className="text-center">Last Price</div>
                  <div className="text-right">24h Change</div>
                </div>
                <div className="space-y-2">
                  {marketTrendData.map((stock, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 items-center" style={{ fontFamily: 'Inter', fontSize: '11.73px', fontWeight: '400', lineHeight: '16.75px', letterSpacing: '0.37px' }}>
                      <div>
                        <div className="font-medium">{stock.symbol}</div>
                        <div className="text-gray-400" style={{ fontSize: '10px' }}>{stock.name}</div>
                      </div>
                      <div className="text-center text-gray-300">{stock.price}</div>
                      <div className="text-right flex items-center justify-end">
                        <span className="mr-1">{stock.change}</span>
                        {stock.trend === 'up' ? (
                          <TrendingUp className="w-3 h-3 text-green-500" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assets Section */}
              <div className="bg-gray-800 rounded-2xl p-4 text-white max-w-md">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="font-normal" style={{ fontFamily: 'Inter', fontSize: '11.73px', fontWeight: '400', lineHeight: '16.75px', letterSpacing: '0.37px' }}>Assets</h2>
                  <Search className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-3">
                  {assetsData.map((asset, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mr-2 font-semibold" style={{ fontFamily: 'Inter', fontSize: '10px', fontWeight: '400', lineHeight: '16.75px', letterSpacing: '0.37px' }}>
                          {asset.symbol}
                        </div>
                        <div>
                          <div className="font-medium" style={{ fontFamily: 'Inter', fontSize: '11.73px', fontWeight: '400', lineHeight: '16.75px', letterSpacing: '0.37px' }}>{asset.name}</div>
                          <div className="text-gray-400" style={{ fontFamily: 'Inter', fontSize: '10px', fontWeight: '400', lineHeight: '16.75px', letterSpacing: '0.37px' }}>{asset.ticker}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold" style={{ fontFamily: 'Inter', fontSize: '11.73px', fontWeight: '400', lineHeight: '16.75px', letterSpacing: '0.37px' }}>{asset.amount}</div>
                        <div className="text-gray-400" style={{ fontFamily: 'Inter', fontSize: '10px', fontWeight: '400', lineHeight: '16.75px', letterSpacing: '0.37px' }}>{asset.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors">
                  Get Started →
                </button>
                <button className="border border-red-600 text-red-600 px-6 py-3 rounded-full font-medium hover:bg-red-50 transition-colors">
                  Learn More ●
                </button>
              </div>
            </div>

            {/* Right Side - Tesla Image */}
            <div className="lg:pl-8">
              <div className="bg-gray-300 rounded-2xl overflow-hidden">
                <img 
                  src={tesla} 
          alt="Tesla Cybertruck" 
          className="w-full h-[700px]"
                />
              </div>
            </div>
          </div>

          {/* How It Works Section - Now within same gray background */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - How It Works Content */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 bg-red-600 rounded-sm"></div>
                  <span className="text-red-600 font-medium text-sm">Effortless Booking Process</span>
                </div>
                <h2 className="text-4xl font-bold text-black mb-8">How It Works</h2>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-black mb-2" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '500', lineHeight: '100%', letterSpacing: '0%' }}>Sign Up or Log In</h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '500', lineHeight: '100%', letterSpacing: '0%' }}>Create an account using your email<br />or connect a crypto wallet.</p>
                  </div>
                </div>

                {/* Dotted line */}
                <div className="ml-6 h-4 border-l-2 border-dotted border-gray-300"></div>

                {/* Step 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-black mb-2" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '500', lineHeight: '100%', letterSpacing: '0%' }}>Explore & Choose</h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '500', lineHeight: '100%', letterSpacing: '0%' }}>Browse the marketplace for Tesla<br />vehicles, Starlink kits, or Neuralink<br />reservations.</p>
                  </div>
                </div>

                {/* Dotted line */}
                <div className="ml-6 h-4 border-l-2 border-dotted border-gray-300"></div>

                {/* Step 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-black mb-2" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '500', lineHeight: '100%', letterSpacing: '0%' }}>Book & Checkout</h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '500', lineHeight: '100%', letterSpacing: '0%' }}>Customize your order, select<br />payment method, and confirm.</p>
                  </div>
                </div>

                {/* Dotted line */}
                <div className="ml-6 h-4 border-l-2 border-dotted border-gray-300"></div>

                {/* Step 4 */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-black mb-2" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '500', lineHeight: '100%', letterSpacing: '0%' }}>Engage & Earn</h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '500', lineHeight: '100%', letterSpacing: '0%' }}>Join the community, share your<br />setups, and track your rewards.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Tesla Image */}
            <div className="lg:pl-8">
              <div className="rounded-2xl overflow-hidden">
                <img 
                   src={testing} 
          alt="Tesla Cybertruck" 
          className="w-full h-[700px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop&crop=center" 
          alt="Tesla Model 3" 
          className="w-full h-full object-cover"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content Overlay - Right Side */}
        <div className="absolute inset-0 flex items-center justify-end px-6 lg:px-12">
          <div className="max-w-2xl text-white">
            {/* Features Header */}
            <h1 className="text-6xl lg:text-7xl font-medium mb-6" style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '72px', lineHeight: '100%', letterSpacing: '0%' }}>
              Features
            </h1>
            
            {/* Description */}
            <div className="mb-8 space-y-4">
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '19px', lineHeight: '100%', letterSpacing: '0%' }}>
                An all-in-one futuristic ecosystem for tech enthusiasts, investors, and loyal fans of Elon Musk's innovations.
              </p>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '19px', lineHeight: '100%', letterSpacing: '0%' }}>
                It will evolve beyond just a marketplace, into a tech-driven lifestyle platform where users can:
              </p>
            </div>
            
            {/* Feature List */}
            <div className="space-y-3 mb-12">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg" style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '19px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Invest, shop, trade, and earn rewards seamlessly
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg" style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '19px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Share interests in Tesla, SpaceX, and crypto
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg" style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '19px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Experience immersive features like livestreams, AR Tesla showrooms, and AI-powered portfolio tools
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg" style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '19px', lineHeight: '100%', letterSpacing: '0%' }}>
                  Stay ahead through privacy-first systems and blockchain-based identity
                </p>
              </div>
            </div>
            
            {/* User Count */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white font-bold">👤</span>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white font-bold">👤</span>
                </div>
                <div className="w-12 h-12 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white font-bold">👤</span>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">14.5K+</p>
                <p className="text-gray-300">Worldwide Investors</p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-full hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2">
                Join Us Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-full hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
                Explore More
                <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <h2 className="text-4xl font-bold text-center text-black mb-16" style={{ fontFamily: 'Poppins' }}>
            Why Choose Us?
          </h2>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Eco-Friendly Innovation */}
            <div className="text-center">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-red-600 rounded-full relative">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-red-600"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-red-600 rounded-sm"></div>
                </div>
              </div>
              
              <h3 className="font-bold text-black mb-4" style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: '700', lineHeight: '27.75px', letterSpacing: '0%', textAlign: 'center' }}>
                Eco-Friendly Innovation
              </h3>
              
              <p className="text-gray-600" style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: '400', lineHeight: '27.75px', letterSpacing: '0%', textAlign: 'center' }}>
                Enjoy cutting-edge electric vehicles that<br />reduce your carbon footprint.
              </p>
            </div>
            
            {/* Affordable & Convenient */}
            <div className="text-center">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <div className="relative">
                  <div className="w-8 h-6 border-2 border-red-600 rounded transform rotate-12"></div>
                  <div className="absolute top-1 left-2 text-red-600 font-bold text-xs">$</div>
                </div>
              </div>
              
              <h3 className="font-bold text-black mb-4" style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: '700', lineHeight: '27.75px', letterSpacing: '0%', textAlign: 'center' }}>
                Affordable & Convenient
              </h3>
              
              <p className="text-gray-600" style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: '400', lineHeight: '27.75px', letterSpacing: '0%', textAlign: 'center' }}>
                Experience premium invest at budget-<br />friendly rates without the hassle of<br />maintenance.
              </p>
            </div>
            
            {/* Advanced Safety */}
            <div className="text-center">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-6 border-2 border-red-600 rounded-lg relative">
                  <div className="w-2 h-2 bg-red-600 rounded-full absolute top-1 left-1"></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full absolute top-1 right-1"></div>
                  <div className="w-3 h-1 bg-red-600 rounded absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
              
              <h3 className="font-bold text-black mb-4" style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: '700', lineHeight: '27.75px', letterSpacing: '0%', textAlign: 'center' }}>
                Advanced Safety
              </h3>
              
              <p className="text-gray-600" style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: '400', lineHeight: '27.75px', letterSpacing: '0%', textAlign: 'center' }}>
                Ride with confidence using Tesla's industry-<br />leading autopilot technology.
              </p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 px-6" style={{ backgroundColor: '#f4e6e7' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4" style={{ fontFamily: 'Poppins' }}>
              The Right Plan for Your Business
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins' }}>
              We have several powerful plans to showcase your business and get discovered as a creative entrepreneurs. Everything you need.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="text-black font-medium">Bill Monthly</span>
              <div className="relative">
                <div className="w-12 h-6 bg-red-600 rounded-full cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform duration-300"></div>
                </div>
              </div>
              <span className="text-gray-600">Bill Annually</span>
            </div>
          </div>
          
          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Bronze Plan */}
            <div 
              onClick={() => handlePlanClick('Bronze')}
              className={`p-4 border cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                clickedPlan === 'Bronze' 
                ? 'bg-black text-white border-gray-800 shadow-2xl transform scale-110 -translate-y-2 z-10 rounded-3xl' 
                : selectedPlan === 'Bronze' 
                ? 'bg-black text-white border-gray-800 shadow-2xl transform scale-110 z-10 rounded-3xl' 
                : 'bg-white text-black border-gray-200 hover:bg-black hover:text-white shadow-lg hover:shadow-xl rounded-2xl transform scale-95'
              }`}
            >
              {/* Save Badge - Show when clicked */}
              <div className={`absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300 ${
                clickedPlan === 'Bronze' ? 'opacity-100' : 'opacity-0'
              }`}>
                Save $40
              </div>
              
              <h3 className={`text-xl font-bold mb-4 ${
                clickedPlan === 'Bronze' || selectedPlan === 'Bronze' ? 'text-white' : 'text-black group-hover:text-white'
              }`}>
                Bronze
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={clickedPlan === 'Bronze' || selectedPlan === 'Bronze' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Earn $50 Daily
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-lg">✓</span>
                  <span className="text-gray-400 group-hover:text-gray-300">Assign a Auto broker</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-lg">✓</span>
                  <span className="text-gray-400 group-hover:text-gray-300">Set your rates</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-lg">✓</span>
                  <span className="text-gray-400 group-hover:text-gray-300">Exclusive Deals</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-lg">✓</span>
                  <span className="text-gray-400 group-hover:text-gray-300">Earn Dodge in rewards</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className={`text-3xl font-bold ${
                  clickedPlan === 'Bronze' || selectedPlan === 'Bronze' ? 'text-white' : 'text-black group-hover:text-white'
                }`}>
                  $123
                </span>
                <span className={`text-sm ${
                  clickedPlan === 'Bronze' || selectedPlan === 'Bronze' ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-300'
                }`}>
                  /month
                </span>
              </div>
              
              <button className={`w-full py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                clickedPlan === 'Bronze' || selectedPlan === 'Bronze' 
                ? 'bg-red-600 text-white hover:bg-red-700' 
                : 'bg-white text-red-600 hover:bg-red-600 hover:text-white group-hover:bg-red-600 group-hover:text-white'
              }`}>
                {clickedPlan === 'Bronze' || selectedPlan === 'Bronze' ? 'Try 1 month' : 'Choose'}
              </button>
            </div>
            
            {/* Silver Plan */}
            <div 
              onClick={() => setSelectedPlan('Silver')}
              className={`p-4 border cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                selectedPlan === 'Silver' 
                ? 'bg-black text-white border-gray-800 shadow-2xl transform scale-110 z-10 rounded-3xl' 
                : 'bg-white text-black border-gray-200 hover:bg-black hover:text-white shadow-lg hover:shadow-xl rounded-2xl transform scale-95'
              }`}
            >
              {/* Save Badge - Show when selected or on hover */}
              <div className={`absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300 ${
                selectedPlan === 'Silver' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                Save $40
              </div>
              
              <h3 className={`text-xl font-bold mb-4 ${
                selectedPlan === 'Silver' ? 'text-white' : 'text-black group-hover:text-white'
              }`}>
                Silver
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={selectedPlan === 'Silver' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Earn $100 Daily
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={selectedPlan === 'Silver' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Assign a Auto broker
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-lg">✓</span>
                  <span className="text-gray-400 group-hover:text-gray-300">Set your rates</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-lg">✓</span>
                  <span className="text-gray-400 group-hover:text-gray-300">Exclusive Deals</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-500 text-lg">✕</span>
                  <span className="text-gray-400 group-hover:text-gray-300">Earn Dodge in rewards</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className={`text-3xl font-bold ${
                  selectedPlan === 'Silver' ? 'text-white' : 'text-black group-hover:text-white'
                }`}>
                  $123
                </span>
                <span className={`text-sm ${
                  selectedPlan === 'Silver' ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-300'
                }`}>
                  /month
                </span>
              </div>
              
              <button className={`w-full py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                selectedPlan === 'Silver' 
                ? `${clickedPlan === 'Silver' ? 'bg-red-700 text-white shadow-lg transform scale-105' : 'bg-red-600 text-white hover:bg-red-700'}` 
                : 'bg-white text-red-600 hover:bg-red-600 hover:text-white group-hover:bg-red-600 group-hover:text-white'
              }`}>
                {selectedPlan === 'Silver' ? 'Try 1 month' : 'Choose'}
              </button>
            </div>
            
            {/* Gold Plan */}
            <div 
              onClick={() => setSelectedPlan('Gold')}
              className={`p-4 border cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                selectedPlan === 'Gold' 
                ? 'bg-black text-white border-gray-800 shadow-2xl transform scale-110 z-10 rounded-3xl' 
                : 'bg-white text-black border-gray-200 hover:bg-black hover:text-white shadow-lg hover:shadow-xl rounded-2xl transform scale-95'
              }`}
            >
              {/* Save Badge - Show when selected or on hover */}
              <div className={`absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300 ${
                selectedPlan === 'Gold' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                Save $40
              </div>
              
              <h3 className={`text-xl font-bold mb-4 ${
                selectedPlan === 'Gold' ? 'text-white' : 'text-black group-hover:text-white'
              }`}>
                Gold
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={selectedPlan === 'Gold' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Earn $150 Daily
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={selectedPlan === 'Gold' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Assign a Auto broker
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={selectedPlan === 'Gold' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Set your rates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={selectedPlan === 'Gold' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Exclusive Deals
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={selectedPlan === 'Gold' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Earn Dodge in rewards
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <span className={`text-4xl font-bold ${
                  selectedPlan === 'Gold' ? 'text-white' : 'text-black group-hover:text-white'
                }`}>
                  $123
                </span>
                <span className={`${
                  selectedPlan === 'Gold' ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-300'
                }`}>
                  /month
                </span>
              </div>
              
              <button className={`w-full py-3 rounded-full font-medium transition-colors duration-300 ${
                selectedPlan === 'Gold' 
                ? 'bg-red-600 text-white hover:bg-red-700' 
                : 'bg-white text-red-600 hover:bg-red-600 hover:text-white group-hover:bg-red-600 group-hover:text-white'
              }`}>
                {selectedPlan === 'Gold' ? 'Try 1 month' : 'Choose'}
              </button>
            </div>
            
            {/* Platinum Plan */}
            <div 
              onClick={() => handlePlanClick('Platinum')}
              className={`p-4 border cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                clickedPlan === 'Platinum' 
                ? 'bg-black text-white border-gray-800 shadow-2xl transform scale-110 -translate-y-2 z-10 rounded-3xl' 
                : selectedPlan === 'Platinum' 
                ? 'bg-black text-white border-gray-800 shadow-2xl transform scale-110 z-10 rounded-3xl' 
                : 'bg-white text-black border-gray-200 hover:bg-black hover:text-white shadow-lg hover:shadow-xl rounded-2xl transform scale-95'
              }`}
            >
              {/* Save Badge - Show when clicked */}
              <div className={`absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300 ${
                clickedPlan === 'Platinum' ? 'opacity-100' : 'opacity-0'
              }`}>
                Save $40
              </div>
              
              <h3 className={`text-xl font-bold mb-4 ${
                clickedPlan === 'Platinum' || selectedPlan === 'Platinum' ? 'text-white' : 'text-black group-hover:text-white'
              }`}>
                Platinum
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={clickedPlan === 'Platinum' || selectedPlan === 'Platinum' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Earn $200 Daily
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={clickedPlan === 'Platinum' || selectedPlan === 'Platinum' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Assign a Auto broker
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={clickedPlan === 'Platinum' || selectedPlan === 'Platinum' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Set your rates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={clickedPlan === 'Platinum' || selectedPlan === 'Platinum' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Exclusive Deals
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className={clickedPlan === 'Platinum' || selectedPlan === 'Platinum' ? 'text-white' : 'text-black group-hover:text-white'}>
                    Earn Dodge in rewards
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className={`text-3xl font-bold ${
                  clickedPlan === 'Platinum' || selectedPlan === 'Platinum' ? 'text-white' : 'text-black group-hover:text-white'
                }`}>
                  $123
                </span>
                <span className={`text-sm ${
                  clickedPlan === 'Platinum' || selectedPlan === 'Platinum' ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-300'
                }`}>
                  /month
                </span>
              </div>
              
              <button className={`w-full py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                clickedPlan === 'Platinum' || selectedPlan === 'Platinum' 
                ? 'bg-red-600 text-white hover:bg-red-700' 
                : 'bg-white text-red-600 hover:bg-red-600 hover:text-white group-hover:bg-red-600 group-hover:text-white'
              }`}>
                {clickedPlan === 'Platinum' || selectedPlan === 'Platinum' ? 'Try 1 month' : 'Choose'}
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Dogecoin Logo */}
          <div className="flex items-center justify-center gap-8 mb-12">
            {/* Center - Special Offers Heading */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-sm bg-gray-700 px-3 py-1 rounded text-white">🎁 Exclusive Deals Await</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Special Offers
              </h2>
            </div>

            {/* Right Side - Large Dogecoin Logo */}
            <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-black">D</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Tesla Car */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop&crop=center"
                alt="Tesla Model" 
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              
              {/* Call Us Badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 flex items-center gap-2 shadow-lg">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">12.1 - 2.14 - 2.345</p>
                  <p className="text-xs font-medium text-black">Call us for Booking</p>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-white space-y-6">
              {/* Dogecoin Section */}
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                  Earn <span className="text-yellow-400">DOGE</span> for Trading
                </h3>
                <h3 className="text-2xl lg:text-3xl font-bold">& Referrals</h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Fuel your portfolio with Dogecoin every time you trade or bring in a friend.
              </p>

              {/* CTA Button */}
              <button className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2">
                Earn Doge
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* What Client Say about Us Section */}
      <div className="py-16 px-6" style={{ backgroundColor: '#f4e6e7' }}>
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left Side - Heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black" style={{ fontFamily: 'Poppins' }}>
                What Client Say about<br />Us
              </h2>
            </div>

            {/* Right Side - Description */}
            <div>
              <p className="text-gray-500 text-lg leading-relaxed" style={{ fontFamily: 'Poppins' }}>
                Invest in Tesla, crypto, and future tech. Secure,<br />rewarding, and built for believers in<br />innovation.
              </p>
            </div>
          </div>

          {/* Testimonials Grid - Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                Investing in Tesla has never felt this<br />smooth. I earned DOGE just for doing<br />what I already do!
              </p>
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                <span className="text-yellow-400 text-lg">★★★★</span>
                <span className="text-gray-300 text-lg">★</span>
              </div>
              
              {/* User Info */}
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&rounded=full"
                  alt="Daniel E." 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black text-sm">Daniel E.</p>
                  <p className="text-xs text-gray-500">Crypto Enthusiast</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                This platform makes me feel like I'm<br />part of the future. I trade, I earn, and I<br />even booked a Cybertruck!
              </p>
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                <span className="text-yellow-400 text-lg">★★★★</span>
                <span className="text-gray-300 text-lg">★</span>
              </div>
              
              {/* User Info */}
              <div className="flex items-center gap-3">
                <img 
                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&rounded=full"
                  alt="Daniel E." 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black text-sm">Laila S.</p>
                  <p className="text-xs text-gray-500">Tech Investor</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                The UI is cleaner than anything I've<br />seen. It's secure, responsive, and<br />makes managing my Tesla portfolio<br />effortless.
              </p>
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                <span className="text-yellow-400 text-lg">★★★★</span>
                <span className="text-gray-300 text-lg">★</span>
              </div>
              
              {/* User Info */}
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&rounded=full"
                  alt="Ahmed T." 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black text-sm">Ahmed T.</p>
                  <p className="text-xs text-gray-500">Long Term Investor</p>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
      <div>
        <ProductAvailable/>
      </div>
      <div>
        <CallToActionSection/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
         