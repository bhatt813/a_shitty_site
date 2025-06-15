import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const HelixLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer triangle pointing right */}
    <path d="M8 6L24 16L8 26V6Z" fill="currentColor"/>
    {/* Inner triangle pointing left */}
    <path d="M24 10L12 16L24 22V10Z" fill="currentColor" fillOpacity="0.7"/>
    {/* Small triangle accent */}
    <path d="M16 12L20 16L16 20V12Z" fill="currentColor" fillOpacity="0.4"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center text-white">
                <HelixLogo />
              </div>
              <span className="text-xl font-bold tracking-wide">HELIX HUBS</span>
            </Link>
            <p className="text-gray-300 mb-2 max-w-md font-medium tracking-wide">
              WHERE VISION MEETS VELOCITY
            </p>
            <p className="text-gray-400 mb-6 max-w-md">
              Cultivating highly engaged, monetizable audiences through data-driven content distribution strategies and branded content hubs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/business-model" className="text-gray-300 hover:text-white transition-colors">Business Model</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/founders-letter" className="text-gray-300 hover:text-white transition-colors">Founder's Letter</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>hello@helixhubs.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Helix Hubs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;