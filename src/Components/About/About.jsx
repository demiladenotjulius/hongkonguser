import React from "react";
import { Link } from "react-router-dom";
import Building from "../About/Building.png"
import Eye from "../About/Eye.png"
import Handshake from "../About/Handshake.png"
import Ipad from "../About/Ipad.png"
import Meeting from "../About/Meeting.jpg"
import Plant from "../About/Plant.png"
import Sign from "../About/Sign.png"
import Name from "../../assets/Name.png"
import Nav from "../NavBar/Nav.jsx";
import Homes from "../../assets/Homes.png"
import Car from "../../assets/Car.png"
import PersonalLoan from "../../assets/PersonalLoan.png"
import Education from "../../assets/Education.png"
import Facebook from "../../assets/Facebook.svg"
import Instagram from "../../assets/Instagram.svg"
import Linked from "../../assets/Linked.svg"
import Twitter from "../../assets/Twitter.svg"


export default function About(){

return(
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
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-black max-w-lg z-10 order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Where Banking<br />
                  Meets <span className="text-red-700">Excellence!</span> <br />
                
                </h1>
                <p className="text-xs mb-8 text-gray-700 leading-relaxed">
                  is a forward-thinking financial institution committed to delivering secure, innovative, and customer-centric banking solutions. Established with the vision of bridging traditional banking and modern digital finance, we serve individuals, families, and businesses with products that empower growth and financial security.
With a presence across Hong Kong and an expanding international reach, BOHK combines global expertise with local insight. We pride ourselves on trust, transparency, and long-term relationships with our customers, ensuring that every interaction is simple, safe, and seamless.
                </p>

               <Link to="/Signup" >
                             <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-800 cursor-pointer font-semibold mb-4 lg:mb-6">
                               Open an Account
                             </button>
                           </Link>
                           

                <div>
                  <p className="text-xs  text-black font-medium mb-2">DOWNLOAD THE APP</p>
                
                </div>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2">
                <img src={Meeting} alt="Business Person" className="w-full max-w-md lg:max-w-4xl rounded h-auto object-cover " />
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-1/3 lg:w-80 h-full bg-gradient-to-r from-red-500 to-purple-600 opacity-20 rounded-r-full"></div>
            <div className="absolute top-0 right-0 w-1/3 lg:w-80 h-full bg-gradient-to-l from-blue-600 to-purple-600 opacity-20 rounded-l-full"></div>
            
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


<section className="mt-4 container mx-auto px-6">

<p className="text-gray-700 leading-relaxed"> We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development </p>

<div className="mt-9 flex flex-col lg:flex-row items-center gap-8 p-0">
    <img src={Plant} alt="Plant" className="w-[500px] max-w-2xl lg:max-w-4xl rounded-2xl h-[500px] object-cover" />

    <div >
        <h1 className="text-2xl font-bold mb-4 text-red-500">Mission</h1>
        <p className="text-gray-700 leading-relaxed">At Hang Seng, our mission is to empower our customers to achieve financial success.
             We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services,
             expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers.
             Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>
    </div>
</div>

<div className="flex flex-col lg:flex-row mt-9 items-center gap-8">
<div >
    <h1 className="text-2xl font-bold mb-4 text-red-500"> Vision </h1>
    <p className="text-gray-700 leading-relaxed">Our vision at Hang Seng Bank is to redefine banking by creating a seamless and personalized
         experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, 
        known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>
</div>

<div>
    <img src={Eye} alt="" className="w-[500px] max-w-2xl lg:max-w-4xl rounded-2xl h-[500px] object-cover" />
</div>



</div>


    </section>


     {/* Investment Section */}
           <section className="relative bg-white py-8 lg:py-16">
             <div className="container mx-auto px-4 lg:px-6">
               <div className="text-center mb-8 lg:mb-12">
                 <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">Innovative Investment!</ h1>
                 <p className="text-gray-700 mb-4 text-xl lg:text-2xl font-semibold">Interest Rates and Charges</p>
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
    

    {/* Press Releases Section */}
<section className="relative bg-gray-50 py-8 lg:py-16">
  <div className="container mx-auto px-6">
    {/* Header */}
    <div className="mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-red-600 mb-4">Press Releases</h2>
      <p className="text-gray-700 text-base lg:text-lg">
        Stay updated with the latest happenings and exciting developments at YourBank through our press releases.
      </p>
    </div>

    {/* Press Release Cards Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Card 1 */}
      <div className="bg-red-600 rounded-3xl p-6 lg:p-8 text-white shadow-lg">
        <div className="mb-6">
          <img 
            src={Handshake}
            alt="Business handshake" 
            className="w-full h-40 lg:h-48 object-cover rounded-2xl"
          />
        </div>
        <h3 className="text-lg lg:text-xl font-bold mb-4">
          Hang Seng Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction
        </h3>
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">
            Location: Hong Kong
          </span>
          <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">
            Date: 06/11/2025
          </span>
        </div>
        <p className="text-white text-sm leading-relaxed">
          Hang Seng is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-red-600 rounded-3xl p-6 lg:p-8 text-white shadow-lg">
        <div className="mb-6">
          <img 
            src={Building}
            alt="Modern office buildings" 
            className="w-full h-40 lg:h-48 object-cover rounded-2xl"
          />
        </div>
        <h3 className="text-lg lg:text-xl font-bold mb-4">
          Hang Seng Expands Branch Network with Opening of New Location in Hong Kong
        </h3>
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">
            Location: Hong Kong
          </span>
          <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">
            Date: 12/11/2025
          </span>
        </div>
        <p className="text-white text-sm leading-relaxed">
          Hang Seng is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-red-600 rounded-3xl p-6 lg:p-8 text-white shadow-lg">
        <div className="mb-6">
          <img 
            src={Sign}
            alt="Financial planning meeting" 
            className="w-full h-40 lg:h-48 object-cover rounded-2xl"
          />
        </div>
        <h3 className="text-lg lg:text-xl font-bold mb-4">
          Hang Seng Partners with Local Nonprofit to Support Financial Education Initiatives
        </h3>
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">
            Location: Hong Kong
          </span>
          <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">
            Date: 24/12/2025
          </span>
        </div>
        <p className="text-white text-sm leading-relaxed">
          Hang Seng is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-red-600 rounded-3xl p-6 lg:p-8 text-white shadow-lg">
        <div className="mb-6">
          <img 
            src={Ipad}
            alt="Environmental sustainability concept" 
            className="w-full h-40 lg:h-48 object-cover rounded-2xl"
          />
        </div>
        <h3 className="text-lg lg:text-xl font-bold mb-4">
          Hang Seng Launches Sustainable Banking Initiative to Promote Environmental Responsibility
        </h3>
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">
            Location: Hong Kong
          </span>
          <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">
            Date: 28/12/2025
          </span>
        </div>
        <p className="text-white text-sm leading-relaxed">
          Hang Seng is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.
        </p>
      </div>
      
    </div>
  </div>
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
)

}

