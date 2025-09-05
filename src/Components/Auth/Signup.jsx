import React,{useState} from "react";
import Nav from "../NavBar/Nav";
import Google from "./Google.svg"
import Fb from "./Fb.svg"
import Core from "./Core.svg"
import Name from "../../assets/Name.png"
import { Link } from "react-router-dom";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>

         {/* Header */}
          <header className="bg-gradient-to-r from-white to-blue-200 p-4 flex flex-col lg:flex-row justify-between items-center shadow-md">
      <div className="flex items-center mb-2 lg:mb-0">
        <img src={Name} alt="Hang Seng Bank Logo" className="h-8 mr-3" />
        <span className="text-lg font-bold text-gray-800">HANG SENG BANK</span>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
        <div className="flex space-x-4">
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
            className="p-2 border rounded-3xl text-black text-sm w-32 lg:w-40 focus:outline-none focus:ring-2 focus:ring-blue-300" 
          />

            <Link to="/Login">
                <button className="bg-red-600 cursor-pointer  text-white px-6 py-2 rounded-3xl font-semibold hover:bg-red-700 transition-colors">
            Login
          </button>
            </Link>
      

        </div>
      </div>
    </header>
          
          <Nav />
          








        <div className="flex justify-center items-center min-h-screen bg-gray-300 p-5 font-sans">
            <div className="bg-gray-300 w-full max-w-3xl p-10 box-border">
                <h1 className="text-5xl font-semibold text-red-600 text-center m-0 mb-4">Sign Up</h1>
                <p className="text-lg text-gray-800 text-center mb-10 leading-relaxed">
                    Join our community today! Create an account to unlock exclusive features and personalized experiences.
                </p>

                <div className="grid grid-cols-2 gap-5 mb-6">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full py-4 px-6 text-base bg-white border border-gray-300 rounded-full outline-none transition-colors duration-200 box-border text-gray-800 focus:border-blue-500"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full py-4 px-6 text-base bg-white border border-gray-300 rounded-full outline-none transition-colors duration-200 box-border text-gray-800 focus:border-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full py-4 px-6 text-base bg-white border border-gray-300 rounded-full outline-none transition-colors duration-200 box-border text-gray-800 focus:border-blue-500"
                    />
                    <div className="relative flex items-center">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full py-4 pr-12 pl-6 text-base bg-white border border-gray-300 rounded-full outline-none transition-colors duration-200 box-border text-gray-800 focus:border-blue-500"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-5 bg-transparent border-none cursor-pointer p-0 flex items-center justify-center"
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                                    <line x1="1" y1="1" x2="23" y2="23"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <button className="w-full py-4 text-lg font-medium text-white bg-red-600 border-none rounded-full cursor-pointer mb-4 transition-colors duration-200 hover:bg-red-700">
                    Sign Up
                </button>

                <Link to="/Login">
                   <button className="w-full py-4 text-lg font-medium text-white bg-gray-700 border-none rounded-full cursor-pointer mb-8 transition-colors duration-200 hover:bg-gray-800">
                    Login
                </button>
                </Link>
             

                <div className="flex items-center mb-8">
                    <div className="flex-1 h-px bg-gray-600"></div>
                    <span className="px-5 text-gray-800 text-base">Or Continue with</span>
                    <div className="flex-1 h-px bg-gray-600"></div>
                </div>

                <div className="flex justify-center gap-6">
                    <button className="w-14 h-14  border-none cursor-pointer flex items-center justify-center transition-all duration-200  hover:scale-105" aria-label="Sign up with Google">
                    <img src={Google} alt="" />
                    </button>


                    <button className="w-14 h-14   border-none cursor-pointer flex items-center justify-center transition-all duration-200 hover:scale-105" aria-label="Sign up with Facebook">
                       <img src={Fb} alt="" />
                    </button>
                    <button className="w-14 h-14  border-none cursor-pointer flex items-center justify-center transition-all duration-200  hover:scale-105" aria-label="Sign up with Apple">
                       <img src={Core} alt="" />
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Signup;