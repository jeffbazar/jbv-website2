# JBV Capital Website Deployment Instructions

This document provides step-by-step instructions for deploying your new JBV Capital website using Cloudflare Pages while maintaining your GoDaddy DNS configuration.

## Option 1: Deploy with Cloudflare Pages (Recommended)

### Step 1: Set Up Cloudflare Account
1. Create a free Cloudflare account at [cloudflare.com](https://cloudflare.com) if you don't already have one
2. Log in to your Cloudflare dashboard

### Step 2: Create a New Pages Project
1. In the Cloudflare dashboard, click on "Pages" in the left sidebar
2. Click "Create a project" > "Upload assets"
3. Drag and drop the contents of the `out` folder from the provided zip file
4. Name your project (e.g., "jbv-capital")
5. Click "Save and Deploy"

### Step 3: Configure Custom Domain
1. After deployment completes, go to the "Custom domains" tab
2. Click "Set up a custom domain"
3. Enter your domain: `www.jbv.com`
4. Click "Continue"
5. Select "CNAME record" as the DNS record type
6. Cloudflare will provide you with a CNAME value (e.g., `your-project.pages.dev`)

### Step 4: Update DNS in GoDaddy
1. Log in to your GoDaddy account
2. Navigate to your domain's DNS settings
3. Add a CNAME record:
   - Host: `www`
   - Points to: `your-project.pages.dev` (the value from Cloudflare)
   - TTL: 1 Hour
4. Save changes

### Step 5: Set Up Root Domain Redirect (Optional)
To redirect jbv.com to www.jbv.com:
1. In GoDaddy DNS settings, add a URL Redirect:
   - Type: Permanent (301)
   - Domain: jbv.com
   - Destination: https://www.jbv.com
   - Forward path: Yes
   - Forward query parameters: Yes

## Option 2: Deploy with Cloudflare + GoDaddy SSL

If you prefer to keep your website fully on GoDaddy while using Cloudflare for CDN and security:

### Step 1: Set Up Cloudflare Account
1. Create a free Cloudflare account at [cloudflare.com](https://cloudflare.com)
2. Add your domain (jbv.com) to Cloudflare
3. Cloudflare will scan your existing DNS records

### Step 2: Update Nameservers in GoDaddy
1. Cloudflare will provide you with nameservers (e.g., `ns1.cloudflare.com`, `ns2.cloudflare.com`)
2. In GoDaddy, go to your domain settings
3. Replace GoDaddy nameservers with Cloudflare's nameservers
4. Save changes (this can take 24-48 hours to propagate)

### Step 3: Configure Cloudflare SSL
1. In Cloudflare dashboard, go to SSL/TLS section
2. Set SSL mode to "Flexible" initially
3. Enable "Always Use HTTPS" in Edge Certificates

### Step 4: Upload Website Files to GoDaddy Hosting
1. Log in to your GoDaddy hosting account
2. Navigate to File Manager
3. Upload the contents of the `out` folder from the provided zip file to your web root directory

## Maintenance and Updates

To make future updates to your website:
1. Modify the source code in the provided project
2. Run `npm run build` to generate a new production build
3. Deploy the updated files following the same steps above

## Troubleshooting

If you encounter any issues during deployment:

1. **DNS Propagation**: DNS changes can take 24-48 hours to fully propagate. If your site isn't accessible immediately, wait a day and try again.

2. **SSL Errors**: If you see SSL/certificate errors, ensure your Cloudflare SSL setting is set to "Flexible" initially, then upgrade to "Full" once everything is working.

3. **CNAME Configuration**: Double-check that your CNAME record in GoDaddy points to the correct Cloudflare Pages URL.

4. **Contact Support**: If problems persist, contact Cloudflare support or GoDaddy support depending on where the issue appears to be.

## Need Help?

If you need assistance with the deployment process, please don't hesitate to reach out for further guidance.
