import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  ArrowLeftRight, 
  Wallet, 
  TrendingUp, 
  CreditCard, 
  Gift, 
  PiggyBank, 
  Bell, 
  Settings, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  Car // Add Car icon for Tesla products
} from 'lucide-react';

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [notificationCount] = useState(3);

  // Get current page from URL
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/Investment') return 'dashboard';
    if (path === '/Exchange') return 'exchange';
    if (path === '/MyWallet') return 'MyWallet';
    if (path === '/TradeView') return 'tradeview'; // Fixed path
    if (path === '/tesla-products') return 'tesla-products'; // Add Tesla products
     if (path === '/Rewards') return 'Rewards'; // Add Tesla products
     if (path === '/InvestmentsPlan') return 'InvestmentsPlan'; // Add Tesla products
    return 'dashboard';
  };

  const currentPage = getCurrentPage();

  // Handle navigation click
  const handleNavClick = (pageId, path) => {
    navigate(path);
  };

  // Handle logout
  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="w-52 bg-slate-700 text-white flex flex-col h-full">
      {/* Quick Access */}
      <div className="p-4 border-b border-slate-600">
        <h2 className="text-sm font-medium text-gray-300 mb-3">Quick Access</h2>
        <div className="space-y-2">
          {/* Dashboard - Links to Investment */}
          <button
            onClick={() => handleNavClick('dashboard', '/Investment')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded text-sm transition-colors duration-200 ${
              currentPage === 'dashboard' 
                ? 'bg-red-600 text-white' 
                : 'text-gray-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </div>
          </button>


           {/* Exchange */}
          <button
            onClick={() => handleNavClick('exchange', '/Exchange')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors duration-200 ${
              currentPage === 'exchange' 
                ? 'bg-red-600 text-white' 
                : 'text-gray-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>Exchange</span>
          </button>


            <button
            onClick={() => handleNavClick('MyWallet', '/MyWallet')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors duration-200 ${
              currentPage === 'MyWallet' 
                ? 'bg-red-600 text-white' 
                : 'text-gray-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            <Wallet className="w-4 h-4" />
            <span>Wallet</span>
          </button>

         

          {/* Tradeview - Fixed to navigate to /TradeView */}
          <button
            onClick={() => handleNavClick('tradeview', '/TradeView')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors duration-200 ${
              currentPage === 'tradeview' 
                ? 'bg-red-600 text-white' 
                : 'text-gray-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Tradeview</span>
          </button>

          {/* Tesla Products - New Link */}
          <button
            onClick={() => handleNavClick('tesla-products', '/tesla-products')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors duration-200 ${
              currentPage === 'tesla-products' 
                ? 'bg-red-600 text-white' 
                : 'text-gray-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Tesla Products</span>
          </button>
        </div>
      </div>

      {/* Service Section */}
      <div className="p-4 border-b border-slate-600">
        <h2 className="text-sm font-medium text-gray-300 mb-3">Service</h2>
        <div className="space-y-2">
          {/* Transactions */}
          <button
            onClick={() => handleNavClick('transactions', '/transactions')}
            className="w-full flex items-center justify-between px-3 py-2 rounded text-sm transition-colors duration-200 text-gray-300 hover:bg-slate-600 hover:text-white"
          >
            <div className="flex items-center space-x-3">
              <CreditCard className="w-4 h-4" />
              <span>Transactions</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </button>

          {/* Rewards */}
          <button
            onClick={() => handleNavClick('Rewards', '/Rewards')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors duration-200 ${
              currentPage === 'Rewards' 
                ? 'bg-red-600 text-white' 
                : 'text-gray-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            <Gift className="w-4 h-4" />
            <span>Rewards</span>
          </button>

          {/* Investment Plan - Fixed text and icon */}
           <button
            onClick={() => handleNavClick('InvestmentsPlan', '/InvestmentsPlan')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors duration-200 ${
              currentPage === 'InvestmentsPlan' 
                ? 'bg-red-600 text-white' 
                : 'text-gray-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            <PiggyBank className="w-4 h-4" />
            <span>Investment Plan</span>
          </button>
        </div>
      </div>

      {/* Account Section */}
      <div className="p-4 flex-1">
        <h2 className="text-sm font-medium text-gray-300 mb-3">Account</h2>
        <div className="space-y-2">
          {/* Notifications */}
          <button
            onClick={() => handleNavClick('notifications', '/notifications')}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors duration-200 text-gray-300 hover:bg-slate-600 hover:text-white"
          >
            <Bell className="w-4 h-4" />
            <span>Notifications</span>
          </button>

          {/* Settings */}
          <button
            onClick={() => handleNavClick('settings', '/settings')}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors duration-200 text-gray-300 hover:bg-slate-600 hover:text-white"
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>

          {/* FAQ */}
          <button
            onClick={() => handleNavClick('faq', '/faq')}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors duration-200 text-gray-300 hover:bg-slate-600 hover:text-white"
          >
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-600">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 text-sm text-gray-300 hover:bg-slate-600 hover:text-white px-3 py-2 rounded transition-colors duration-200"
        >
          <LogOut className="w-4 h-4" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;