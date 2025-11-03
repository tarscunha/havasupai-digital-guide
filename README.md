# Havasupai Digital Guide

The Official Digital Guide for the Havasupai Tribe. This is a static Next.js website showcasing the beauty, culture, and services of the Havasupai Tribe.

## Features

- **Fully Static** - No database or external dependencies
- **Responsive Design** - Works on all devices
- **Local Image Storage** - All images stored locally for fast loading
- **Content Management** - Edit content directly in code files
- **Modern UI** - Built with Next.js, TypeScript, and Tailwind CSS

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## Content Management

Content is managed through static files in `src/lib/content-service.ts`. To update:

1. Edit the content in the `staticContent` object
2. Save the file
3. Rebuild the site

## Image Management

All images are stored in `/public/images/` organized by section:
- `hero/` - Main hero images
- `falls/` - Waterfall photos
- `camping/` - Camping area images
- `lodge/` - Lodge photos
- `mules/` - Mule transport images
- `culture/` - Cultural photos
- `government/` - Government/official images
- `advocacy/` - Advocacy content images

## Deployment

This is a static site that can be deployed to any hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting provider

## Technology Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **Lucide React** - Icons

To get started, take a look at src/app/page.tsx.
w