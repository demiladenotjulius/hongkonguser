import React from "react";
import { Link } from "react-router-dom";
import BusinessLoan from "../assets/BusinessLoan.jpg";
import Car from "../assets/Car.png";
import Cards from "../assets/Cards.png";
import Credit from "../assets/Credit.jpg";
import Deposits from "../assets/Deposits.png";
import DigitalBanking from "../assets/DigitalBanking.png";
import Education from "../assets/Education.png";
import Empowerment from "../assets/Empowerment.jpg";
import Equities from "../assets/Equities.png";
import Homes from "../assets/Homes.png";
import Loans from "../assets/Loans.png";
import MutualFunds from "../assets/MutualFunds.png";
import Name from "../assets/Name.png";
import OnlineBanking from "../assets/OnlineBanking.png";
import Person from "../assets/Person.jpg";
import PersonalLoan from "../assets/PersonalLoan.png";
import Qrcode from "../assets/Qrcode.png";
import Rates from "../assets/Rates.png";
import Retiree from "../assets/Retiree.png";
import Reward from "../assets/Reward.png";
import Secure from "../assets/Secure.png";
import Women from "../assets/Women.png";
import World from "../assets/World.png";
import Nav from "./NavBar/Nav";
import Apple from "../assets/Apple.svg"
import PlayStore from "../assets/PlayStore.svg"
import Facebook from "../assets/Facebook.svg"
import Twitter from "../assets/Twitter.svg"
import Instagram from "../assets/Instagram.svg"
import Linked from "../assets/Linked.svg"


const Home = () => {
  return (
    <>
          {/* Header */}
      <header className="bg-gradient-to-r from-white to-blue-200 p-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center">
              <img src={Name} alt="Hang Seng Bank Logo" className="h-8 mr-3" />
             
            </div>
            
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="hidden lg:flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition-colors">Fees and Services</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition-colors">Apps</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition-colors">Tenders</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 text-sm transition-colors">Public Notices</a>
              </div>
              
              <div className="flex items-center space-x-3">
                <input 
                  type="text" 
                  placeholder="Search" 
                  aria-label="Search"
                  className="p-2 border rounded-2xl text-black text-sm w-32 lg:w-40 focus:outline-none focus:ring-2 focus:ring-blue-300" 
                />
                <Link to= "/Login">
                       <button className="bg-red-600 text-white px-6 py-2 rounded-2xl font-semibold cursor-pointer hover:bg-red-700 transition-colors">
                  Login
                </button>
                
                </Link>
         
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <Nav />
      
   {/* Hero Section */}
      <section className="relative bg-gray-100 py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            <div className="text-black max-w-lg z-10 text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
                Bank of Hong Kong,<br />
                Your Trusted Financial<br />
                Partner.
              </h1>
              <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-gray-700">
                Smart, secure, and seamless banking—built for individuals,<br className="hidden lg:block" />
                families, and businesses.
              </p>
            <Link to="/Signup">
              <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-800 cursor-pointer font-semibold mb-4 lg:mb-6">
                Open an Account
              </button>
            </Link>
            

              <div>
                <p className="text-sm text-black font-medium mb-2">DOWNLOAD THE APP</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img src={Person} alt="Business Person" className="w-64 lg:w-96 h-auto object-cover" />
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-40 lg:w-80 h-full bg-gradient-to-r from-red-500 to-purple-600 opacity-20 rounded-r-full"></div>
        <div className="absolute top-0 right-0 w-40 lg:w-80 h-full bg-gradient-to-l from-blue-600 to-purple-600 opacity-20 rounded-l-full"></div>
        
        {/* Pagination dots */}
        <div className="absolute bottom-6 right-6 flex space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </section>


     {/* Legal Notice */}
      <div className="bg-white px-4 lg:px-6 py-2">
        <div className="container mx-auto">
          <p className="text-xs text-gray-600 leading-relaxed">
            Re-revised SAFE DEPOSIT LOCKER AGREEMENT/Supplementary SAFE DEPOSIT LOCKER AGREEMENT w.e.f. April 2023. • Any changes in KYC details of existing customers the same shall be updated by the customers within 30 days of the
          </p>
        </div>
      </div>

     {/* Quote Section */}
      <div className="bg-gray-300 py-4 px-4 lg:px-6">
        <div className="container mx-auto">
          <h1 className="text-2xl lg:text-3xl font-bold text-blue-800 text-center">
            "Unlock your financial potential with our banking solution!"
          </h1>
        </div>
      </div>


     {/* Banking Solutions Section */}
      <section className="relative bg-gray-50 py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Banking Essentials */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center bg-gray-100 py-3 rounded-lg">
                Banking Essentials
              </h2>
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="text-center">
                  <img src={OnlineBanking} alt="Online Banking" className="mx-auto mb-3 w-10 h-10 lg:w-12 lg:h-12" />
                  <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Online Banking</h3>
                </div>
                <div className="text-center">
                  <img src={Cards} alt="Cards" className="mx-auto mb-3 w-10 h-10 lg:w-12 lg:h-12" />
                  <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Cards</h3>
                </div>
                <div className="text-center">
                  <img src={Loans} alt="Loans Schemes" className="mx-auto mb-3 w-10 h-10 lg:w-12 lg:h-12" />
                  <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Loans Schemes</h3>
                </div>
                <div className="text-center">
                  <img src={Rates} alt="Rates & Charges" className="mx-auto mb-3 w-10 h-10 lg:w-12 lg:h-12" />
                  <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Rates & Charges</h3>
                </div>
              </div>
            </div>

            {/* Tailored Solutions */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center bg-gray-100 py-3 rounded-lg">
                Tailored Solutions
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={DigitalBanking} alt="Digital Banking" className="w-10 h-10 lg:w-12 lg:h-12 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Digital Banking</h3>
                      <p className="text-xs lg:text-sm text-gray-600">Bank Anywhere, Anytime.</p>
                    </div>
                  </div>
                  <button className="text-red-500 font-semibold text-xs lg:text-sm hover:text-red-700">
                    AVAIL NOW →
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={MutualFunds} alt="Mutual Funds" className="w-10 h-10 lg:w-12 lg:h-12 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Mutual Funds</h3>
                      <p className="text-xs lg:text-sm text-gray-600">Invest in Portfolios</p>
                    </div>
                  </div>
                  <button className="text-red-500 font-semibold text-xs lg:text-sm hover:text-red-700">
                    AVAIL NOW →
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={Equities} alt="Explore Equities" className="w-10 h-10 lg:w-12 lg:h-12 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Explore Equities</h3>
                      <p className="text-xs lg:text-sm text-gray-600">Discover Stock Market.</p>
                    </div>
                  </div>
                  <button className="text-red-500 font-semibold text-xs lg:text-sm hover:text-red-700">
                    AVAIL NOW →
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={Deposits} alt="Deposit" className="w-10 h-10 lg:w-12 lg:h-12 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Deposit</h3>
                      <p className="text-xs lg:text-sm text-gray-600">Secure Your Savings.</p>
                    </div>
                  </div>
                  <button className="text-red-500 font-semibold text-xs lg:text-sm hover:text-red-700">
                    AVAIL NOW →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Accounts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Accounts */}
            <div className="lg:col-span-2 bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 text-center bg-gray-100 py-3 rounded-lg">
                Accounts
              </h2>
              <p className="text-center text-gray-600 mb-6 lg:mb-8">
                Discover the perfect account for your financial journey
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4">Savings Account</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Hang Seng Women's Account</h4>
                    <button className="text-red-500 font-semibold text-xs lg:text-sm hover:text-red-700 flex items-center">
                      Learn More →
                    </button>
                    <div className="mt-2">
                      <img src={Women} alt="Women's Account" className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4">Current Account</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Hang Seng Retiree Account</h4>
                    <button className="text-red-500 font-semibold text-xs lg:text-sm hover:text-red-700 flex items-center">
                      Learn More →
                    </button>
                    <div className="mt-2">
                      <img src={Retiree} alt="Retiree Account" className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What's New */}
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center bg-gray-100 py-3 rounded-lg">
                What's New
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 text-xs lg:text-sm mb-1">
                    Hang Seng Bank secures 3rd Rank in EASE reforms
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-xs lg:text-sm mb-1">
                    Notice for Conversion of accounts under SBZER to Normal Savings Accounts
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-xs lg:text-sm mb-1">
                    Hang Seng Bank-receives PCI PIN Certification
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-xs lg:text-sm mb-1">
                    Hang Seng Bank STAR PERFORMER
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-40 lg:w-80 h-40 lg:h-80 bg-gradient-to-br from-red-400 to-purple-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 lg:w-80 h-40 lg:h-80 bg-gradient-to-tl from-blue-500 to-purple-600 opacity-20 rounded-full blur-3xl"></div>
      </section>



     {/* Banking Bonuses Section */}
      <section className="relative bg-gray-200 py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Banking Bonuses</h2>
            <p className="text-gray-700 text-base lg:text-lg mb-6 lg:mb-8">
              A new era of banking: Seamless, secure and personalized for every aspect of your financial life!
            </p>
          </div>
          
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6 lg:p-8 max-w-6xl mx-auto">
            {/* Card Type Tabs */}
            <div className="flex justify-center space-x-4 lg:space-x-8 mb-6 lg:mb-8 overflow-x-auto">
              <button className="text-black font-semibold text-sm lg:text-lg border-b-2 border-red-500 pb-2 whitespace-nowrap">Credit Card</button>
              <button className="text-gray-600 font-semibold text-sm lg:text-lg hover:text-black pb-2 whitespace-nowrap">Debit Card</button>
              <button className="text-gray-600 font-semibold text-sm lg:text-lg hover:text-black pb-2 whitespace-nowrap">Master Card</button>
              <button className="text-gray-600 font-semibold text-sm lg:text-lg hover:text-black pb-2 whitespace-nowrap">Other Card</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div>
                <blockquote className="text-lg lg:text-xl font-semibold text-gray-800 mb-6 lg:mb-8">
                  "Enjoy low fees, robust security, and exclusive perks nationwide."
                </blockquote>
                
                {/* Features */}
                <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-6 lg:mb-8">
                  <div className="text-center">
                    <div className="bg-green-100 p-3 lg:p-4 rounded-full w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 flex items-center justify-center">
                      <img src={Secure} alt="Secure" className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Secure</h3>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-100 p-3 lg:p-4 rounded-full w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 flex items-center justify-center">
                      <img src={Reward} alt="Rewarding" className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Rewarding</h3>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 lg:p-4 rounded-full w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 flex items-center justify-center">
                      <img src={World} alt="Widely Accepted" className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Widely Accepted</h3>
                  </div>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-red-600 text-white px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Apply Now
                  </button>
                  <button className="text-red-600 font-semibold hover:text-red-700 flex items-center justify-center">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Right Side - Credit Card */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 p-4 lg:p-6 rounded-2xl shadow-2xl w-64 lg:w-80 h-40 lg:h-48">
                    <div className="text-white">
                      <div className="flex justify-between items-center mb-3 lg:mb-4">
                        <div className="w-6 h-4 lg:w-8 lg:h-6 bg-yellow-400 rounded"></div>
                        <span className="text-lg lg:text-xl font-bold">VISA</span>
                      </div>
                      <div className="text-white text-base lg:text-lg font-mono mb-4 lg:mb-6 tracking-wider">
                        **** **** **** 2345
                      </div>
                      <div className="flex justify-between text-white text-xs lg:text-sm">
                        <div>
                          <p className="opacity-75 text-xs">Card Holder name</p>
                          <p className="font-semibold">Hung Su jimo</p>
                        </div>
                        <div className="text-right">
                          <p className="opacity-75 text-xs">Expiry Date</p>
                          <p className="font-semibold">02/30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-48 lg:w-96 h-48 lg:h-96 bg-gradient-to-bl from-purple-400 to-blue-600 opacity-20 rounded-full transform translate-x-24 lg:translate-x-48 -translate-y-12 lg:-translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-32 lg:w-64 h-16 lg:h-32 bg-gradient-to-r from-red-400 to-purple-500 opacity-30 rounded-r-full transform -translate-x-16 lg:-translate-x-32"></div>
      </section>

   {/* Investment Section */}
      <section className="relative bg-white py-8 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Innovative Investment!</h2>
            <p className="text-gray-700 mb-4">Interest Rates and Charges</p>
            <div className="text-right">
              <button className="text-red-600 font-semibold hover:text-red-700">
                View All →
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <div className="text-center bg-gray-50 p-4 lg:p-6 rounded-lg hover:shadow-md transition-shadow">
              <img src={Homes} alt="Homes" className="mx-auto mb-3 lg:mb-4 w-12 h-12 lg:w-16 lg:h-16" />
              <div className="text-xl lg:text-2xl font-bold mb-1">
                8.40% 
                <span className="font-thin text-xs lg:text-sm"> P.A</span>
              </div>
              <p className="text-gray-700 font-semibold text-sm lg:text-base">Hang Seng Home Loan</p>
            </div>

            <div className="text-center bg-gray-50 p-4 lg:p-6 rounded-lg hover:shadow-md transition-shadow">
              <img src={Car} alt="Car" className="mx-auto mb-3 lg:mb-4 w-12 h-12 lg:w-16 lg:h-16" />
              <div className="text-xl lg:text-2xl font-bold mb-1">
                8.85%
                <span className="font-thin text-xs lg:text-sm"> P.A</span>
              </div>
              <p className="text-gray-700 font-semibold text-sm lg:text-base">Hang Seng Car Loan</p>
            </div>

            <div className="text-center bg-gray-50 p-4 lg:p-6 rounded-lg hover:shadow-md transition-shadow">
              <img src={PersonalLoan} alt="Personal Loan" className="mx-auto mb-3 lg:mb-4 w-12 h-12 lg:w-16 lg:h-16" />
              <div className="text-xl lg:text-2xl font-bold mb-1">
                10.70%
                <span className="font-thin text-xs lg:text-sm"> P.A</span>
              </div>
              <p className="text-gray-700 font-semibold text-sm lg:text-base">Hang Seng Personal Loan</p>
            </div>

            <div className="text-center bg-gray-50 p-4 lg:p-6 rounded-lg hover:shadow-md transition-shadow">
              <img src={Education} alt="Education" className="mx-auto mb-3 lg:mb-4 w-12 h-12 lg:w-16 lg:h-16" />
              <div className="text-xl lg:text-2xl font-bold mb-1">
                8.15%
                <span className="font-thin text-xs lg:text-sm"> P.A</span>
              </div>
              <p className="text-gray-700 font-semibold text-sm lg:text-base">Hang Seng Education Loan</p>
            </div>
          </div>
          
          <div className="text-center lg:text-left mb-4">
            <button className="bg-red-600 text-white px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
              Learn More
            </button>
          </div>

          <div className="text-center lg:text-right">
            <p className="text-sm text-gray-600">*APR as Low and Terms & Conditions Apply</p>
          </div>
        </div>
        {/* Purple decorative circles */}
        <div className="absolute -left-32 top-1/2 w-64 h-64 bg-purple-200 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -right-32 top-1/3 w-80 h-80 bg-red-200 rounded-full opacity-40 blur-3xl"></div>
      </section>

      {/* Our Mission Section */}
<section className="relative bg-gradient-to-br from-red-100 via-purple-100 to-pink-100 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
        To empower every individual with accessible and secure solutions!
      </p>
    </div>
    
    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <img src={Credit} alt="Digital Credit Card" className="mx-auto mb-4 w-full h-40 object-cover rounded" />
        <h3 className="font-semibold text-lg text-gray-800 mb-2">Digital Credit Card</h3>
        <p className="text-sm text-gray-600 mb-4">
          “Empowering farmers with Credit Cards: transforming agriculture financing.”
        </p>
        <button className="text-red-600 font-semibold hover:underline">
          Explore More →
        </button>
      </div>

      <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <img src={BusinessLoan} alt="Business Loan" className="mx-auto mb-4 w-full h-40 object-cover rounded" />
        <h3 className="font-semibold text-lg text-gray-800 mb-2">Business Loan</h3>
        <p className="text-sm text-gray-600 mb-4">
          “Empower small businesses: Hang Seng Loan fuels growth.”
        </p>
        <button className="text-red-600 font-semibold hover:underline">
          Explore More →
        </button>
      </div>

      <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <img src={Empowerment} alt="Women Empowerment" className="mx-auto mb-4 w-full h-40 object-cover rounded" />
        <h3 className="font-semibold text-lg text-gray-800 mb-2">Women Empowerment</h3>
        <p className="text-sm text-gray-600 mb-4">
          “Unleashing the power of women: Banking services empower.”
        </p>
        <button className="text-red-600 font-semibold hover:underline">
          Explore More →
        </button>
      </div>
    </div>

    <div className="text-center">
      <button className="bg-red-600 text-white px-6 py-2 rounded-2xl font-semibold hover:bg-red-700 transition-colors">
        Explore Deeper →
      </button>
    </div>
  </div>

  {/* Decorative Blobs */}
  <div className="absolute -left-20 top-10 w-48 h-48 bg-red-200 rounded-full opacity-50 blur-2xl hidden sm:block"></div>
  <div className="absolute -right-20 bottom-10 w-56 h-56 bg-purple-200 rounded-full opacity-50 blur-2xl hidden sm:block"></div>
</section>


     {/* App Section */}
<section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-purple-900 py-16 px-4 sm:px-6 lg:px-12">
  {/* Decorative Shapes */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-800 to-purple-700 rounded-full opacity-40 -translate-x-24 -translate-y-24"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-purple-700 to-pink-600 rounded-full opacity-40 translate-x-20 translate-y-20"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white text-center">
      Bank Brilliance: Our app sets the standard.
    </h2>

    <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg flex flex-col lg:flex-row items-center gap-10">
      {/* Left */}
      <div className="flex-1 text-center lg:text-left">
        <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold mb-6">
          Explore limitless possibilities in Digital Realm.
        </h3>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          VYOM invites you to discover a new era of banking convenience and innovation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          {/* Play Store */}
          <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors">
            <img src={PlayStore} alt="Play Store" className="h-6 w-6" />
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </button>

          {/* App Store */}
          <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors">
            <img src={Apple} alt="App Store" className="h-6 w-6" />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="flex-shrink-0">
        <img src={Qrcode} alt="QR Code" className="w-90 sm:w-110 lg:w-150 h-auto object-contain mx-auto" />
      </div>
    </div>
  </div>

  {/* Extra Decorative Circles */}
  <div className="absolute top-20 left-20 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl"></div>
  <div className="absolute bottom-20 right-40 w-28 h-28 bg-white opacity-10 rounded-full blur-2xl"></div>
</section>




    
{/* Footer */}
<footer className="bg-white text-gray-800 py-10 px-6 lg:px-16 rounded-b-2xl">
  <div className="max-w-7xl mx-auto">
    
    {/* Top Section */}
    <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-8">
      
      {/* Logo */}
      <div>
        <img src={Name} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        
        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-600">About</a></li>
            <li><a href="#" className="hover:text-gray-600">Careers</a></li>
            <li><a href="#" className="hover:text-gray-600">Newsroom</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-600">Efficiency</a></li>
            <li><a href="#" className="hover:text-gray-600">ATM Network</a></li>
            <li><a href="#" className="hover:text-gray-600">Press Releases</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Social</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-600">Twitter</a></li>
            <li><a href="#" className="hover:text-gray-600">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-600">Threads</a></li>
          </ul>
        </div>
      </div>
    </div>

    <hr className="border-gray-300 mb-6" />

    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6">
      {/* Left - Copyright */}
      <p>© Union Bank of India 2024. All rights reserved.</p>

      {/* Center - Social Icons */}
      <div className="flex items-center space-x-4">
        <a href="#"><img src={Facebook} alt="Facebook" className="h-6 w-6 hover:opacity-75" /></a>
        <a href="#"><img src={Instagram} alt="Instagram" className="h-6 w-6 hover:opacity-75" /></a>
        <a href="#"><img src={Twitter} alt="Twitter" className="h-6 w-6 hover:opacity-75" /></a>
        <a href="#"><img src={Linked} alt="LinkedIn" className="h-6 w-6 hover:opacity-75" /></a>
      </div>

      {/* Right - Legal */}
      <div className="flex space-x-6">
        <a href="#" className="hover:text-gray-600">Legal Notice</a>
        <a href="#" className="hover:text-gray-600">Data Security</a>
      </div>
    </div>
  </div>
</footer>

    </>
  );
};

export default Home;