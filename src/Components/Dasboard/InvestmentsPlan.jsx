import React, { useState } from 'react';
import { Search, Settings, Menu, ChevronRight, Bell, Home, ArrowLeftRight, Wallet, TrendingUp, CreditCard, Gift, PiggyBank, HelpCircle, LogOut, ChevronDown, X, TrendingDown, Check, Star } from 'lucide-react';
import SideBar from './SideBar';
import path from "../Dasboard/path.png"
import path1 from "../Dasboard/paths1.png"
import paths from "../Dasboard/paths.png"
import path2 from "../Dasboard/path.png"

const Header = () => {
  return (
    <div className="bg-white border-b p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Menu className="w-5 h-5 text-gray-600" />
        <div className="w-6 h-6 bg-gray-200 rounded"></div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Type any cryptocurrency name..." 
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-80 text-sm"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <Settings className="w-5 h-5 text-gray-600" />
        <div className="relative">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </div>
        <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
      </div>
    </div>
  );
};

const Breadcrumb = () => {
  return (
    <div className="bg-gray-50 px-6 py-3 flex items-center space-x-2 text-sm text-gray-600">
      <span className="text-red-500">🔺</span>
      <span>Welcome</span>
      <span className="text-red-500">🔴</span>
      <span className="text-red-500 font-medium">Dashboard</span>
      <span className="text-red-500">🔴</span>
    </div>
  );
};

const StockCard = ({ symbol, name, price, change, changeType, color, chartImage }) => {
  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${color}`}>
            {symbol.charAt(0)}
          </div>
          <div>
            <div className="font-medium text-sm">{symbol}</div>
            <div className="text-xs text-gray-500">{name}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold">{price}</div>
          <div className={`text-xs ${changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {change} {changeType === 'up' ? '↑' : '↓'}
          </div>
        </div>
      </div>
      <div className="h-16 relative">
        <img 
          src={chartImage || path} 
          alt={`${symbol} Chart`} 
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
};

const PricingCard = ({ title, price, features, isPopular, isCurrent, onUpgrade }) => {
  const cardClasses = isPopular 
    ? "bg-black text-white border-2 border-black relative" 
    : "bg-white text-gray-900 border";

  return (
    <div className={`rounded-lg p-6 ${cardClasses}`}>
      {isPopular && (
        <div className="absolute -top-3 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          Save $40
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        
        <div className="mb-6">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-sm opacity-70">/month</span>
        </div>
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            {feature.included ? (
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
            ) : (
              <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
            )}
            <span className={`text-sm ${feature.included ? '' : 'text-gray-400 line-through'}`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onUpgrade}
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          isCurrent
            ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
            : isPopular
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-red-500 hover:bg-red-600 text-white'
        }`}
        disabled={isCurrent}
      >
        {isCurrent ? 'Current Plan' : 'Upgrade'}
      </button>
    </div>
  );
};

const InvestmentPlan = () => {
  const stocksData = [
    {
      symbol: '$TSLA',
      name: 'Tesla',
      price: '$721,882',
      change: '4.66%',
      changeType: 'down',
      color: 'bg-blue-600',
      chartImage: path // Original path.png for Tesla
    },
    {
      symbol: '$DOGE',
      name: 'Doge',
      price: '$22,370',
      change: '+0.45%',
      changeType: 'up',
      color: 'bg-yellow-500',
      chartImage: paths // path1.png for Doge
    },
    {
      symbol: '$NVDA',
      name: 'Nvidia',
      price: '$10,604',
      change: '+0.79%',
      changeType: 'up',
      color: 'bg-green-500',
      chartImage: paths // paths.png for Nvidia
    },
    {
      symbol: '$BLNK',
      name: 'Blink',
      price: '$50,839',
      change: '+0.66%',
      changeType: 'up',
      color: 'bg-blue-500',
      chartImage: path2 // 2path.png for Blink
    }
  ];

  const pricingPlans = [
    {
      title: 'Bronze',
      price: '123',
      features: [
        { text: 'Upload Video up to 720p Resolution', included: true },
        { text: 'Attachment & Post Scheduling', included: false },
        { text: 'Set your rates', included: false },
        { text: 'Exclusive Deals', included: false },
        { text: 'Advanced Statistics', included: false }
      ],
      isPopular: false,
      isCurrent: true
    },
    {
      title: 'Silver',
      price: '123',
      features: [
        { text: 'Upload Video with HD Resolution', included: true },
        { text: 'Attachment & Post Scheduling', included: true },
        { text: 'Set your rates', included: false },
        { text: 'Exclusive Deals', included: false },
        { text: 'Advanced Statistics', included: false }
      ],
      isPopular: false,
      isCurrent: false
    },
    {
      title: 'Gold',
      price: '123',
      features: [
        { text: 'Upload Video with HD Resolution', included: true },
        { text: 'Attachment & Post Scheduling', included: true },
        { text: 'Set your rates', included: true },
        { text: 'Exclusive Deals', included: true },
        { text: 'Advanced Statistics', included: false }
      ],
      isPopular: true,
      isCurrent: false
    },
    {
      title: 'Platinum',
      price: '123',
      features: [
        { text: 'Upload Video with 4K Resolution', included: true },
        { text: 'Attachment & Post Scheduling', included: true },
        { text: 'Set your rates', included: true },
        { text: 'Exclusive Deals', included: true },
        { text: 'Advanced Statistics', included: true }
      ],
      isPopular: false,
      isCurrent: false
    }
  ];

  const handleUpgrade = (planTitle) => {
    console.log(`Upgrading to ${planTitle} plan`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <Breadcrumb />
        
        <div className="flex-1 p-6 overflow-auto">
          {/* Stock Cards Section */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stocksData.map((stock, index) => (
              <StockCard key={index} {...stock} />
            ))}
          </div>

          {/* Investment Plan Section */}
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Investment Plan</h2>
            
            <div className="grid grid-cols-4 gap-6">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  {...plan}
                  onUpgrade={() => handleUpgrade(plan.title)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg hover:bg-slate-700 transition-colors cursor-pointer">
        <div className="w-6 h-6 bg-blue-500 rounded"></div>
      </div>
    </div>
  );
};

// Make sure to export as both named and default export to avoid import issues

export default InvestmentPlan;