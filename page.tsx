import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function ProductApproach() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8">
          Product Approach
        </h1>
        
        <div className="mb-12">
          <p className="text-lg mb-6">
            SimplAI positions itself as a "white-glove" solution for enterprises seeking to implement AI 
            automation without extensive technical expertise. This approach contrasts sharply with open-source 
            alternatives that require more technical knowledge but offer greater flexibility.
          </p>
          
          <p className="mb-6">
            The fundamental difference lies in SimplAI's closed-source, managed service model versus the 
            community-driven, transparent approach of open-source tools. This distinction creates clear 
            trade-offs in terms of customization, support, and pricing.
          </p>
        </div>
        
        <div className="my-12">
          <Image 
            src="/images/pros_cons_comparison.png" 
            alt="Pros and cons comparison between SimplAI and Open-Source tools" 
            width={800} 
            height={500} 
            className="rounded-lg mx-auto"
          />
          <p className="text-sm text-gray-500 mt-3 text-center">
            Pros and cons comparison between SimplAI and open-source automation tools
          </p>
        </div>
        
        <div className="bg-accent p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-serif font-medium mb-6">Key Differences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif font-medium mb-4">SimplAI</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Managed, enterprise-focused solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Emphasis on security and compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Higher cost with premium support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Limited customization options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Faster time-to-value for non-technical teams</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-medium mb-4">Open-Source Tools</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Self-managed, developer-oriented approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Transparency and community contributions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Lower cost with community support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Extensive customization capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Steeper learning curve requiring technical expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-medium mb-6">Market Implications</h2>
          
          <p className="mb-6">
            SimplAI's approach resonates with enterprise customers who prioritize reliability, security, 
            and ease of implementation over cost efficiency. The "no-code" interface appeals to business 
            users who need quick solutions without technical overhead.
          </p>
          
          <p className="mb-6">
            Conversely, open-source tools attract organizations with strong technical teams who value 
            flexibility and cost-effectiveness. These solutions thrive in environments where customization 
            and integration with existing systems are paramount.
          </p>
          
          <p>
            The market is likely to support both models, with SimplAI capturing enterprise clients in 
            regulated industries while open-source tools dominate among startups, SMBs with technical 
            resources, and organizations with unique integration requirements.
          </p>
        </div>
        
        <div className="flex justify-between mt-12">
          <Link 
            href="/" 
            className="btn-secondary inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Overview
          </Link>
          
          <Link 
            href="/security-compliance" 
            className="btn-primary inline-flex items-center"
          >
            Security & Compliance
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
