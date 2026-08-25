# Image Search App - Setup & Integration Guide

## Overview
This is a high-performance image search application that searches **3 image APIs simultaneously**:
- **Pexels** (Free, high-quality photos)
- **Pixabay** (Free stock images)
- **Unsplash** (Free professional photos)

## ✅ Current Setup

### Frontend
- **File**: `index.html`
- **Status**: ✅ Updated with performance optimizations
  - Responsive images with `srcset` and `sizes`
  - Lazy loading with `loading="lazy"`
  - Incremental rendering with chunked display
  - rAF-throttled scroll detection
  - IntersectionObserver for auto-load

### Backend Proxy
- **Location**: `server/` folder
- **Purpose**: Securely forward Unsplash API calls (keeps API key server-side)
- **Endpoint**: `http://localhost:3000/api/unsplash/search?query=QUERY&page=PAGE`

### API Keys Status
| Provider | Status | Location | Notes |
|----------|--------|----------|-------|
| **Pexels** | ✅ Active | `index.html` line ~1940 | Public API key in code (acceptable) |
| **Pixabay** | ✅ Active | `index.html` line ~1940 | Public API key in code (acceptable) |
| **Unsplash** | ✅ Active | Server env var | **Secure** - never exposed to client |

---

## 🚀 How to Run

### Step 1: Start the Unsplash Proxy Server
```powershell
cd server
npm install    # Install dependencies (one-time only)
```

### Step 2: Set Unsplash API Key (Choose One)

**Option A - Current Session Only** (recommended for testing):
```powershell
$env:UNSPLASH_ACCESS_KEY="h5dlsNGfUlBco1LNc38NJAol14LPOaea4k8qSR3jF3U"
npm start
```

**Option B - Persistent (Windows, all future sessions)**:
```powershell
setx UNSPLASH_ACCESS_KEY "h5dlsNGfUlBco1LNc38NJAol14LPOaea4k8qSR3jF3U"
# Then restart PowerShell and run:
cd server
npm start
```

**Expected Output**:
```
Unsplash proxy listening on http://localhost:3000
```

### Step 3: Open the Website
- Open `index.html` in your browser
- OR use VS Code Live Server extension
- Search for images (e.g., "mountain", "nature", "sunset")

---

## ✅ How to Verify All 3 APIs Are Working

### Method 1: DevTools Network Tab (Best)
1. Press **F12** → **Network** tab
2. Search for "mountain"
3. You should see 3 API calls:
   - ✅ `https://api.pexels.com/v1/search?query=...` (Pexels)
   - ✅ `https://pixabay.com/api/?key=...` (Pixabay)
   - ✅ `http://localhost:3000/api/unsplash/search?query=...` (Unsplash via proxy)

### Method 2: Check Image Credits
- Search on the site
- Look at image card credits:
  - **"Pexels"** = Pexels image
  - **"ImageLens"** or username = Pixabay image
  - **"Unsplash"** = Unsplash image

### Method 3: Check Image Source URLs
- Right-click image → Inspect
- Look at `<img src="">`:
  - `images.pexels.com` → Pexels
  - `pixabay.com` → Pixabay
  - `images.unsplash.com` → Unsplash

---

## 📁 Project Structure
```
IMAGES/
├── index.html                 # Main app (HTML + inline JS)
├── inline_script.js          # Legacy/duplicate script (can be removed)
├── server/
│   ├── index.js              # Express proxy for Unsplash
│   ├── package.json          # Server dependencies
│   └── node_modules/         # Installed packages
├── locales/                  # i18n translations (AR, EN, ES, FR, HI, UR)
├── i18n/
│   └── i18n.js               # i18n logic
└── README_SETUP.md           # This file
```

---

## 🔧 Configuration

### Change API Keys
**Pexels**: Edit `index.html`, search for `const PEXELS_KEY = "..."` (~line 1940)
**Pixabay**: Edit `index.html`, search for `const PIXABAY_KEY = "..."` (~line 1940)
**Unsplash**: Set environment variable `UNSPLASH_ACCESS_KEY` before running proxy

### Adjust Image Results Per Page
In `index.html`, look for `per_page=20` in API fetch URLs (~line 1999). Change to your preferred number (Unsplash max: 30).

### Change Chunk Size for Rendering
In `index.html`, search for `galleryChunkSize` (~line 1920). Default is adaptive based on device memory; you can override.

---

## 🐛 Troubleshooting

### Proxy not responding?
```powershell
# Check if proxy is running
Get-NetTCPConnection -LocalPort 3000

# Kill any process on port 3000
Get-Process node | Stop-Process -Force

# Restart with key
$env:UNSPLASH_ACCESS_KEY="..."
cd server && npm start
```

### Getting "Unsplash key not configured"?
- Ensure environment variable is set before running `npm start`
- Verify key is correct: `$env:UNSPLASH_ACCESS_KEY`

### Images not loading?
1. Check DevTools Console for errors (F12)
2. Check Network tab for failed requests
3. Verify API keys are valid and not rate-limited

### No results from one provider?
- Each API has different rate limits
- Pexels: 200 requests/hour
- Pixabay: 50 requests/hour
- Unsplash: 50 requests/hour

---

## 📊 Performance Features

✅ **Lazy Loading**: Images load only when visible  
✅ **Responsive Images**: Correct image size for each screen  
✅ **Async Decode**: Images decode off-main-thread  
✅ **Incremental Rendering**: Images render in chunks (not all at once)  
✅ **Scroll Throttling**: Scroll events debounced with rAF  
✅ **Auto-Load**: Intersection Observer for pagination  

---

## 📝 Files Modified/Created

### Created
- ✅ `server/index.js` - Express proxy
- ✅ `server/package.json` - Server deps
- ✅ `README_SETUP.md` - This guide

### Updated
- ✅ `index.html` - Added Unsplash fetch, performance improvements

---

## 🔐 Security Notes

- ✅ Unsplash key is **server-side only** (never exposed to browser)
- ✅ Pexels & Pixabay keys are in `index.html` but marked as public keys (acceptable)
- ⚠️ Do NOT commit Unsplash key to version control
- ⚠️ Use environment variables or `.env` file in production

---

## 🎯 Next Steps (Optional)

1. **Remove duplicate script**: Delete `inline_script.js` (duplicates functionality in `index.html`)
2. **Deploy proxy**: Use Heroku, Vercel, or your own server for production
3. **Add rate-limit handling**: Monitor API responses and implement backoff
4. **Cache results**: Store search results locally for faster repeat searches
5. **Add analytics**: Track popular searches, image clicks, etc.

---

**Last Updated**: 2026-08-25  
**Status**: ✅ All 3 APIs Integrated & Tested
