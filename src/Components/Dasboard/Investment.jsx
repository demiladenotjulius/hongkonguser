import React, { useState } from 'react';
import { Search, Settings, Menu, ChevronRight, Bell, Home, ArrowLeftRight, Wallet, TrendingUp, CreditCard, Gift, PiggyBank, HelpCircle, LogOut, ChevronDown } from 'lucide-react';
import SideBar from '../Dasboard/SideBar'; 
import path from "../Dasboard/paths.png"
import paths from "../Dasboard/path.png"
import paths1 from "../Dasboard/candles.png"
// Header Component
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

// Breadcrumb Component
const Breadcrumb = () => {
  return (
    <div className="bg-gray-50 px-6 py-3 flex items-center space-x-2 text-sm text-gray-600">
      <span className="text-red-500">🔺</span>
      <span>Welcome</span>
      <span className="text-red-500">🔴</span>
      <span className="text-red-500 font-medium">Dashboard</span>
      <span className="text-red-500">🔴</span>
      <div className="ml-auto flex items-center space-x-2">
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
        <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  );
};

// Top Section - Balance Card + Buttons + Stock Cards in one row
const TopSection = () => {
  return (
    <div className="flex items-start space-x-4 mb-6">
      {/* Current Balance Card */}
      <div className="bg-slate-700 text-white rounded-lg p-6 border-2 border-red-500 w-72">
        <h3 className="text-white font-medium mb-4">Current Balance</h3>
        <div className="text-4xl font-bold mb-2">$87,430.12</div>
        <div className="text-green-400 text-sm flex items-center">
          ▲ 10.2%
        </div>
      </div>

      {/* Deposit and Withdraw Buttons */}
      <div className="flex flex-col space-y-3 pt-6">
        <button className="bg-red-500 text-white px-8 py-3 rounded font-medium hover:bg-red-600 transition-colors">
          Deposit
        </button>
        <button className="border border-gray-400 text-gray-700 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
          Withdraw
        </button>
      </div>

      {/* Stock Cards */}
      <div className="flex space-x-4 flex-1">
        {/* TSLA Card */}
        <div className="bg-white rounded-lg p-4 border flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                T
              </div>
              <div>
                <div className="font-semibold text-sm">$TSLA</div>
                <div className="text-xs text-gray-500">Tesla</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold mb-1">$721,882</div>
              <div className="text-red-500 text-sm flex items-center">
                -4.66% ↓
              </div>
            </div>
          </div>
          <div className="h-12  ml-12">
           <img 
                     src={path} 
                     alt="Tesla Cybertruck" 
                     className=""
                   />
          </div>
        </div>

        {/* DOGE Card */}
        <div className="bg-white rounded-lg p-4 border flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                D
              </div>
              <div>
                <div className="font-semibold text-sm">$DOGE</div>
                <div className="text-xs text-gray-500">Doge</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold mb-1">$22,370</div>
              <div className="text-green-500 text-sm flex items-center">
                +0.45% ↑
              </div>
            </div>
          </div>
          <div className="h-12  ml-12">
            <img 
                     src={paths} 
                     alt="Tesla Cybertruck" 
                     className=""
                   />
          </div>
        </div>
      </div>
    </div>
  );
};

// Middle Section - Trading Chart + Available Stock List
const MiddleSection = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('1h');
  
  const stocks = [
    { symbol: 'BTC', price: '$721,882', change: '-4.66%', changeType: 'down', color: 'bg-orange-500' },
    { symbol: 'BCH', price: '$48,676', change: '+0.38%', changeType: 'up', color: 'bg-orange-400' },
    { symbol: 'ETH', price: '$22,370', change: '+0.45%', changeType: 'up', color: 'bg-blue-500' },
    { symbol: 'LTC', price: '$5,788.5', change: '-0.23%', changeType: 'down', color: 'bg-gray-500' },
    { symbol: 'ETC', price: '$1,660.7', change: '-0.09%', changeType: 'down', color: 'bg-green-500' },
    { symbol: 'XRP', price: '$50,839', change: '+0.66%', changeType: 'up', color: 'bg-blue-400' },
    { symbol: 'FCT', price: '$534.68', change: '+8.47%', changeType: 'up', color: 'bg-blue-600' },
    { symbol: 'LSK', price: '$321.14', change: '-0.47%', changeType: 'down', color: 'bg-blue-700' },
    { symbol: 'XEM', price: '$10,604', change: '-1.07%', changeType: 'down', color: 'bg-teal-500' }
  ];

  return (
    <div className="flex space-x-6 mb-6">
      {/* Trading Chart */}
      <div className="bg-white rounded-lg p-6 border flex-1">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-xl font-bold">TSLA</h3>
              <span className="text-xs text-gray-500">USD</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-3xl font-bold mb-1">721,882</div>
            <div className="text-red-500 text-sm">-4.66% ↓</div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-8 text-sm text-gray-600">
              <span>High <span className="text-black font-medium">725,974</span></span>
              <span>Low <span className="text-black font-medium">718,000</span></span>
              <span>24h Volume <span className="text-black font-medium">617.7 BTC</span></span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Price Alert</span>
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bell className="w-3 h-3 text-blue-600" />
                </div>
              </div>
              <button className="bg-red-500 text-white px-6 py-2 rounded font-medium">
                BUY
              </button>
            </div>
          </div>
        </div>

        {/* Timeframe buttons */}
        <div className="flex space-x-2 mb-6">
          {['1min', '5min', '15min', '1h', '4h', '1day'].map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setActiveTimeframe(timeframe)}
              className={`px-3 py-1 text-xs rounded ${
                activeTimeframe === timeframe 
                  ? 'bg-red-100 text-red-600 border-b-2 border-red-500' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="h-80 bg-white relative">
           <img 
                     src={paths1} 
                     alt="Tesla Cybertruck" 
                     className=""
                   />
          
          {/* Time labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 px-4 pb-2">
            <span>00:00</span>
            <span>01:00</span>
            <span>02:00</span>
            <span>03:00</span>
            <span>04:00</span>
            <span>05:00</span>
            <span>06:00</span>
            <span>07:00</span>
            <span>08:00</span>
          </div>
        </div>
      </div>

      {/* Available Stock List */}
      <div className="bg-white rounded-lg p-4 border w-80">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <span className="text-red-500 mr-2">🔺</span>
            Available Stock
          </h3>
          <button className="text-gray-400 hover:text-gray-600">↕</button>
        </div>
        
        <div className="space-y-4">
          {stocks.map((stock, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${stock.color}`}>
                  {stock.symbol.charAt(0)}
                </div>
                <span className="text-sm font-medium">{stock.symbol}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">{stock.price}</div>
                <div className={`text-xs ${stock.changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.change} {stock.changeType === 'up' ? '↑' : '↓'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Bottom Section - Recent Activities + Tesla Newsfeed
const BottomSection = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const tabs = ['ALL', 'TSLA', 'DOGE', 'NVDA', 'BLNK', 'BTC', 'ETH', 'XRP', 'USD', 'EUR'];
  
  const activities = [
    { date: '2018/10/02 10:57:46', detail: 'Deposit US Dollar', price: '+10,000 USD', priceColor: 'text-green-500' },
    { date: '2018/10/10 10:57:46', detail: 'Bought Tesla Stock', price: '+121.08147 USD', priceColor: 'text-green-500' },
    { date: '2018/10/10 10:57:46', detail: 'Service fee', price: '- 50 USD', priceColor: 'text-red-500' }
  ];

  return (
    <div className="flex space-x-6">
      {/* Recent Activities */}
      <div className="bg-white rounded-lg p-4 border flex-1">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-red-500">🔺</span>
          <span className="font-semibold">Recent Activities</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-1 text-xs rounded ${
                activeTab === tab 
                  ? 'bg-red-100 text-red-600' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 text-xs text-gray-500 mb-3 border-b pb-2">
          <span>Date</span>
          <span>Detail</span>
          <span className="text-right">Price</span>
        </div>

        <div className="space-y-3 text-xs">
          {activities.map((activity, index) => (
            <div key={index} className="grid grid-cols-3 gap-4">
              <div className="text-gray-600">{activity.date}</div>
              <div className="text-gray-800">{activity.detail}</div>
              <div className={`text-right font-medium ${activity.priceColor}`}>{activity.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tesla Newsfeed */}
      <div className="bg-white rounded-lg p-4 border w-80">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-red-500">🔺</span>
            <span className="font-semibold">Tesla Newsfeed</span>
          </div>
          <button className="text-gray-400 text-sm hover:text-gray-600">Subscribe</button>
        </div>
        
        <div className="space-y-4">
          <div className="text-sm">
            <div className="text-gray-500 mb-1">Today 11:36</div>
            <div className="font-medium mb-2">Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</div>
            <div className="text-gray-600 text-xs">
              Cryptocurrency mining malware is not the only type of cryptocurrency-related threat — cybercriminals have reported...
            </div>
          </div>
          
          <div className="text-sm">
            <div className="text-gray-500 mb-1">Yesterday</div>
            <div className="font-medium">Ripple News Today: Ripple is planning to upgrade the technology of the cryptocurrency.</div>
          </div>
        </div>
        
        <div className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white relative overflow-hidden">
          <div className="text-lg font-bold mb-1">Security</div>
          <div className="text-sm opacity-90">Keep your investments safe</div>
          <div className="absolute right-2 top-2 text-4xl opacity-30">🛡️</div>
        </div>
      </div>
    </div>
  );
};

// Main Investment Component
const Investment = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        <Breadcrumb />
        
        <div className="flex-1 p-6 overflow-auto">
          <TopSection />
          <MiddleSection />
          <BottomSection />
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg hover:bg-slate-700 transition-colors cursor-pointer">
        <div className="w-6 h-6 bg-blue-500 rounded"></div>
      </div>
    </div>
  );
};

export default Investment;