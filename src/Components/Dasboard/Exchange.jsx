import React, { useState } from 'react';
import { Search, Settings, Menu, ChevronRight, Bell, Home, ArrowLeftRight, Wallet, TrendingUp, CreditCard, Gift, PiggyBank, HelpCircle, LogOut, ChevronDown, X, ArrowUpDown } from 'lucide-react';
import SideBar from "../Dasboard/SideBar"
import path from "../Dasboard/path.png"
import paths from "../Dasboard/paths.png"

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
      <span className="text-red-500 font-medium">My Exchange</span>
      <span className="text-red-500">🔴</span>
      <div className="ml-auto flex items-center space-x-2">
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
        <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  );
};

// Stock Cards Section
const StockCardsSection = () => {
  const stocks = [
    { 
      symbol: 'TSLA', 
      company: 'Tesla', 
      price: '$721,882', 
      change: '-4.66%', 
      changeType: 'down', 
      color: 'bg-blue-600',
      chartImage: path
    },
    { 
      symbol: 'DOGE', 
      company: 'Doge', 
      price: '$22,370', 
      change: '+0.45%', 
      changeType: 'up', 
      color: 'bg-yellow-500',
      chartImage: paths
    },
    { 
      symbol: 'NVDA', 
      company: 'Nvidia', 
      price: '$10,604', 
      change: '-1.07%', 
      changeType: 'down', 
      color: 'bg-green-500',
      chartImage: paths
    },
    { 
      symbol: 'BLNK', 
      company: 'Blink', 
      price: '$0.839', 
      change: '+0.66%', 
      changeType: 'up', 
      color: 'bg-blue-500',
      chartImage: path
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {stocks.map((stock, index) => (
        <div key={index} className="bg-white rounded-lg p-4 border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${stock.color}`}>
                {stock.symbol.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-sm">${stock.symbol}</div>
                <div className="text-xs text-gray-500">{stock.company}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold mb-1">{stock.price}</div>
              <div className={`text-sm ${stock.changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stock.change} {stock.changeType === 'up' ? '↑' : '↓'}
              </div>
            </div>
          </div>
          <div className="h-12 mt-3">
             <img 
               src={stock.chartImage} 
               alt={`${stock.symbol} Chart`} 
               className="w-full h-full object-cover rounded"
             />
          </div>
        </div>
      ))}
    </div>
  );
};

// Scrolling Banner
const ScrollingBanner = () => {
  return (
    <div className="bg-gray-200 border-t border-b overflow-hidden mb-6">
      <div className="animate-scroll whitespace-nowrap py-2 text-sm text-gray-700">
        Jane Doe Just Claimed $400. &nbsp;&nbsp;&nbsp; Jane Doe Just Claimed $400. &nbsp;&nbsp;&nbsp; Jane Doe Just Claimed $400. &nbsp;&nbsp;&nbsp; Jane Doe Just Claimed $400.
      </div>
    </div>
  );
};

// Crypto Exchange Widget
const CryptoExchangeWidget = () => {
  const [activeTab, setActiveTab] = useState('Cryptocurrency');
  const [fromCurrency, setFromCurrency] = useState('USDC');
  const [toCurrency, setToCurrency] = useState('TSLA');
  const [fromAmount, setFromAmount] = useState('$4,026,227');
  const [toAmount, setToAmount] = useState('$4,026,227');

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="bg-slate-700 text-white rounded-lg p-6 border-2 border-red-500 w-full">
      {/* Tab Selection */}
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('Cryptocurrency')}
          className={`px-4 py-2 rounded-l-lg font-medium text-sm ${
            activeTab === 'Cryptocurrency'
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-700'
          }`}
        >
          Cryptocurrency
        </button>
        <button
          onClick={() => setActiveTab('Tesla Stock')}
          className={`px-4 py-2 rounded-r-lg font-medium text-sm ${
            activeTab === 'Tesla Stock'
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-700'
          }`}
        >
          Tesla Stock
        </button>
      </div>

      {/* Exchange Title */}
      <h3 className="text-white font-medium mb-6">Exchange Your Crypto For Stock</h3>

      {/* From Currency Input */}
      <div className="mb-4">
        <div className="bg-white rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-xs font-bold">◯</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-black font-medium">{fromCurrency}</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="text-right">
            <div className="text-black font-bold">{fromAmount}</div>
            <span className="text-red-500 text-sm font-bold">MAX</span>
          </div>
        </div>
        <div className="text-xs text-gray-300 mt-2 px-2">
          Balance: 1.0498 USDC
        </div>
      </div>

      {/* Swap Icon */}
      <div className="flex justify-center mb-4">
        <button 
          onClick={handleSwap}
          className="p-2 hover:bg-slate-600 rounded-full transition-colors"
        >
          <ArrowUpDown className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* To Currency Input */}
      <div className="mb-6">
        <div className="bg-white rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-black font-medium">{toCurrency}</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="text-right">
            <div className="text-black font-bold">{toAmount}</div>
            <span className="text-red-500 text-sm font-bold">MAX</span>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium mb-6 transition-colors">
        Swap
      </button>

      {/* Transaction Details */}
      <div className="space-y-2 text-sm text-gray-300">
        <div className="flex justify-between">
          <span>Minimum Received:</span>
          <span className="text-white">$4,026,227</span>
        </div>
        <div className="flex justify-between">
          <span>Price Impact:</span>
          <span className="text-white">&lt; 0.11 %</span>
        </div>
        <div className="flex justify-between">
          <span>Liquidity Provider Fee:</span>
          <span className="text-white">$5.00</span>
        </div>
      </div>
    </div>
  );
};

// Latest Activities Component
const LatestActivities = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const tabs = ['ALL', 'TSLA', 'DOGE', 'NVDA', 'BLNK', 'BTC', 'ETH', 'XRP', 'USD', 'EUR'];
  
  const activities = [
    { date: '2018/10/02 10:57:46', detail: 'Deposit US Dollar', price: '+10,000 USD', priceColor: 'text-cyan-400' },
    { date: '2018/10/10 10:57:46', detail: 'Bought Tesla Stock', price: '+121.08147 USD', priceColor: 'text-cyan-400' },
    { date: '2018/10/10 10:57:46', detail: 'Service fee', price: '- 50 USD', priceColor: 'text-red-400' },
    { date: '2018/10/13 10:57:46', detail: 'Bought Nvidia Stock', price: '+ 500 USD', priceColor: 'text-green-400' },
    { date: '2018/10/13 10:57:46', detail: 'Sold Tesla Stock', price: '- 7,992 JPY', priceColor: 'text-red-400' },
    { date: '2018/10/13 10:57:46', detail: 'Sold Tesla BTC', price: '- 0.5 BTC', priceColor: 'text-red-400' },
    { date: '2018/10/23 10:57:46', detail: 'Sold BTC', price: '- 0.00452 BTC', priceColor: 'text-red-400' },
    { date: '2018/10/23 10:57:46', detail: 'Withdraw US Dollar', price: '- 21,000 USD', priceColor: 'text-red-400' }
  ];

  return (
    <div className="bg-white rounded-lg p-4 border w-full h-full relative">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-red-500">🔺</span>
        <span className="font-semibold">Latest Activities</span>
      </div>
      
      <div className="flex flex-wrap gap-1 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 text-xs rounded ${
              activeTab === tab 
                ? 'bg-red-100 text-red-600 border-b-2 border-red-500' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 text-xs text-gray-500 mb-3 border-b pb-2">
        <span>Date</span>
        <span>Detail</span>
        <span className="text-right">Price</span>
      </div>

      <div className="space-y-4 text-xs overflow-y-auto" style={{height: 'calc(100% - 100px)'}}>
        {activities.map((activity, index) => (
          <div key={index} className="grid grid-cols-3 gap-6">
            <div className="text-gray-600 text-xs">{activity.date}</div>
            <div className="text-gray-800 text-sm font-medium">{activity.detail}</div>
            <div className={`text-right text-sm font-semibold ${activity.priceColor}`}>{activity.price}</div>
          </div>
        ))}
      </div>

      {/* Pagination - At the very bottom with no margin */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-1 h-10 bg-white">
        <button className="w-7 h-7 bg-red-500 text-white rounded text-xs flex items-center justify-center font-semibold">1</button>
        <button className="w-7 h-7 text-gray-500 rounded text-xs flex items-center justify-center hover:bg-gray-100">2</button>
        <button className="w-7 h-7 text-gray-500 rounded text-xs flex items-center justify-center hover:bg-gray-100">3</button>
        <button className="w-7 h-7 text-gray-500 rounded text-xs flex items-center justify-center hover:bg-gray-100">4</button>
        <button className="w-7 h-7 text-gray-500 rounded text-xs flex items-center justify-center hover:bg-gray-100">5</button>
        <button className="w-7 h-7 text-gray-500 rounded text-xs flex items-center justify-center hover:bg-gray-100">
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

const Exchange = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        <Breadcrumb />
        
        <div className="flex-1 p-6 overflow-auto">
          <StockCardsSection />
          <ScrollingBanner />
          
          <div className="flex space-x-6 h-full">
            <div className="space-y-6 w-[560px] h-full">
              {/* Current Balance Card with side buttons */}
              <div className="flex items-start space-x-4">
                <div className="bg-slate-700 text-white rounded-lg p-6 border-2 border-red-500 flex-1">
                  <h3 className="text-white font-medium mb-4">Current Balance</h3>
                  <div className="text-4xl font-bold mb-2">$87,430.12</div>
                  <div className="text-green-400 text-sm">▲ 10.2%</div>
                </div>

                {/* Deposit and Withdraw Buttons beside the card */}
                <div className="flex flex-col space-y-3 pt-6">
                  <button className="bg-red-500 text-white px-6 py-3 rounded font-medium hover:bg-red-600 transition-colors whitespace-nowrap">
                    Deposit
                  </button>
                  <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Withdraw
                  </button>
                </div>
              </div>

              {/* Crypto Exchange Widget */}
              <div className="flex-1">
                <CryptoExchangeWidget />
              </div>
            </div>

            {/* Right Side - Latest Activities with matching height */}
            <div className="w-[640px] h-full">
              <LatestActivities />
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg hover:bg-slate-700 transition-colors cursor-pointer">
        <div className="w-6 h-6 bg-blue-500 rounded"></div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Exchange;