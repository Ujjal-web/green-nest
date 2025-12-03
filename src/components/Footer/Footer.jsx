import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-100 text-gray-700">
      {/* Main Footer Content */}
      <div className="footer max-w-11/12 mx-auto flex flex-col md:flex-row justify-between p-10">
        
        {/* Brand Section */}
        <aside>
          <Link 
            to="/" 
            className="text-green-800 font-extrabold georama-font text-3xl"
          >
            GreenNest
          </Link>
          <p className="mt-2 text-base font-medium">
            Bringing nature to your home.<br />
            Growing a greener future since {new Date().getFullYear()}.
          </p>
        </aside>

        {/* Navigation Links */}
        <nav>
          <h6 className="footer-title text-green-800 opacity-100">Services</h6>
          <Link to="/plants" className="link link-hover hover:text-green-700">All Plants</Link>
          <Link to="/support" className="link link-hover hover:text-green-700">Support Center</Link>
          <Link to="/profile" className="link link-hover hover:text-green-700">My Account</Link>
        </nav>

        <nav>
          <h6 className="footer-title text-green-800 opacity-100">Company</h6>
          <Link to="/about" className="link link-hover hover:text-green-700">About Us</Link>
          <Link to="/contact" className="link link-hover hover:text-green-700">Contact</Link>
          <Link to="/privacy" className="link link-hover hover:text-green-700">Privacy Policy</Link>
        </nav>

        {/* Social Media */}
        <nav>
          <h6 className="footer-title text-green-800 opacity-100">Social</h6>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.pinterest.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              <FaPinterest />
            </a>
          </div>
        </nav>
      </div>

      {/* Copyright Bar */}
      <div className="bg-green-200/50 py-4 text-center border-t border-green-200">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-green-800 font-bold georama-font">GreenNest</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;