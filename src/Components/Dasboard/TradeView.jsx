import React, { useState } from 'react';
import { Search, Settings, Menu, ChevronRight, Bell, Home, ArrowLeftRight, Wallet, TrendingUp, CreditCard, Gift, PiggyBank, HelpCircle, LogOut, ChevronDown, X, TrendingDown } from 'lucide-react';
import SideBar from './SideBar';
import path from "../Dasboard/candles.png"
import page1 from "../Dasboard/page1.png"
import page2 from "../Dasboard/page2.png"

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
      <span className="text-red-500 font-medium">Tradeview</span>
      <span className="text-red-500">🔴</span>
    </div>
  );
};

const BuyModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-700 rounded-lg p-6 w-96 text-white relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mb-6">
          <h2 className="text-blue-400 text-lg font-medium mb-4">Buy Stock</h2>
          
          <div className="bg-green-600 text-white text-center py-2 px-4 rounded-lg mb-4 font-medium">
            Buy Stock
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-2">Select Stock</label>
            <div className="relative">
              <select className="w-full bg-white text-black p-3 rounded-lg appearance-none">
                <option>🌱 TSLA</option>
                <option>₿ BTC</option>
                <option>⟠ ETH</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-2">Enter Amount:</label>
            <div className="relative">
              <input 
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-white text-black p-3 rounded-lg pr-12"
                placeholder="0.00"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm font-medium">
                MAX
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span>Balance:</span>
              <span>10498 USDC</span>
            </div>
          </div>
          
          <div className="space-y-2 mb-6 text-sm text-gray-300">
            <div className="flex justify-between">
              <span>Minimum Buy Amount:</span>
              <span>$100</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee:</span>
              <span>$5.00</span>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              Note: Confirm Buy Amount.
            </div>
          </div>
          
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Confirm Buy
          </button>
        </div>
      </div>
    </div>
  );
};

const SellModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-700 rounded-lg p-6 w-96 text-white relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mb-6">
          <div className="bg-red-500 text-white text-center py-2 px-4 rounded-lg mb-4 font-medium">
            Sell Stock
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-2">Select Stock</label>
            <div className="relative">
              <select className="w-full bg-white text-black p-3 rounded-lg appearance-none">
                <option>🌱 TSLA</option>
                <option>₿ BTC</option>
                <option>⟠ ETH</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-2">Enter Amount:</label>
            <div className="relative">
              <input 
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-white text-black p-3 rounded-lg pr-12"
                placeholder="0.00"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm font-medium">
                MAX
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span>Balance:</span>
              <span>14,594.00 TSLA</span>
            </div>
          </div>
          
          <div className="space-y-2 mb-6 text-sm text-gray-300">
            <div className="flex justify-between">
              <span>Minimum Sell Amount:</span>
              <span>$100</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee:</span>
              <span>$5.00</span>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              Note: Confirm Buy Amount.
            </div>
          </div>
          
          <button className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
            Confirm Sell
          </button>
        </div>
      </div>
    </div>
  );
};

const TradingChart = ({ onBuyClick, onSellClick }) => {
  const [activeTimeframe, setActiveTimeframe] = useState('1');
  const timeframes = ['1 min', '5 min', '15 min', '1', '4 hr', '1 day'];

  return (
    <div className="bg-white rounded-lg p-6 border">
      {/* Stock Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">TSLA</h2>
              <span className="text-gray-500 text-sm">USD</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
              <button className="bg-red-500 text-white px-3 py-1 rounded text-xs font-medium">
                BUY
              </button>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-3xl font-bold">721,882</span>
              <div className="flex items-center text-red-500">
                <TrendingDown className="w-4 h-4 mr-1" />
                <span className="text-sm">4.66%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-right text-sm text-gray-600">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="text-gray-500">High</div>
              <div className="font-medium">725,974</div>
            </div>
            <div>
              <div className="text-gray-500">Low</div>
              <div className="font-medium">718,000</div>
            </div>
            <div>
              <div className="text-gray-500">24h Volume</div>
              <div className="font-medium">677.7 BTC</div>
            </div>
            <div>
              <div className="text-gray-500">Price Alert</div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeframe Selector */}
      <div className="flex space-x-2 mb-6">
        {timeframes.map((timeframe) => (
          <button
            key={timeframe}
            onClick={() => setActiveTimeframe(timeframe)}
            className={`px-3 py-1 text-xs rounded ${
              activeTimeframe === timeframe
                ? 'bg-red-500 text-white border-b-2 border-red-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {timeframe}
          </button>
        ))}
      </div>

      {/* Chart Area */}
      <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center mb-6 relative">
         <img 
           src={path} 
           alt="Tesla Chart" 
           className="w-full h-full object-contain"
         />
      </div>

      {/* Buy/Sell Buttons */}
      <div className="flex space-x-4">
        <button 
          onClick={onBuyClick}
          className="flex-1 bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm"
        >
          Buy
        </button>
        <button 
          onClick={onSellClick}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition-colors text-sm"
        >
          Sell
        </button>
      </div>
    </div>
    
  );
};

const AvailableStock = () => {
  const stocks = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$721,882', change: '+4.66%', changeType: 'up', color: 'bg-orange-500' },
    { symbol: 'BCH', name: 'Bitcoin Cash', price: '$48,676', change: '+0.38%', changeType: 'up', color: 'bg-orange-400' },
    { symbol: 'ETH', name: 'Ethereum', price: '$22,370', change: '+0.45%', changeType: 'up', color: 'bg-blue-500' },
    { symbol: 'LTC', name: 'Litecoin', price: '$5,788.5', change: '+0.23%', changeType: 'up', color: 'bg-gray-500' },
    { symbol: 'ETC', name: 'Ethereum Classic', price: '$1,666.7', change: '+0.09%', changeType: 'up', color: 'bg-green-500' },
    { symbol: 'XRP', name: 'Ripple', price: '$50,839', change: '+0.66%', changeType: 'up', color: 'bg-blue-600' },
    { symbol: 'FCT', name: 'Factom', price: '$534.68', change: '+8.47%', changeType: 'up', color: 'bg-purple-500' },
    { symbol: 'LSK', name: 'Lisk', price: '$321.14', change: '+0.47%', changeType: 'up', color: 'bg-indigo-500' },
    { symbol: 'XEM', name: 'NEM', price: '$10,604', change: '+1.07%', changeType: 'up', color: 'bg-teal-500' }
  ];

  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-red-500">🔺</span>
          <span className="font-semibold">Available Stock</span>
        </div>
        <div className="text-gray-400 text-sm">↑</div>
      </div>

      <div className="space-y-3">
        {stocks.map((stock, index) => (
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
  );
};

const LatestActivities = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const tabs = ['ALL', 'TSLA', 'DOGE', 'NVDA', 'BLNK', 'BTC', 'ETH', 'XRP', 'USD', 'EUR'];
  
  const activities = [
    { date: '2018/10/02 10:57:46', detail: 'Deposit US Dollar', price: '+10,000 USD', priceColor: 'text-cyan-400' },
    { date: '2018/10/10 10:57:46', detail: 'Bought Tesla Stock', price: '+121.08147 USD', priceColor: 'text-cyan-400' },
    { date: '2018/10/10 10:57:46', detail: 'Service fee', price: '- 50 USD', priceColor: 'text-red-400' },
    { date: '2018/10/13 10:57:46', detail: 'Bought Nvidia Stock', price: '+ 500 USD', priceColor: 'text-green-400' }
  ];

  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-red-500">🔺</span>
        <span className="font-semibold">Latest Activities</span>
      </div>
      
      <div className="flex flex-wrap gap-1 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 py-1 text-xs rounded ${
              activeTab === tab 
                ? 'bg-red-500 text-white' 
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
  );
};

const TeslaNewsfeed = () => {
  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-red-500">🔺</span>
          <span className="font-semibold">Tesla Newsfeed</span>
        </div>
        <button className="text-blue-500 text-sm hover:underline">Subscribe</button>
      </div>

      <div className="space-y-4">
        {/* Today's News */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs text-gray-500">Today</span>
              <span className="text-xs text-gray-400">11:36</span>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-sm">Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</h4>
              <p className="text-xs text-gray-600">Cryptocurrency mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted...</p>
            </div>
          </div>
          <div className="w-20 h-16">
            <img 
              src={page1} 
              alt="Security News" 
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Yesterday's News */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <div className="text-xs text-gray-500 mb-2">Yesterday</div>
            <div>
              <h4 className="font-medium mb-2 text-sm">Ripple News Today: Ripple is planning to upgrade the technology of the cryptocurrency</h4>
              <p className="text-xs text-gray-600">Cryptocurrency mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted...</p>
            </div>
          </div>
          <div className="w-20 h-16">
            <img 
              src={page2} 
              alt="Ripple News" 
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TradeView = () => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showSellModal, setShowSellModal] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <Breadcrumb />
        
        <div className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Main Trading Chart - Takes up 2/3 of the width */}
            <div className="col-span-8">
              <TradingChart 
                onBuyClick={() => setShowBuyModal(true)}
                onSellClick={() => setShowSellModal(true)}
              />
            </div>
            
            {/* Right Sidebar - Takes up 1/3 of the width */}
            <div className="col-span-4 space-y-6">
              <AvailableStock />
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <LatestActivities />
            <TeslaNewsfeed />
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg hover:bg-slate-700 transition-colors cursor-pointer">
        <div className="w-6 h-6 bg-blue-500 rounded"></div>
      </div>

      {/* Modals */}
      <BuyModal 
        isOpen={showBuyModal} 
        onClose={() => setShowBuyModal(false)} 
      />
      <SellModal 
        isOpen={showSellModal} 
        onClose={() => setShowSellModal(false)} 
      />
    </div>
  );
};

export default TradeView;