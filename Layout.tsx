import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        {children}
      </main>
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <Image 
                  src="/images/logos/jbv-logo.png" 
                  alt="JBV Logo" 
                  width={50} 
                  height={50} 
                  className="rounded"
                />
                <span className="text-sm font-sans text-gray-500">Capital</span>
              </div>
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} JBV Capital. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-primary">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 max-w-3xl mx-auto">
              Disclaimer: The information contained in this communication from the sender is confidential. It is intended solely for use by the recipient and others authorized to receive it. If you are not the recipient, you are hereby notified that any disclosure, copying, distribution or taking action in relation of the contents of this information is strictly prohibited and may be unlawful.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
