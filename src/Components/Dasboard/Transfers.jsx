import React, { useState } from 'react';
import {
  Building2,
  Copy,
  Share,
  Heart,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  Wrench,
  MessageSquare,
  ArrowLeft,
  Check,
  Download
} from 'lucide-react';
import Sidebar from '../NavBar/Nav';


// Savings Goals Component (Reusable)
function SavingsGoals() {
  const savingsGoals = [
    {
      id: 1,
      icon: Heart,
      title: "Emergency fund",
      lastPaid: "August 28, 2022",
      current: 900,
      total: 3000,
      percentage: 30,
      color: "bg-pink-500"
    },
    {
      id: 2,
      icon: Briefcase,
      title: "Travel Plan",
      lastPaid: "August 28, 2022",
      current: 10000,
      total: 20000,
      percentage: 50,
      color: "bg-red-500"
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "Education",
      lastPaid: "August 28, 2022",
      current: 7000,
      total: 10000,
      percentage: 70,
      color: "bg-red-500"
    },
    {
      id: 4,
      icon: ShoppingCart,
      title: "Foods and Groceries",
      lastPaid: "August 28, 2022",
      current: 300,
      total: 1000,
      percentage: 30,
      color: "bg-red-500"
    },
    {
      id: 5,
      icon: Wrench,
      title: "Repair Vehicle",
      lastPaid: "August 28, 2022",
      current: 900,
      total: 1000,
      percentage: 90,
      color: "bg-red-500"
    }
  ];

  return (
    <div className="w-80 flex-shrink-0">
      <div className="space-y-4 pb-8">
        {savingsGoals.map((goal) => {
          const IconComponent = goal.icon;
          return (
            <div key={goal.id} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <IconComponent size={16} className="text-gray-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{goal.title}</h4>
                  <p className="text-xs text-gray-500">Last Paid on {goal.lastPaid}</p>
                </div>
                <span className="text-sm font-semibold text-gray-900">{goal.percentage}%</span>
              </div>
              
              <div className="mb-3">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-lg font-bold text-red-600">${goal.current.toLocaleString()}</span>
                  <span className="text-sm text-gray-400">/ ${goal.total.toLocaleString()}</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${goal.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${goal.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Transfer Form Component
function TransferForm({ onContinue, balance = 20000 }) {
  const [formData, setFormData] = useState({
    accountNumber: '',
    amount: '',
    swiftCode: '',
    beneficiaryName: '',
    routingNumber: '',
    address: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (formData.accountNumber && formData.amount && formData.beneficiaryName) {
      onContinue(formData);
    }
  };

  return (
    <div className="flex h-full">
  {/* Main Transfer Form */}
  <div className="flex-1 flex items-start justify-center pr-8 pt-4">
    <div className="bg-red-600 p-4 rounded-2xl w-full max-w-lg">
      <div className="bg-white rounded-2xl p-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">Send to Bank Account</h2>
        
        {/* Balance Display */}
        <div className="bg-red-600 text-white p-3 rounded-lg mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs opacity-90">Total Balance</p>
            <p className="text-xl font-bold">${balance.toLocaleString()}.00</p>
            <p className="text-xs opacity-75">Last updated 2 wks ago</p>
          </div>
          <Building2 className="text-white opacity-75" size={20} />
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Account Number</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              value={formData.accountNumber}
              onChange={(e) => handleInputChange('accountNumber', e.target.value)}
              placeholder="Enter account number"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Amount</label>
            <div className="relative">
              <input
                type="number"
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                placeholder="0.00"
              />
              <span className="absolute right-3 top-2.5 text-gray-400 text-xs">Max</span>
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Swift/BIC code</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              value={formData.swiftCode}
              onChange={(e) => handleInputChange('swiftCode', e.target.value)}
              placeholder="Enter SWIFT/BIC code"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Beneficiary's name</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              value={formData.beneficiaryName}
              onChange={(e) => handleInputChange('beneficiaryName', e.target.value)}
              placeholder="Enter beneficiary name"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Routing Number</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              value={formData.routingNumber}
              onChange={(e) => handleInputChange('routingNumber', e.target.value)}
              placeholder="Enter routing number"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">Address</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Enter address"
            />
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-red-400 text-white py-3 rounded-lg font-medium mt-4 hover:bg-red-500 transition-colors text-sm"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
  <SavingsGoals/>
</div>
  );
}

// Passcode Entry Component
function PasscodeEntry({ onPasscodeSubmit, onBack }) {
  const [passcode, setPasscode] = useState('');
  const [dots, setDots] = useState([false, false, false, false]);

  const handleNumberClick = (num) => {
    if (passcode.length < 4) {
      const newPasscode = passcode + num;
      setPasscode(newPasscode);
      
      const newDots = [...dots];
      newDots[newPasscode.length - 1] = true;
      setDots(newDots);

      if (newPasscode.length === 4) {
        setTimeout(() => {
          onPasscodeSubmit(newPasscode);
        }, 200);
      }
    }
  };

  const handleBackspace = () => {
    if (passcode.length > 0) {
      const newPasscode = passcode.slice(0, -1);
      setPasscode(newPasscode);
      
      const newDots = [...dots];
      newDots[passcode.length - 1] = false;
      setDots(newDots);
    }
  };

  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
  ];

  return (
    <div className="flex h-full">
   {/* Main Passcode Entry */}
<div className="flex-1 flex items-start justify-center pr-8 pt-4">
  <div className="bg-red-600 p-4 rounded-2xl w-full max-w-lg">
    <div className="bg-white rounded-2xl p-4">
      <div className="text-center mb-4">
        <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3">
          <div className="w-4 h-4 border-2 border-red-600 rounded"></div>
        </div>
        <h2 className="text-lg font-bold text-gray-900 mb-2">Enter your passcode</h2>
        <p className="text-xs text-gray-600">Enter your 4-digit passcode to perform this transaction.</p>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        {dots.map((filled, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              filled ? 'bg-red-600' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {numbers.flat().map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-lg font-semibold text-gray-800 hover:bg-gray-200 transition-colors mx-auto"
          >
            {num}
          </button>
        ))}
        <div></div>
        <button
          onClick={handleBackspace}
          className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors mx-auto"
        >
          <ArrowLeft size={18} className="text-gray-600" />
        </button>
      </div>
    </div>
  </div>
</div>

{/* Right Section - Savings Goals */}
<SavingsGoals />
    </div>
  );
}

// Transfer Success Component
function TransferSuccess({ transferData, onShareReceipt, onDownloadReceipt, onComplete }) {
  const { amount = 5000, accountNumber = '334235443546' } = transferData || {};

  return (
    <div className="flex h-full">
      {/* Main Success Content */}
     {/* Main Success Content */}
<div className="flex-1 flex items-start justify-center pr-8 pt-4">
  <div className="bg-red-600 p-4 rounded-2xl w-full max-w-lg">
    <div className="bg-white rounded-2xl p-4 text-center">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Send Money</h2>
      
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="text-white" size={20} />
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">Transfer successful!</h3>
      <p className="text-gray-600 text-sm mb-1">
        You have successfully transferred ${amount.toLocaleString()}.00
      </p>
      <p className="text-gray-500 text-xs mb-4">
        Bank Account: {accountNumber}
      </p>

      <div className="space-y-3 max-w-md mx-auto">
        <button
          onClick={onShareReceipt}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-medium text-sm hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Share size={16} />
          <span>Share Receipt</span>
        </button>
        
        <button
          onClick={onDownloadReceipt}
          className="w-full border-2 border-red-600 text-red-600 py-3 rounded-lg font-medium text-sm hover:bg-red-50 transition-colors flex items-center justify-center space-x-2"
        >
          <Download size={16} />
          <span>Download receipt</span>
        </button>

        <button
          onClick={onComplete}
          className="w-full text-gray-500 py-2 text-xs underline hover:text-gray-700"
        >
          Return to Transfer Page
        </button>
      </div>
    </div>
  </div>
</div>

{/* Right Section - Savings Goals */}
<SavingsGoals />
    </div>
  );
}

export default function Transfers() {
  const [activeTab, setActiveTab] = useState('Transfers');
  const [copied, setCopied] = useState(false);
  const [currentView, setCurrentView] = useState('main'); // 'main', 'transferForm', 'passcode', 'success'
  const [transferData, setTransferData] = useState(null);
  const [navigationHistory, setNavigationHistory] = useState(['main']); // Track navigation history
  
  const swiftAccountNumber = "334347549834438";

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(swiftAccountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleShareInfo = () => {
    console.log('Share info clicked');
  };

  // Navigation helper functions
  const navigateToView = (newView) => {
    setNavigationHistory(prev => [...prev, newView]);
    setCurrentView(newView);
  };

  const navigateBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = [...navigationHistory];
      newHistory.pop(); // Remove current view
      const previousView = newHistory[newHistory.length - 1];
      
      setNavigationHistory(newHistory);
      setCurrentView(previousView);
    } else {
      // Fallback to main if no history
      setCurrentView('main');
      setNavigationHistory(['main']);
    }
  };

  const resetToMain = () => {
    setCurrentView('main');
    setNavigationHistory(['main']);
    setTransferData(null);
  };

  // Bank Transfer Flow Handlers
  const handleBankTransferClick = () => {
    navigateToView('transferForm');
  };

  const handleContinueFromForm = (formData) => {
    setTransferData(formData);
    navigateToView('passcode');
  };

  const handlePasscodeSubmit = (passcode) => {
    console.log('Passcode entered:', passcode);
    navigateToView('success');
  };

  const handleShareReceipt = () => {
    // Generate and share receipt
    const receiptData = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      amount: transferData?.amount || '5000',
      accountNumber: transferData?.accountNumber || '334235443546',
      beneficiaryName: transferData?.beneficiaryName || 'John Doe',
      transactionId: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase()
    };
    
    const receiptText = `
HANG SENG BANK - Transfer Receipt
═══════════════════════════════════
Date: ${receiptData.date}
Time: ${receiptData.time}
Transaction ID: ${receiptData.transactionId}

TRANSFER DETAILS:
Amount: $${parseFloat(receiptData.amount).toLocaleString()}.00
To Account: ${receiptData.accountNumber}
Beneficiary: ${receiptData.beneficiaryName}

Status: SUCCESSFUL
═══════════════════════════════════
Thank you for using Hang Seng Bank
    `;

    if (navigator.share) {
      navigator.share({
        title: 'Transfer Receipt - Hang Seng Bank',
        text: receiptText
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(receiptText).then(() => {
        alert('Receipt copied to clipboard!');
      });
    }
  };

  const handleDownloadReceipt = () => {
    // Create and download receipt as text file
    const receiptData = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      amount: transferData?.amount || '5000',
      accountNumber: transferData?.accountNumber || '334235443546',
      beneficiaryName: transferData?.beneficiaryName || 'John Doe',
      transactionId: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase()
    };
    
    const receiptText = `
HANG SENG BANK - Transfer Receipt
═══════════════════════════════════
Date: ${receiptData.date}
Time: ${receiptData.time}
Transaction ID: ${receiptData.transactionId}

TRANSFER DETAILS:
Amount: $${parseFloat(receiptData.amount).toLocaleString()}.00
To Account: ${receiptData.accountNumber}
Beneficiary: ${receiptData.beneficiaryName}
Swift Code: ${transferData?.swiftCode || 'N/A'}
Routing Number: ${transferData?.routingNumber || 'N/A'}

Status: SUCCESSFUL
═══════════════════════════════════
Thank you for using Hang Seng Bank

This receipt serves as proof of your transaction.
Please keep it for your records.
    `;

    const blob = new Blob([receiptText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Transfer_Receipt_${receiptData.transactionId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Handle back button logic
  const handleBackButton = () => {
    if (currentView === 'success') {
      // From success page, go back to main (transfer first page)
      resetToMain();
    } else {
      // For other views, go to previous view
      navigateBack();
    }
  };

  // Render transfer flow components
  if (currentView !== 'main') {
    return (
      <div className="flex h-screen w-screen max-w-none overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 h-full">
          {/* Header with Back Button */}
          <div className="bg-white px-8 py-6 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackButton}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </button>
              <h1 className="text-2xl font-bold text-gray-800">
                {currentView === 'transferForm' && 'Bank Transfer'}
                {currentView === 'passcode' && 'Enter Passcode'}
                {currentView === 'success' && 'Transfer Complete'}
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">恆</span>
              </div>
              <span className="text-sm font-medium text-gray-800">恆生銀行 HANG SENG BANK</span>
            </div>
          </div>

          {/* Transfer Flow Content */}
          <div className="flex-1 p-8 overflow-auto">
            {currentView === 'transferForm' && (
              <TransferForm onContinue={handleContinueFromForm} />
            )}
            
            {currentView === 'passcode' && (
              <PasscodeEntry 
                onPasscodeSubmit={handlePasscodeSubmit}
                onBack={navigateBack}
              />
            )}
            
            {currentView === 'success' && (
              <TransferSuccess
                transferData={transferData}
                onShareReceipt={handleShareReceipt}
                onDownloadReceipt={handleDownloadReceipt}
                onComplete={resetToMain}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  // Main Transfer Page - rest of your existing code stays the same
  return (
    <div className="flex h-screen w-screen max-w-none overflow-hidden bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col min-w-0 h-full">
        <div className="bg-white px-8 py-6 flex items-center justify-between border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Transfer</h1>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">恆</span>
            </div>
            <span className="text-sm font-medium text-gray-800">恆生銀行 HANG SENG BANK</span>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Transfer</h2>
                <p className="text-gray-600">Keep track your financial plan</p>
              </div>

              <div className="mb-8 ">
                <div className="bg-white rounded-lg border border-gray-200 p-4 max-w-lg w-[500px]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Receive Money</h3>
                    <MessageSquare size={18} className="text-gray-400" />
                  </div>
                  <button 
                    onClick={handleBankTransferClick}
                    className="w-full flex items-center justify-between mb-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                        <Building2 className="text-red-600" size={20} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-base font-semibold text-gray-900">Bank Transfer</h4>
                        <p className="text-xs text-gray-600">Add money via mobile or internet banking</p>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      <svg width="6" height="10" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>

                  <div className="mb-4">
                    <p className="text-xs text-gray-600 mb-1">Swift Pay Account Number</p>
                    <p className="text-lg font-bold text-gray-900 mb-3 tracking-wider">{swiftAccountNumber}</p>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={handleCopyNumber}
                      className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:border-gray-400 transition-colors flex items-center justify-center space-x-1 text-sm"
                    >
                      <Copy size={16} />
                      <span>{copied ? 'Copied!' : 'Copy Number'}</span>
                    </button>
                    <button
                      onClick={handleShareInfo}
                      className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-1 text-sm"
                    >
                      <Share size={16} />
                      <span>Share Info</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <SavingsGoals />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}