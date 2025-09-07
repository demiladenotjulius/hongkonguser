import React, { useState } from "react";
import Sidebar from "../NavBar/Nav"; 
import { 
  MoreHorizontal
} from 'lucide-react';
// Import your custom icons
import icon1 from '../Dasboard/icon.png'; // Update with correct path
import icon2 from '../Dasboard/icon1.png'; // Update with correct path

export default function BankDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  const transactions = [
    { type: 'Debit', date: '11/20/20', details: 'Sub Box Restaurant', amount: '70 GHC', balance: '5,400 GHC' },
    { type: 'Credit', date: '10/15/20', details: 'Salary', amount: '4,500 GHC', balance: '5,330 GHC' },
    { type: 'Transfer', date: '10/10/20', details: 'Transfer from Savings', amount: '1000 GHC', balance: '6,300 GHC' },
    { type: 'Debit', date: '9/27/20', details: 'Palace Supermarket', amount: '250 GHC', balance: '6,050 GHC' },
    { type: 'Debit', date: '9/25/20', details: 'Pan And Cook', amount: '56 GHC', balance: '5,994 GHC' },
  ];

  const getTransactionColor = (type) => {
    switch(type) {
      case 'Debit': return 'bg-red-100 text-red-700';
      case 'Credit': return 'bg-green-100 text-green-700';
      case 'Transfer': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex h-screen w-screen max-w-none overflow-hidden bg-gray-50">
      
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} /> 
      <div className="flex-1 flex flex-col min-w-0 h-full">
       
        <div className="bg-white px-8 py-6 flex items-center justify-between border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Jin sung</h1>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">恆</span>
            </div>
            <span className="text-sm font-medium text-gray-800">恆生銀行 HANG SENG BANK</span>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-hidden flex flex-col">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Balance</h2>
            <div className="flex gap-6 h-32">
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Account</h3>
                <p className="text-3xl font-bold text-blue-600">$124,543</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Saving Account</h3>
                <p className="text-3xl font-bold text-blue-600">$124,543</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow flex-shrink-0 w-64">
                <div className="flex h-full">
                  <div className="flex-1 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 rounded-l-lg">
                    <img src={icon1} alt="Send payment" className="w-6 h-6 mb-2" />
                    <span className="text-xs font-medium text-gray-700 text-center">Send a payment</span>
                  </div>
                  <div className="w-px bg-gray-200"></div>
                  <div className="flex-1 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 rounded-r-lg">
                    <img src={icon2} alt="Request payment" className="w-6 h-6 mb-2" />
                    <span className="text-xs font-medium text-gray-700 text-center">Request a payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 flex-1 flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Transactions</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Filter By</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700">
                    Type ▼
                  </button>
                </div>
              </div>
            </div>

           
            <div className="flex-1 overflow-hidden">
              <table className="w-full h-full">
                <thead className="bg-red-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Details</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Balance</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTransactionColor(transaction.type)}`}>
                          {transaction.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{transaction.date}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{transaction.details}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{transaction.amount}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{transaction.balance}</td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between flex-shrink-0">
              <button className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                Prev
              </button>
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 bg-red-600 text-white rounded text-sm font-semibold">1</button>
                <button className="w-8 h-8 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
                <button className="w-8 h-8 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
                <button className="w-8 h-8 border border-gray-300 rounded text-sm hover:bg-gray-50">4</button>
              </div>
              <button className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}