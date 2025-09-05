import React from "react";
import { Link } from "react-router-dom";
import Name from "../../assets/Name.png"
import Balance from "../Products/Balance.svg"
import Plan from "../Products/Plan.svg"
import Bulb from "../Products/Bulb.svg"
import Chart from "../Products/Chart.svg"
import Family from "../Products/Family.jpg"
import Facebook from "../../assets/Facebook.svg"
import Instagram from "../../assets/Instagram.svg"
import Linked from "../../assets/Linked.svg"
import Twitter from "../../assets/Twitter.svg"
import { BriefcaseBusiness } from "lucide-react";

import Nav from "../NavBar/Nav";


const Products = ()=>{


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
      <section className="bg-[#BBC6CF] pt-20 pb-16 relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to <span className="text-red-500"> Hang Seng </span>Products!
            </h1>
            <p className="mt-4 text-gray-700 max-w-lg">
              Join our team and embark on a rewarding journey in the banking industry. At Hang Seng, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img src={Family} alt="Family" className="rounded-lg max-w-full h-auto" />
          </div>
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


                 {/* Values Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-500 mb-4">Our Values</h2>
            <p className="text-lg  max-w-4xl mx-auto">
              At Hang Seng, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="flex flex-col space-y-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-red-500 mb-2">Integrity</h3>
                <p className="">
                  We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-red-500 mb-2">Collaboration</h3>
                <p className="">
                  We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-red-500 mb-2">Customer Centricity</h3>
                <p className="">
                  Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-red-500 mb-2">Innovation</h3>
                <p className="">
                  We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-red-500 mb-2">Our Benefits</h2>
            <p className="text-lg text-gray-700 max-w-4xl">
              At Hang Seng, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Competitive Compensation */}
            <div className="bg-[linear-gradient(267.5deg,#873D4E_40.67%,#245088_99.81%),linear-gradient(106.06deg,rgba(202,255,51,0.05)_-29.45%,rgba(202,255,51,0)_27.86%)] text-white p-8 rounded-2xl shadow-lg relative">
              <div className="flex items-start space-x-4 mb-4">
                <img src={Chart} alt="Chart" className="w-16 h-16" />
                <h3 className="text-2xl font-bold mt-2">Competitive Compensation</h3>
              </div>
              <p className="text-gray-200">
                We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.
              </p>
             
            </div>

            {/* Health and Wellness */}
            <div className="bg-[linear-gradient(267.5deg,#873D4E_40.67%,#245088_99.81%),linear-gradient(106.06deg,rgba(202,255,51,0.05)_-29.45%,rgba(202,255,51,0)_27.86%)] text-white p-8 rounded-2xl shadow-lg relative">
              <div className="flex items-start space-x-4 mb-4">
                <img src={Bulb} alt="Bulb" className="w-16 h-16" />
                <h3 className="text-2xl font-bold mt-2">Health and Wellness</h3>
              </div>
              <p className="text-gray-200">
                We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.
              </p>
            
            </div>

            {/* Retirement Planning */}
            <div className="bg-[linear-gradient(267.5deg,#873D4E_40.67%,#245088_99.81%),linear-gradient(106.06deg,rgba(202,255,51,0.05)_-29.45%,rgba(202,255,51,0)_27.86%)] text-white p-8 rounded-2xl shadow-lg relative">
              <div className="flex items-start space-x-4 mb-4">
                <img src={Plan} alt="Plan" className="w-16 h-16" />
                <h3 className="text-2xl font-bold mt-2">Retirement Planning</h3>
              </div>
              <p className="text-gray-200">
                Your Bank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.
              </p>
             
            </div>

            {/* Work-Life Balance */}
            <div className="bg-[linear-gradient(267.5deg,#873D4E_40.67%,#245088_99.81%),linear-gradient(106.06deg,rgba(202,255,51,0.05)_-29.45%,rgba(202,255,51,0)_27.86%)] text-white p-8 rounded-2xl shadow-lg relative">
              <div className="flex items-start space-x-4 mb-4">
                <img src={Balance} alt="Balance" className="w-16 h-16" />
                <h3 className="text-2xl font-bold mt-2">Work-Life Balance</h3>
              </div>
              <p className="text-gray-200">
                We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.
              </p>
             
            </div>
          </div>
        </div>
      </section>

       {/* Careers Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-500 mb-2">Careers</h2>
            <p className="text-lg  max-w-3xl mx-auto">
              Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Relationship Manager Card */}
            <div className="bg-black text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">Relationship Manager</h3>
              <p className="text-gray-400 mb-6">Location: Hong Kong | Department: Retail Banking</p>
              <h4 className="text-xl font-bold mb-2">About This Job</h4>
              <p className="text-gray-300 mb-6">
                As a Relationship Manager at Hang Seng, you will be responsible for developing and maintaining relationships with valued customers. You will proactively identify their individual needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, strong sales acumen, and a passion for delivering exceptional customer service.
              </p>
              <h4 className="text-xl font-bold mb-4">Requirements and Qualifications</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Bachelor's degree in Business, Finance, or a related field</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Minimum of 3 years of experience in sales or relationship management in the banking industry</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Proven track record of meeting and exceeding sales targets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Excellent interpersonal and negotiation skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Strong knowledge of banking products and services</span>
                </li>
              </ul>
              <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors">
                Apply Now
              </button>
            </div>

            {/* Risk Analyst Card */}
            <div className="bg-black text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">Risk Analyst</h3>
              <p className="text-gray-400 mb-6">Location: Hong Kong | Department: Risk Management</p>
              <h4 className="text-xl font-bold mb-2">About This Job</h4>
              <p className="text-gray-300 mb-6">
                As a Risk Analyst at Hang Seng, you will play a vital role in identifying and assessing potential risks to our organization. You will evaluate data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.
              </p>
              <h4 className="text-xl font-bold mb-4">Requirements and Qualifications</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Bachelor's degree in Finance, Economics, or a related field</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Minimum of 2 years of experience in risk management or a similar role</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Proficiency in risk analysis tools and techniques</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Strong analytical and problem-solving skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Knowledge of regulatory requirements and industry best practices</span>
                </li>
              </ul>
              <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors">
                Apply Now
              </button>
            </div>

            {/* IT Security Specialist Card */}
            <div className="lg:col-span-2 bg-black text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">IT Security Specialist</h3>
              <p className="text-gray-400 mb-6">Location: Hong Kong | Department: Information Technology</p>
              <h4 className="text-xl font-bold mb-2">About This Job</h4>
              <p className="text-gray-300 mb-6">
                As an IT Security Specialist at Hang Seng, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.
              </p>
              <h4 className="text-xl font-bold mb-4">Requirements and Qualifications</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Bachelor's degree in Computer Science, Information Security, or a related field</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Minimum of 5 years of experience in IT security or a similar role</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>In-depth knowledge of network security protocols and technologies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Familiarity with regulatory frameworks such as PCI DSS and GDPR</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BriefcaseBusiness className="flex-shrink-0 w-5 h-5 mt-1" />
                  <span>Professional certifications such as CISSP or CISM are preferred</span>
                </li>
              </ul>
              <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>


         {/* FAQ Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-red-500 mb-2">Frequently Asked Questions</h2>
            <p className="text-lg ">
              Still have any questions? Contact our Team via <a href="mailto:support@hangseng.com" className="text-indigo-600 hover:underline">support@hangseng.com</a>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#245088] text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">How do I open an account with Hang Seng?</h3>
             <div className="border-b border-white mb-2"></div>
              <p className="text-gray-200">
                Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.
              </p>
            </div>
            <div className="bg-[#245088] text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">What documents do I need to provide to apply for a loan?</h3>
              <div className="border-b border-white mb-2"></div>
              <p className="text-gray-200">
                The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.
              </p>
            </div>
            <div className="bg-[#245088] text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">How can I access my accounts online?</h3>
             <div className="border-b border-white mb-2"></div>
              <p className="text-gray-200">
                Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.
              </p>
            </div>
            <div className="bg-[#245088] text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Are my transactions and personal information secure?</h3>
             <div className="border-b border-white mb-2"></div>
              <p className="text-gray-200">
                At Your Bank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.
              </p>
            </div>
          </div>
        </div>
      </section>

 


<section className="bg-[linear-gradient(90deg,#C9261F_0%,#245088_100%)] rounded-[20px] p-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 w-full max-w-12xl mx-auto">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Start your Career with Hang Seng today!</h2>
        <p className="text-white">Stands as one of the fastest-growing banks in the region, recognized for our digital innovations and deep commitment to financial inclusion. Our banking platform integrates mobile, online, and in-branch services, providing customers with flexibility and choice.</p>
      </div>
      <Link to="/Signup" >
      <button className="bg-[#C9261F] cursor-pointer text-white px-6 py-2 rounded-full flex-shrink-0 font-semibold">Open Account</button>
      </Link>
      
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









export default Products




