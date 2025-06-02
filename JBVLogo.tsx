"use client";

import React from 'react';
import Image from 'next/image';

const JBVLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image 
        src="/images/logos/jbv-logo.png" 
        alt="JBV Logo" 
        width={40} 
        height={40} 
        className="rounded"
      />
      <span className="text-sm font-sans text-gray-500">Analysis</span>
    </div>
  );
};

export default JBVLogo;
