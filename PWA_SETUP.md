# PWA (Progressive Web App) Setup

This project is now configured as a Progressive Web App. Users can install it on their devices for offline access and a native app-like experience.

## What's Included

### 1. **Web App Manifest** (`public/manifest.json`)
- Defines app metadata, colors, and display preferences
- Includes app shortcuts for quick access
- Share target configuration for file sharing

### 2. **Service Worker** (`public/sw.js`)
- Enables offline functionality
- Caches assets intelligently:
  - **Static assets**: App shell (cache-first)
  - **API requests**: Network-first with offline fallback
  - **Images**: Cache-first with fallback placeholder
  - **Documents**: Network-first with cache fallback

### 3. **PWA Installation Banner** (`src/components/PWAInstallBanner.tsx`)
- Shows install prompt on compatible browsers
- Users can dismiss or install directly from the banner

### 4. **PWA Hook** (`src/hooks/use-pwa-install.ts`)
- Manages installation prompt state
- Detects if app is already installed

## Required Assets

To complete the PWA setup, generate and place these icons in `public/`:

### Using ImageMagick (Windows):
```bash
# From favicon.ico
magick convert public/favicon.ico -define icon:auto-resize=192 public/icon-192.png
magick convert public/favicon.ico -define icon:auto-resize=512 public/icon-512.png
magick convert public/favicon.ico -define icon:auto-resize=96 public/icon-96.png
```

### Using Online Tool:
Visit [favicon.io](https://favicon.io/favicon-converter/) to generate:
- `icon-192.png` (192x192 pixels)
- `icon-512.png` (512x512 pixels) 
- `icon-96.png` (96x96 pixels)
- `apple-touch-icon.png` (180x180 pixels)

### Using Python PIL:
```python
from PIL import Image
# Load your base image and resize to needed dimensions
img = Image.open('base-image.png')
img.resize((192, 192)).save('public/icon-192.png')
img.resize((512, 512)).save('public/icon-512.png')
img.resize((96, 96)).save('public/icon-96.png')
img.resize((180, 180)).save('public/apple-touch-icon.png')
```

## Installation on Devices

### Desktop (Chrome, Edge, etc.)
- Look for the install button in the address bar or app menu
- Click "Install Plywood Home"
- App will appear in your applications menu

### iOS
1. Open the app in Safari
2. Tap the **Share** button
3. Select **Add to Home Screen**
4. Confirm and the app appears on your home screen

### Android
- If using Chrome: Look for the install prompt banner at the bottom
- If not shown: Use the menu (⋮) → **Install app**

## Offline Functionality

The service worker enables:
- ✅ View products offline (cached data)
- ✅ Browse submitted files (if previously viewed)
- ✅ Navigation between cached pages
- ✅ Image loading with fallback placeholders
- ❌ Upload new files (requires internet)
- ❌ Access to external APIs (without connection)

## Cache Management

Caches are organized by type:
- `plywood-home-v1`: Core app files
- `plywood-home-runtime`: API responses and runtime data
- `plywood-home-assets`: Images and media files

Old cache versions are automatically cleaned up when the service worker updates.

## Checking PWA Status

### Browser DevTools
1. Open DevTools (F12)
2. Go to **Application** tab
3. Check **Service Workers** section
4. Verify **Manifest** data loads correctly

### PWA Lighthouse Audit
1. Open DevTools
2. Go to **Lighthouse** tab
3. Run audit for PWA category
4. Review recommendations

## Troubleshooting

### Service Worker Not Registering
- Check browser console for errors
- Ensure app is served over HTTPS (required for production)
- Clear site data and reload

### Icons Not Showing
- Verify icon files exist in `public/` folder
- Check icon dimensions match manifest requirements
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Install Prompt Not Showing
- App must meet installability criteria:
  - Manifest file present ✓
  - Icons (at least 192x192) in manifest ✓
  - Service worker registered ✓
  - HTTPS connection (production) ✓
  - At least 30 seconds elapsed or user interaction ✓

### Offline Pages Not Loading
- Check Network tab in DevTools
- Verify service worker is active
- Check cache names in DevTools → Application → Cache Storage
- Clear all caches and reload

## Next Steps

1. **Generate the required icon files** (see "Required Assets" section above)
2. **Test the PWA locally** by running `npm run build && npm run preview`
3. **Deploy to production** - Service Worker requires HTTPS
4. **Monitor installation metrics** - Check your analytics for install events

## Performance Metrics

With PWA enabled, you'll see improvements in:
- ⚡ Faster load times (cached assets)
- 📱 Native app-like experience
- 🔌 Works offline
- ⏱️ Reduced bandwidth usage
- 🚀 Better performance on slow networks
