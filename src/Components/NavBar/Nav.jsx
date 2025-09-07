import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  CreditCard,
  ArrowUpDown,
  FileText,
  User,
  LogOut,
  Bell,
  Menu,
  X
} from 'lucide-react';

function Sidebar({ activeTab, onTabChange }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'Overview', label: 'Overview', icon: LayoutDashboard, path: '/' },
    { id: 'Account', label: 'Account', icon: CreditCard, path: '/Account' },
    { id: 'Transfers', label: 'Transfers', icon: ArrowUpDown, path: '/Transfers' },
    { id: 'Statements', label: 'Statements', icon: FileText, path: '/statements' },
    { id: 'Cards', label: 'Cards', icon: CreditCard, path: '/Cards' },
    { id: 'Transactions', label: 'Transactions', icon: ArrowUpDown, path: '/transactions' }
  ];

  
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
     
      if (!mobile && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  const handleNavigation = (item) => {
    navigate(item.path);
    if (onTabChange) {
      onTabChange(item.id);
    }
    
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const handleProfileClick = () => {
    navigate('/Profile');
    if (onTabChange) {
      onTabChange('Profile');
    }
    
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const handleLogout = () => {
    console.log('Logging out...');
    
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
     
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-red-600 text-white rounded-md focus:outline-none"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

     
      <div className={`
        ${isMobile ? 'fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out' : 'relative'} 
        ${isMobile && !sidebarOpen ? '-translate-x-full' : 'translate-x-0'}
        w-64 bg-red-600 text-white flex flex-col h-screen
      `}>
       
        <div className="p-6 flex items-center justify-center space-x-4">
          <button 
            onClick={handleProfileClick}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-white hover:border-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
          <button className="relative p-2 text-white hover:bg-red-500 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></span>
          </button>
        </div>

       
        <nav className="flex-1">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
                      
              return (
                <button 
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`w-full flex items-center space-x-4 px-6 py-4 text-left hover:bg-red-500 transition-colors ${
                    isActive ? 'bg-white text-red-600 font-semibold' : 'text-white'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

       
        <div className="p-6 space-y-2">
          <button 
            onClick={handleProfileClick}
            className={`w-full flex items-center space-x-4 px-4 py-3 text-left hover:bg-red-500 rounded-lg transition-colors ${
              location.pathname === '/profile' ? 'bg-white text-red-600 font-semibold' : 'text-white'
            }`}
          >
            <User size={20} />
            <span className="font-medium">Profile</span>
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-4 px-4 py-3 text-left bg-white text-red-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;