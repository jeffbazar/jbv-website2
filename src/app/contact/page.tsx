import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#004494] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Get in touch with JBV Capital to discuss your venture
          </p>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#004494]">Get In Touch</h2>
              <p className="text-lg mb-8">
                We're always interested in hearing from innovative founders building the future of software. Whether you're raising capital, seeking advice, or just want to connect, we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Office Location</h3>
                  <p className="text-lg">
                    101 Pine Financial Street<br />
                    San Francisco, CA 94104
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a href="mailto:info@jbv.com" className="text-lg text-[#004494] hover:underline">
                    info@jbv.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a href="tel:+14155550100" className="text-lg text-[#004494] hover:underline">
                    (415) 555-0100
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004494]"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004494]"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004494]"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004494]"
                      placeholder="Tell us about your company and how we can help"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#004494] text-white py-3 px-4 rounded-md hover:bg-[#003371] transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#004494]">Visit Our Office</h2>
          <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
            Located in the heart of San Francisco's Financial District
          </p>
          
          <div className="h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-xl text-gray-600">Interactive Map Would Be Displayed Here</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
