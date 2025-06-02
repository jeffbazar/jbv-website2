# JBV Website Deployment Guide

This guide provides instructions for deploying your new JBV Capital website using the provided files.

## What's Included

1. **Website Files**: Complete Next.js project with all necessary files for deployment
2. **Deployment Instructions**: Step-by-step guide for deploying with Cloudflare while maintaining GoDaddy DNS

## Deployment Options

### Option 1: Deploy with Cloudflare Pages (Recommended)

This option provides the simplest deployment process with automatic SSL certificates and global CDN.

1. Create a Cloudflare account (free)
2. Upload the website files to Cloudflare Pages
3. Connect your domain using the provided instructions

### Option 2: Deploy with Traditional Hosting

If you prefer to use traditional web hosting:

1. Install Node.js on your server
2. Upload the website files
3. Run `npm install` and `npm run build`
4. Configure your web server to serve the Next.js application

## Getting Started

1. Extract the zip file containing all website files
2. Follow the detailed instructions in `cloudflare_deployment_instructions.md`
3. If you encounter any issues, refer to the troubleshooting section

## Need Help?

If you need assistance with deployment, please don't hesitate to reach out for further guidance.
