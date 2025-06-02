import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-jbv-blue text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-serif text-white mb-2">Contact</h2>
            <address className="not-italic">
              <p>500 Terry Francine Street, San Francisco, CA 94158</p>
              <p>info@jbv.com</p>
              <p>123-456-7890</p>
            </address>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} JBV Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
