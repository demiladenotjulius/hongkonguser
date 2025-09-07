import React, { useState } from 'react';
import Sidebar from '../NavBar/Nav'; 
import bar1 from '../Dasboard/bar1.png';
import bar2 from '../Dasboard/bar2.png';
import bar3 from '../Dasboard/bar2.png';
import {
  Info,
  X,
  ChevronDown
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function AccountDetailsPage() {
  const [activeTab, setActiveTab] = useState('Accounts');
  const [showNotification, setShowNotification] = useState(true);
  
  
  const chartData = [
    { month: 'Jan', value: 1000 },
    { month: 'Feb', value: 1600 },
    { month: 'Mar', value: 700 },
    { month: 'Apr', value: 2500 },
    { month: 'May', value: 1400 },
    { month: 'Jun', value: 2400 },
    { month: 'Jul', value: 950 },
    { month: 'Aug', value: 3000 },
    { month: 'Sep', value: 1200 },
    { month: 'Oct', value: 2050 },
    { month: 'Nov', value: 1600 },
    { month: 'Dec', value: 2800 }
  ];

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

       
        <div className="flex-1 p-8 overflow-auto">
        
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Account Details</h2>
            <p className="text-gray-600">Keep track your financial plan</p>
          </div>

         
          {showNotification && (
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Info className="text-blue-600" size={20} />
                <span className="text-blue-800">Please remember to fill that data that required for your debit card</span>
              </div>
              <div className="flex items-center space-x-3">
                <button className="text-blue-600 font-medium hover:text-blue-800">Got it</button>
                <button 
                  onClick={() => setShowNotification(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}

          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Statistic</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Income Chart</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">This Year</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
            </div>

          
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="h-80">
                <Line
                  data={{
                    labels: chartData.map(item => item.month),
                    datasets: [{
                      data: chartData.map(item => item.value),
                      borderColor: '#3B82F6',
                      backgroundColor: '#3B82F6',
                      borderWidth: 2,
                      pointRadius: 4,
                      pointHoverRadius: 6,
                      tension: 0.4,
                    }]
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                      tooltip: {
                        backgroundColor: '#374151',
                        titleColor: '#F9FAFB',
                        bodyColor: '#F9FAFB',
                        cornerRadius: 8,
                        displayColors: false,
                        callbacks: {
                          label: (context) => `$${context.parsed.y}`
                        }
                      }
                    },
                    scales: {
                      x: {
                        grid: { display: false },
                        border: { display: false },
                        ticks: { color: '#6B7280', font: { size: 12 } }
                      },
                      y: {
                        grid: { display: false },
                        border: { display: false },
                        ticks: { 
                          color: '#6B7280', 
                          font: { size: 12 },
                          callback: (value) => `$${value}`
                        },
                        beginAtZero: true
                      }
                    }
                  }}
                />
              </div>
            </div>

          
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <img src={bar1} alt="Lifetime Income" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Lifetime Income</p>
                    <p className="text-2xl font-bold text-gray-900">$40,728</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <img src={bar2} alt="Lifetime Outcome" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Lifetime Outcome</p>
                    <p className="text-2xl font-bold text-gray-900">$30,239</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <img src={bar3} alt="Bonus Income" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Bonus Income</p>
                    <p className="text-2xl font-bold text-gray-900">$2,490</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}