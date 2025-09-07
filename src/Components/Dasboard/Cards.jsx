import React, { useState } from 'react';
import Sidebar from '../NavBar/Nav'; 
import { Plus, Filter, CreditCard, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const CardsPage = () => {
  const [activeTab, setActiveTab] = useState('Cards');
  const [activeFilter, setActiveFilter] = useState('Type');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 3;

  
  const cards = [
    {
      id: 1,
      type: 'Debit',
      network: 'VISA',
      name: 'Jasmine Asare',
      number: '4802 - 2215 - 1183 - 4289',
      color: 'bg-gradient-to-r from-red-500 to-orange-500'
    },
    {
      id: 2,
      type: 'Credit',
      network: 'VISA',
      name: 'Jasmine Asare',
      number: '4801 - 3000 - 2100 - 5300',
      color: 'bg-gradient-to-r from-blue-500 to-purple-500'
    }
  ];

 
  const transactions = [
    { id: 1, type: 'Debit', date: '11/20/20', account: 'Current Account', details: 'Sub Box Restaurant', amount: '70 GHC' },
    { id: 2, type: 'Debit', date: '9/27/20', account: 'Current Account', details: 'Palace Supermarket', amount: '250 GHC' },
    { id: 3, type: 'Refund', date: '9/25/20', account: 'Current Account', details: 'Refund', amount: '100 GHC' },
    { id: 4, type: 'Debit', date: '9/27/20', account: 'Current Account', details: 'Palace Supermarket', amount: '250 GHC' },
    { id: 5, type: 'Debit', date: '10/15/20', account: 'Savings Account', details: 'Online Purchase', amount: '150 GHC' },
    { id: 6, type: 'Credit', date: '10/12/20', account: 'Current Account', details: 'Payment Received', amount: '500 GHC' }
  ];

  
  const filterOptions = ['Type', 'Date', 'Amount', 'Account'];

  
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen w-screen max-w-none overflow-hidden bg-gray-100">
    
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
    
      <div className="flex-1 flex flex-col min-w-0 h-full">
       
        <div className="bg-white px-8 py-6 flex items-center justify-between border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Cards</h1>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">恆</span>
            </div>
            <span className="text-sm font-medium text-gray-800">恆生銀行 HANG SENG BANK</span>
          </div>
        </div>

      
        <div className="flex-1 p-8 overflow-hidden">
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <span className="text-sm font-semibold">Debit</span>
                <span className="text-lg font-bold">VISA</span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Jasmine Asare</h3>
                <p className="tracking-widest">4802 - 2215 - 1183 - 4289</p>
              </div>
              <div className="flex justify-between items-center">
                <button className="text-sm bg-white bg-opacity-20 hover:bg-opacity-30 py-2 px-4 rounded-full transition">
                  View Details
                </button>
                <CreditCard size={24} />
              </div>
            </div>

            
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <span className="text-sm font-semibold">Credit</span>
                <span className="text-lg font-bold">VISA</span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Jasmine Asare</h3>
                <p className="tracking-widest">4801 - 3000 - 2100 - 5300</p>
              </div>
              <div className="flex justify-between items-center">
                <button className="text-sm bg-white bg-opacity-20 hover:bg-opacity-30 py-2 px-4 rounded-full transition">
                  View Details
                </button>
                <CreditCard size={24} />
              </div>
            </div>

            
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-gray-100 transition cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Plus className="text-red-600" size={24} />
              </div>
              <p className="text-gray-700 font-medium">Add New Card</p>
              <span className="text-2xl mt-2">+</span>
            </div>
          </div>

          
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Card Transactions</h2>
              
             
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 text-gray-600 bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg transition"
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                >
                  <Filter size={16} />
                  <span>Filter By</span>
                  <span className="font-medium">{activeFilter}</span>
                  <ChevronDown size={16} />
                </button>
                
                {showFilterDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {filterOptions.map(option => (
                      <button
                        key={option}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          activeFilter === option ? 'bg-red-100 text-red-700' : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => {
                          setActiveFilter(option);
                          setShowFilterDropdown(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-3 px-4">Type</th>
                    <th className="pb-3 px-4">Date</th>
                    <th className="pb-3 px-4">Account</th>
                    <th className="pb-3 px-4">Details</th>
                    <th className="pb-3 px-4 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTransactions.map(transaction => (
                    <tr key={transaction.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          transaction.type === 'Debit' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {transaction.type}
                        </span>
                      </td>
                      <td className="py-4 px-4">{transaction.date}</td>
                      <td className="py-4 px-4">{transaction.account}</td>
                      <td className="py-4 px-4">{transaction.details}</td>
                      <td className="py-4 px-4 text-right font-medium">
                        {transaction.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">
                Showing {indexOfFirstTransaction + 1} to {Math.min(indexOfLastTransaction, transactions.length)} of {transactions.length} transactions
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <ChevronLeft size={16} />
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`w-8 h-8 rounded-md ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md ${currentPage === totalPages ? 'text-gray-400' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;