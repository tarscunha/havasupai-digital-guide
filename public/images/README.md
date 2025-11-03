# Images Folder Structure

This folder contains all the images used in the Havasupai Digital Guide website. Images are organized by section for easy management.

## Folder Structure

```
public/images/
├── hero/              # Hero section images (main banner photos)
├── falls/             # Waterfall photos (Havasu Falls, Mooney Falls, etc.)
├── camping/           # Campground photos and camping-related images
├── lodge/             # Havasupai Lodge photos
├── culture/           # Cultural images, traditional activities, ceremonies
├── mules/             # Mule train and pack animal photos
├── supai-village/     # Village photos, store, cafe, community images
├── maps/              # Trail maps, area maps, navigation images
├── government/        # Tribal government, official photos
└── advocacy/          # Environmental protection, advocacy images
```

## Usage Guidelines

### File Naming Convention
Use descriptive, lowercase names with hyphens:
- ✅ `havasu-falls-main-view.jpg`
- ✅ `camping-area-overview.jpg`
- ✅ `mule-train-hilltop.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `Photo 1.JPG`

### Recommended Image Formats
- **JPEG (.jpg)** - For photographs and complex images
- **PNG (.png)** - For images with transparency or simple graphics
- **WebP (.webp)** - For optimized web delivery (Next.js will auto-convert)

### Image Size Guidelines
- **Hero images**: 1920x1080px or higher (16:9 aspect ratio)
- **Section images**: 800x600px minimum
- **Thumbnails**: 400x300px
- **File size**: Keep under 2MB for web performance

### How to Reference Images in Code

Once you upload images to these folders, you can reference them in your components:

```jsx
// For images in public/images/
<img src="/images/hero/main-banner.jpg" alt="Havasupai Canyon" />

// Using Next.js Image component (recommended)
import Image from 'next/image'

<Image 
  src="/images/falls/havasu-falls.jpg" 
  alt="Havasu Falls" 
  width={800} 
  height={600}
/>
```

### Static Image Storage

All images in this folder are served statically by Next.js. When you add new images:

1. **Place them in the appropriate folder** based on the content type
2. **Use descriptive filenames** (e.g., `havasu-falls-main-view.jpg`)
3. **Optimize images** for web use (compress, resize appropriately)
4. **Update references** in the content service or component files

### Image Optimization

Next.js automatically optimizes images when using the `next/image` component. For best performance:
- Use modern formats (WebP, AVIF when possible)
- Compress images before adding them
- Use appropriate sizes (don't upload massive files for small displays)

### Adding New Images

To add new images to the website:

1. **Add the image file** to the appropriate folder in `/public/images/`
2. **Update the content** in `src/lib/content-service.ts` to reference the new image
3. **Use the path** `/images/folder-name/filename.jpg` in your content

The static nature of this setup means all images are included in the build and served efficiently.

## Adding New Images

1. **Choose the appropriate folder** based on the image content
2. **Optimize the image** (compress, resize if needed)
3. **Use descriptive filename** following the naming convention
4. **Update the relevant component** to reference the new image
5. **Test the image** displays correctly in the browser

## Image Optimization Tips

- Use tools like [TinyPNG](https://tinypng.com/) to compress images
- Consider using WebP format for better compression
- Next.js automatically optimizes images when using the `Image` component
- For hero images, consider creating multiple sizes for responsive design

## Backup and Version Control

- These images will be committed to your Git repository
- Keep original high-resolution versions backed up separately
- Consider file size when committing to avoid large repository size

## Legal Considerations

- Ensure you have rights to use all images
- Respect cultural sensitivity when using photos of sacred or traditional subjects
- Consider adding photo credits where appropriate