"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="font-playfair text-[#004494] text-2xl font-bold">
            JBV Capital
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-[#004494] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#004494] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#004494] transition-colors">
            Contact
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-[#004494] focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white py-2 px-4">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-gray-700 hover:text-[#004494] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#004494] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#004494] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
