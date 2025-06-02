import Image from 'next/image';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section relative h-[70vh] flex items-center">
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="bg-[#004494] p-6 md:p-10 inline-block">
            <h1 className="text-4xl md:text-6xl text-white font-bold">
              JBV Capital
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white font-light max-w-2xl mt-6">
            Backing Tomorrow&apos;s Software Leaders Today
          </p>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#004494]">About JBV Capital</h2>
              <p className="text-lg mb-6">
                JBV Capital is a venture capital firm focused on early-stage investments in software companies. Founded by Jeffrey Bazar, we leverage decades of experience in the technology sector to identify and support promising entrepreneurs.
              </p>
              <p className="text-lg">
                Based in San Francisco, we work closely with founders to help them navigate the challenges of building category-defining businesses.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/jeffrey-bazar.jpg" 
                alt="Jeffrey Bazar" 
                fill 
                style={{objectFit: 'cover'}}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Investment Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#004494]">Our Investment Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Early Stage Focus</h3>
              <p className="text-gray-700">
                We invest in pre-seed, seed, and Series A rounds, typically as the first institutional investor.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Software Expertise</h3>
              <p className="text-gray-700">
                Our investments center on B2B software companies with innovative approaches to solving business challenges.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Hands-On Support</h3>
              <p className="text-gray-700">
                We provide strategic guidance, operational support, and access to our network of industry connections.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#004494] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
