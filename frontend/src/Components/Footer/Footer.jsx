import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = ({className}) => {
  return (
    <footer className={`footer bg-white text-gray-800 pt-10 pb-5 px-4 sm:px-8 md:px-16 mt-auto  ${className=='hide'&&'hidden'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* HireMe Branding */}
        <div className="text-left">
          <div className="flex items-center  justify-start gap-2 mb-4">
            <div className="w-6 h-6 rounded-full custom-gradient flex items-center justify-center font-bold text-white text-sm">
              {/* Placeholder for logo */}
              ✹
            </div>
            <h1 className="text-lg font-semibold">HireHunar</h1>
          </div>
          <p className="text-sm text-gray-600 text-left">
            HireMe connects you with career opportunities tailored to your skills, relevance, and personal preferences.
          </p>
          <div className="flex justify-start space-x-4 mt-4 text-gray-800">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            <FaXTwitter className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        {/* Technology Links */}
        <div className="text-left">
          <h2 className="font-semibold mb-3">Technology</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><Link to={'/f-job'}>Search for Jobs</Link></li>
            <li><Link to={'/my-profile'}>Profile</Link></li>
            {/* <li>Browse Jobs</li> */}
          </ul>
        </div>

        {/* Employers Links */}
        <div className="text-left">
          <h2 className="font-semibold mb-3">Employers</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><Link to="/all-jobs">Post Jobs</Link></li>
            <li><Link to={'/company-profile'}>Company Profile</Link></li>
            {/* <li>Employer & Advertising</li>
            <li>Hiring Events</li> */}
          </ul>
        </div>

        {/* Company Links */}
        {/* <div className="text-left">
          <h2 className="font-semibold mb-3">Company</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>About Us</li>
            <li>Media</li>
            <li>Work at HireMe</li>
            <li>Contact Us</li>
          </ul>
        </div> */}
      </div>

      {/* Footer Bottom - Optional */}
      <div className="mt-10 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} HireHunar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
