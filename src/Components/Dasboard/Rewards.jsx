import React, { useState } from 'react';
import { Search, Settings, Menu, ChevronRight, Bell, Home, ArrowLeftRight, Wallet, TrendingUp, CreditCard, Gift, PiggyBank, HelpCircle, LogOut, ChevronDown, X, TrendingDown } from 'lucide-react';
import SideBar from '../Dasboard/SideBar';
import path from "../Dasboard/path.png"
import chart2 from "../Dasboard/chart2.png"

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
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
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

// Stock Cards Section
const StockCardsSection = () => {
  const stocks = [
    { symbol: 'TSLA', company: 'Tesla', price: '$721,882', change: '-4.66%', changeType: 'down', color: 'bg-blue-600' },
    { symbol: 'DOGE', company: 'Doge', price: '$22,370', change: '+0.45%', changeType: 'up', color: 'bg-yellow-500' },
    { symbol: 'NVDA', company: 'Nvidia', price: '$10,604', change: '+1.07%', changeType: 'up', color: 'bg-green-500' },
    { symbol: 'BLNK', company: 'Blink', price: '$50,839', change: '+0.66%', changeType: 'up', color: 'bg-blue-500' }
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
                                src={path} 
                                alt="Stock Chart" 
                                className="w-full h-full object-cover"
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

// Rewards Section
const RewardsSection = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mb-6">
      {/* Left - Rewards Cards */}
      <div className="col-span-8">
        <h2 className="text-xl font-bold mb-6">Rewards</h2>
        
        <div className="flex gap-6 mb-6">
          {/* Reward Cards */}
          <div className="grid grid-cols-2 gap-6 flex-1">
            {/* Trade Reward */}
            <div className="bg-slate-700 text-white rounded-lg p-6 relative overflow-hidden">
              <div className="text-sm text-gray-300 mb-4">Trade Reward</div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">💰</span>
                  </div>
                  <div className="text-3xl font-bold">$1,820</div>
                </div>
                <div className="h-12 w-20">
                  <img 
                    src={chart2} 
                    alt="Trade Reward Chart" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <div>
                  <div className="text-gray-400 text-xs mb-1">Profit</div>
                  <div className="text-green-400 font-medium">+ 2.87%</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Loss</div>
                  <div className="text-red-400 font-medium">- 0.17%</div>
                </div>
              </div>
            </div>

            {/* Referral Reward */}
            <div className="bg-white border-2 border-red-500 rounded-lg p-6 relative overflow-hidden">
              <div className="text-sm text-gray-600 mb-4">Referral Reward</div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">💰</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">$1,820</div>
                </div>
                <div className="h-12 w-20">
                  <img 
                    src={chart2} 
                    alt="Referral Reward Chart" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <div>
                  <div className="text-gray-400 text-xs mb-1">Profit</div>
                  <div className="text-green-500 font-medium">+ 2.87%</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Loss</div>
                  <div className="text-red-500 font-medium">- 0.17%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4">
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
              Trade
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Withdraw
            </button>
          </div>
        </div>

        {/* Claimed Reward Table */}
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="bg-slate-700 text-white p-4">
            <h3 className="font-semibold">Claimed Reward</h3>
          </div>
          
          <div className="bg-slate-600 text-white p-3">
            <div className="grid grid-cols-5 gap-4 text-sm font-medium">
              <span>Transactions</span>
              <span>Amount</span>
              <span>Total</span>
              <span>Status</span>
              <span>Date</span>
            </div>
          </div>

          <div className="bg-slate-700 text-white">
            {[
              { type: 'Doge Claimed', amount: '100.54 USD', total: '$100.54', status: 'Pending', date: 'February 21, 2025' },
              { type: 'Doge Claimed', amount: '140.3 USD', total: '$140.3', status: 'Done', date: 'February 14, 2025' },
              { type: 'Doge Claimed', amount: '560.25 USD', total: '$560.20', status: 'Done', date: 'January 14, 2025' }
            ].map((transaction, index) => (
              <div key={index} className="grid grid-cols-5 gap-4 p-3 border-b border-slate-600 last:border-b-0 text-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-yellow-500 rounded mr-2 flex items-center justify-center">
                    <span className="text-xs">💰</span>
                  </div>
                  {transaction.type}
                </div>
                <span>{transaction.amount}</span>
                <span>{transaction.total}</span>
                <span className={transaction.status === 'Done' ? 'text-green-400' : 'text-yellow-400'}>
                  {transaction.status}
                </span>
                <span>{transaction.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cryptocurrency Table */}
        <div className="mt-6 bg-white rounded-lg border overflow-hidden">
          <div className="p-4">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-600 mb-3 pb-3 border-b">
              <span>Cryptocoin</span>
              <span>Updated</span>
              <span>Change</span>
              <span>Price</span>
            </div>
            <div className="grid grid-cols-4 gap-4 items-center py-3">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">B</span>
                </div>
                <span className="font-medium">BITCOIN</span>
              </div>
              <span className="text-sm text-gray-500">1 minute ago</span>
              <span className="text-red-500 text-sm">↓ 2.64%</span>
              <span className="font-medium">$12,729</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Available Stock */}
      <div className="col-span-4">
        <div className="bg-white rounded-lg p-4 border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-red-500">🔺</span>
              <span className="font-semibold">Available Stock</span>
            </div>
            <div className="text-gray-400 text-sm">↑</div>
          </div>

          <div className="space-y-3">
            {[
              { symbol: 'BTC', price: '$721,882', change: '+4.66%', changeType: 'up', color: 'bg-orange-500' },
              { symbol: 'BCH', price: '$48,676', change: '+0.38%', changeType: 'up', color: 'bg-orange-400' },
              { symbol: 'ETH', price: '$22,370', change: '+0.45%', changeType: 'up', color: 'bg-blue-500' },
              { symbol: 'LTC', price: '$5,788.5', change: '+0.23%', changeType: 'up', color: 'bg-gray-500' },
              { symbol: 'ETC', price: '$1,666.7', change: '+0.09%', changeType: 'up', color: 'bg-green-500' },
              { symbol: 'XRP', price: '$50,839', change: '+0.66%', changeType: 'up', color: 'bg-blue-600' },
              { symbol: 'FCT', price: '$534.68', change: '+8.47%', changeType: 'up', color: 'bg-purple-500' },
              { symbol: 'LSK', price: '$321.14', change: '+0.47%', changeType: 'up', color: 'bg-indigo-500' },
              { symbol: 'XEM', price: '$10,604', change: '+1.07%', changeType: 'up', color: 'bg-teal-500' }
            ].map((stock, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${stock.color}`}>
                    {stock.symbol.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{stock.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{stock.price}</div>
                  <div className={`text-xs ${stock.changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stock.change} {stock.changeType === 'up' ? '↑' : '↓'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Rewards = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <Breadcrumb />
        
        <div className="flex-1 p-6 overflow-auto">
          <StockCardsSection />
          <ScrollingBanner />
          <RewardsSection />
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

export default Rewards;