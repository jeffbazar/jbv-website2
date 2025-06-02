"use client";

import Link from "next/link";
import JBVLogo from "./JBVLogo";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { label: "Overview", href: "/" },
    ]
  },
  {
    title: "Key Analysis Areas",
    items: [
      { label: "SimplAI vs Open-Source", href: "/comparison" },
      { label: "Product Approach", href: "/product-approach" },
      { label: "Security & Compliance", href: "/security-compliance" },
      { label: "AI Integration", href: "/ai-integration" },
    ]
  },
  {
    title: "Market Intelligence",
    items: [
      { label: "Market Position", href: "/market-position" },
      { label: "Market Data", href: "/market-data" },
      { label: "Competitors", href: "/competitors" },
      { label: "Conclusion", href: "/conclusion" },
    ]
  }
];

// Flatten nav groups for mobile menu
const allNavItems = navGroups.flatMap(group => group.items);

export default function Navbar() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  
  return (
    <nav className="border-b border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <JBVLogo />
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex justify-center space-x-12 mt-4 w-full">
            {navGroups.map((group) => (
              <div key={group.title} className="relative group">
                <button 
                  className="text-[#004494] hover:text-[#0066cc] transition-colors text-sm font-medium pb-2"
                  onClick={() => setActiveGroup(activeGroup === group.title ? null : group.title)}
                  onMouseEnter={() => setActiveGroup(group.title)}
                  onMouseLeave={() => setActiveGroup(null)}
                >
                  {group.title}
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 transition-opacity duration-150 ${
                    activeGroup === group.title ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  onMouseEnter={() => setActiveGroup(group.title)}
                  onMouseLeave={() => setActiveGroup(null)}
                >
                  <div className="py-1">
                    {group.items.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className="block px-4 py-2 text-sm text-[#004494] hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden mt-4">
            <button className="mobile-menu-button p-2 focus:outline-none text-[#004494]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu (hidden by default) */}
        <div className="mobile-menu hidden md:hidden">
          <div className="flex flex-col space-y-3 py-4">
            {allNavItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="text-[#004494] hover:text-[#0066cc] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
