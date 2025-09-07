import React, { useState } from 'react';
import { Check, ChevronDown, User } from 'lucide-react';
import Sidebar from '../NavBar/Nav';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [formData, setFormData] = useState({
    firstName: 'Sung',
    lastName: 'Kimjin',
    email: 'Kimjinsong@gmail.com',
    address: '33062 Hong Kong isle',
    contactNumber: '58077.79',
    city: 'Hong Kong',
    state: 'Hong Kong',
    password: 'sbdfbnd65sfdvb s'
  });

  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);

  const cities = ['Hong Kong', 'Kowloon', 'New Territories', 'Central', 'Tsim Sha Tsui'];
  const states = ['Hong Kong', 'Kowloon', 'New Territories'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Profile saved:', formData);
    
  };

  const handleCancel = () => {
    console.log('Profile edit cancelled');
    
  };

  return (
    <div className="flex h-screen w-screen max-w-none overflow-hidden bg-gray-50">
      
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      
      <div className="flex-1 flex flex-col min-w-0 h-full">
        
        <div className="bg-white px-8 py-6 flex items-center justify-between border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Edit profile</h1>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">恆</span>
            </div>
            <span className="text-sm font-medium text-gray-800">恆生銀行 HANG SENG BANK</span>
          </div>
        </div>

        
        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto">
            
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Edit profile</h2>
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
                    placeholder="Enter first name"
                  />
                </div>

                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
                    placeholder="Enter email address"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
                  placeholder="Enter address"
                />
              </div>

              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">Contact Number</label>
                <input
                  type="text"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
                  placeholder="Enter contact number"
                />
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-900 mb-2">City</label>
                  <button
                    onClick={() => setShowCityDropdown(!showCityDropdown)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <span className="text-gray-900">{formData.city}</span>
                    <ChevronDown size={16} className="text-gray-400" />
                  </button>
                  
                  {showCityDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      {cities.map((city) => (
                        <button
                          key={city}
                          onClick={() => {
                            handleInputChange('city', city);
                            setShowCityDropdown(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

               
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-900 mb-2">State</label>
                  <button
                    onClick={() => setShowStateDropdown(!showStateDropdown)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <span className="text-gray-900">{formData.state}</span>
                    <ChevronDown size={16} className="text-gray-400" />
                  </button>
                  
                  {showStateDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      {states.map((state) => (
                        <button
                          key={state}
                          onClick={() => {
                            handleInputChange('state', state);
                            setShowStateDropdown(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {state}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
                    placeholder="Enter password"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="flex space-x-4 mt-8">
                <button
                  onClick={handleCancel}
                  className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}