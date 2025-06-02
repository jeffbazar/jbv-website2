import Image from 'next/image';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/cityscape.jpg" 
            alt="San Francisco Cityscape" 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About</h1>
          <p className="text-xl max-w-2xl">
            Learn more about JBV Capital and our founder
          </p>
        </div>
      </section>
      
      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/jeffrey-bazar.jpg" 
                  alt="Jeffrey Bazar" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#004494]">Jeffrey Bazar</h2>
              <h3 className="text-2xl text-gray-600 mb-6">Founder & Managing Partner</h3>
              <p className="text-lg mb-6">
                Jeffrey Bazar is the founder and managing partner of JBV Capital. With over 20 years of experience in the technology sector, Jeffrey brings deep industry knowledge and a proven track record of identifying transformative companies at their earliest stages.
              </p>
              <p className="text-lg mb-6">
                Prior to founding JBV Capital, Jeffrey co-founded and served as CEO of iPath Technologies, which was later acquired by Solunet Networks.
              </p>
              <p className="text-lg mb-6">
                Jeffrey currently sits on the board of several technology companies and has been an investor and board member at companies including Sinefa (acquired by Palo Alto Networks), Cariden Technologies (acquired by Cisco Systems), and Deepfield Networks (acquired by Nokia Systems).
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#004494]">Our Company</h2>
          <p className="text-lg mb-8 max-w-3xl">
            JBV Capital, based in San Francisco, focuses on early-stage software investments. We partner with exceptional founders building innovative solutions to complex problems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6">
                We aim to identify and support the most promising entrepreneurs building transformative software companies that solve meaningful problems.
              </p>
              <p className="text-lg mb-6">
                By providing capital, strategic guidance, and operational support, we help founders navigate the challenges of building category-defining businesses.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-[#004494] mr-2">•</span>
                  <span><strong>Integrity:</strong> We operate with the highest ethical standards in all our dealings.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#004494] mr-2">•</span>
                  <span><strong>Partnership:</strong> We view ourselves as true partners to our portfolio companies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#004494] mr-2">•</span>
                  <span><strong>Innovation:</strong> We embrace technological advancement and creative problem-solving.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#004494] mr-2">•</span>
                  <span><strong>Long-term thinking:</strong> We focus on sustainable value creation over short-term gains.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#004494] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner with JBV Capital
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            If you're building an innovative software company, we'd love to hear from you.
          </p>
          <a href="/contact" className="bg-white text-[#004494] px-8 py-4 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}
