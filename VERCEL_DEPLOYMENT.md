# JBV Website - Vercel Deployment Guide

This guide will walk you through deploying your new JBV website to Vercel. The website has been built with Next.js and styled to match the manus.im aesthetic while maintaining JBV branding.

## Prerequisites

- A GitHub account (recommended for easier deployment)
- A Vercel account (free tier is sufficient)

## Deployment Options

### Option 1: Deploy via GitHub (Recommended)

1. **Create a GitHub repository**
   - Go to [GitHub](https://github.com)
   - Create a new repository named "jbv-website"
   - Make it private if you prefer

2. **Upload the website files to GitHub**
   - Extract the provided ZIP file
   - Push the files to your GitHub repository
   - You can use GitHub Desktop or the command line for this

3. **Connect Vercel to GitHub**
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in
   - Click "Add New..." → "Project"
   - Select your "jbv-website" repository
   - Vercel will automatically detect Next.js

4. **Configure deployment settings**
   - Project Name: "jbv-website" (or your preference)
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: ./
   - Build Command: Leave as default
   - Output Directory: Leave as default

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your website
   - Once complete, you'll get a URL like: jbv-website.vercel.app

### Option 2: Direct Upload to Vercel

1. **Prepare the website files**
   - Extract the provided ZIP file to your computer

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in
   - Click "Add New..." → "Project"
   - Choose "Upload" at the bottom of the import page
   - Drag and drop the entire website folder

3. **Configure deployment settings**
   - Project Name: "jbv-website" (or your preference)
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: ./
   - Build Command: Leave as default
   - Output Directory: Leave as default

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your website
   - Once complete, you'll get a URL like: jbv-website.vercel.app

## Custom Domain Setup

To use your jbv.com domain:

1. **In Vercel dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain: "www.jbv.com" or "jbv.com"
   - Follow Vercel's instructions for DNS configuration

2. **In your DNS provider (GoDaddy)**
   - Add the CNAME records as instructed by Vercel
   - Wait for DNS propagation (can take up to 48 hours)

## Making Updates

### If using GitHub:
- Make changes to your local files
- Commit and push to GitHub
- Vercel will automatically rebuild and deploy

### If using direct upload:
- Make changes to your local files
- Re-upload to Vercel

## Need Help?

If you encounter any issues during deployment, Vercel offers excellent documentation and support at [vercel.com/docs](https://vercel.com/docs).
