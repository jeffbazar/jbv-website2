JBV Capital Website

A modern, responsive website for JBV Capital built with Next.js and Tailwind CSS.

Overview

This repository contains the source code for the JBV Capital website. The site is built using Next.js, a React framework, and styled with Tailwind CSS. It features a clean, professional design with the JBV blue color scheme (#004494) and follows modern web development best practices.

Features

•
Modern React Framework: Built with Next.js 14 for optimal performance and SEO

•
Responsive Design: Fully mobile-friendly layout that works well on all device sizes

•
Component-Based Architecture: Modular design for easy maintenance and updates

•
Tailwind CSS: Utility-first CSS framework for rapid UI development

•
Optimized Images: Support for image optimization via Next.js Image component

•
Clean Typography: Professional font pairing with serif headings and sans-serif body text

Project Structure

Plain Text


jbv-website/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── globals.css # Global styles
│   │   ├── layout.jsx  # Root layout component
│   │   └── page.jsx    # Homepage
│   └── components/     # Reusable React components
│       ├── Footer.jsx  # Site footer
│       ├── Layout.jsx  # Layout wrapper
│       └── Navbar.jsx  # Navigation bar
├── .npmrc              # NPM configuration
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
└── tailwind.config.js  # Tailwind CSS configuration


Getting Started

Prerequisites

•
Node.js 18.17.0 or later

•
npm or yarn package manager

Installation

1.
Clone the repository:

2.
Install dependencies:

3.
Run the development server:

4.
Open http://localhost:3000 in your browser to see the result.

Deployment

Deploying to Vercel (Recommended)

The easiest way to deploy this Next.js app is using Vercel, the platform created by the creators of Next.js.

1.
Create a Vercel account at vercel.com

2.
Install the Vercel CLI: npm install -g vercel

3.
Run vercel in the project directory and follow the prompts

4.
Or connect your GitHub repository to Vercel for automatic deployments

Alternative Deployment Options

You can also deploy this website to any hosting service that supports Node.js applications:

•
AWS Amplify

•
Netlify

•
DigitalOcean App Platform

•
Traditional VPS or dedicated server

Customization

Changing Colors

The primary brand color (JBV blue) is defined in tailwind.config.js and can be easily updated:

Plain Text


theme: {
  extend: {
    colors: {
      'jbv-blue': '#004494', // Change this value to update the brand color
    },
  },
},


Adding New Pages

To add a new page:

1.
Create a new directory in src/app/ with the route name

2.
Add a page.jsx file in that directory

3.
Update the navigation links in src/components/Navbar.jsx

Updating Content

Most content can be found in the page components:

•
Homepage: src/app/page.jsx

•
About page: src/app/about/page.jsx

•
Contact page: src/app/contact/page.jsx

License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

Contact

For questions or support, please contact:

•
Email: info@jbv.com

•
Website: 



## Support

If you continue to experience issues, please provide:
1. Screenshots of your Vercel deployment settings
2. The exact error message you're receiving
3. Confirmation of which upload method you're using

I'll be happy to provide further assistance.
