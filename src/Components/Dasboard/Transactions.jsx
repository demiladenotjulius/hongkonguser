import React, { useState } from 'react';
import Sidebar from '../NavBar/Nav';
import bar1 from '../Dasboard/bar2.png'; 
import bar2 from '../Dasboard/bar1.png';
import bar3 from '../Dasboard/bar.png'; 

export default function TransactionHistory() {
  const [activeTab, setActiveTab] = useState('Transactions');
  const [filter, setFilter] = useState('All');

  const transactions = [
    { type: 'Debit', date: '11/20/20', details: 'Sub Box Restaurant', amount: '70 GHC', balance: '5,400 GHC' },
    { type: 'Credit', date: '10/15/20', details: 'Salary', amount: '4,500 GHC', balance: '5,330 GHC' },
    { type: 'Transfer', date: '10/10/20', details: 'Transfer from Savings', amount: '1,000 GHC', balance: '6,300 GHC' },
    { type: 'Debit', date: '9/27/20', details: 'Palace Supermarket', amount: '250 GHC', balance: '6,050 GHC' },
    { type: 'Debit', date: '9/25/20', details: 'Pan And Cook', amount: '56 GHC', balance: '5,994 GHC' },
  ];

  const filteredTransactions = filter === 'All'
    ? transactions
    : transactions.filter(t => t.type === filter);

  const transactionTypeColor = {
    Debit: 'bg-red-100 text-red-600',
    Credit: 'bg-green-100 text-green-600',
    Transfer: 'bg-blue-100 text-blue-600',
  };

  return (
    <div className="flex h-screen w-screen max-w-none overflow-hidden bg-gray-50">
      
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      
      <div className="flex-1 flex flex-col min-w-0 h-full">
       
        <div className="bg-white px-8 py-6 flex items-center justify-between border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Transaction History</h1>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">恆</span>
            </div>
            <span className="text-sm font-medium text-gray-800">恆生銀行 HANG SENG BANK</span>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-auto">
         
          <div className="bg-blue-100 border border-blue-300 text-blue-700 p-4 rounded-lg flex justify-between items-center mb-6">
            <span>Please remember to fill that data that required for your debit card</span>
            <button className="text-sm font-semibold text-blue-600">Got it</button>
          </div>

         
          <div className="flex justify-between items-center mb-4">
            <label className="text-gray-700 font-medium">Filter By</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-red-300"
            >
              <option value="All">All</option>
              <option value="Debit">Debit</option>
              <option value="Credit">Credit</option>
              <option value="Transfer">Transfer</option>
            </select>
          </div>

          
          <div className="overflow-auto rounded-lg shadow bg-white">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Details</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Balance</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50 text-gray-700">
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${transactionTypeColor[tx.type]}`}>
                        {tx.type}
                      </span>
                    </td>
                    <td className="py-3 px-4">{tx.date}</td>
                    <td className="py-3 px-4">{tx.details}</td>
                    <td className="py-3 px-4">{tx.amount}</td>
                    <td className="py-3 px-4 font-semibold">{tx.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

         
          <div className="mt-6 flex justify-center space-x-2 text-sm text-gray-600">
            <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Prev</button>
            <button className="px-3 py-1 rounded bg-red-600 text-white font-medium">1</button>
            <button className="px-3 py-1 rounded hover:bg-gray-200">2</button>
            <button className="px-3 py-1 rounded hover:bg-gray-200">3</button>
            <button className="px-3 py-1 rounded hover:bg-gray-200">4</button>
            <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Next</button>
          </div>

          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-orange-100 p-4 rounded-lg shadow flex items-center space-x-3">
              <div className="bg-orange-200 rounded-lg p-2">
                <img src={bar1} alt="Lifetime Income Chart" className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Lifetime Income</p>
                <p className="text-2xl font-semibold text-gray-800">$40,728</p>
              </div>
            </div>
            <div className="bg-pink-100 p-4 rounded-lg shadow flex items-center space-x-3">
              <div className="bg-pink-200 rounded-lg p-2">
                <img src={bar2} alt="Lifetime Outcome Chart" className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Lifetime Outcome</p>
                <p className="text-2xl font-semibold text-gray-800">$30,239</p>
              </div>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow flex items-center space-x-3">
              <div className="bg-purple-200 rounded-lg p-2">
                <img src={bar3} alt="Bonus Income Chart" className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Bonus Income</p>
                <p className="text-2xl font-semibold text-gray-800">$2,490</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}