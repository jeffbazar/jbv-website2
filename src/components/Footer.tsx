import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#004494] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JBV Capital</h3>
            <p className="mb-4">Backing Tomorrow's Software Leaders Today</p>
            <p>101 Pine Financial Street<br />San Francisco, CA 94104</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@jbv.com" className="hover:underline">info@jbv.com</a>
              </li>
              <li>
                <a href="tel:+14155550100" className="hover:underline">(415) 555-0100</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:underline">Portfolio</Link>
              </li>
              <li>
                <Link href="/approach" className="hover:underline">Approach</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} JBV Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
