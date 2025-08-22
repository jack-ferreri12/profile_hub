# 📸 Media Setup Guide

## 🎯 Quick Setup Steps

### 1. **Add Project Screenshots**
Save these images in the `assets/` folder:

- **`prepify-screenshot.jpg`** - Screenshot of your Prepify LLC platform
- **`asl-project.jpg`** - Screenshot of your ASL Translator project  
- **`graphflicks-screenshot.jpg`** - Screenshot of your GraphFlicks IMDb Graph

**Recommended size:** 600x400 pixels (or similar aspect ratio)

### 2. **Add Video Demos**
Save these videos in the `assets/` folder:

- **`prepify-demo.mp4`** - Video demo of Prepify LLC
- **`graphflicks-demo.mp4`** - Video demo of GraphFlicks (when ready)

**Recommended format:** MP4, under 10MB for fast loading

### 3. **Update YouTube Video for ASL Project**
In `script.js`, find this line:
```javascript
'asl': 'https://www.youtube.com/embed/YOUR_ASL_VIDEO_ID',
```

Replace `YOUR_ASL_VIDEO_ID` with your actual YouTube video ID.

**To find your YouTube video ID:**
- Go to your YouTube video
- Copy the URL: `https://www.youtube.com/watch?v=ABC123xyz`
- The ID is `ABC123xyz` (the part after `v=`)

## 🎨 Image Guidelines

- **Format:** JPG for photos, PNG for screenshots with text
- **Quality:** High quality but optimized for web (under 500KB each)
- **Aspect Ratio:** 3:2 or 4:3 works best for project screenshots
- **Content:** Show the most impressive/functional parts of each project

## 🎬 Video Guidelines

- **Length:** 30-60 seconds per demo
- **Content:** Show key features and functionality
- **Quality:** 720p or 1080p, compressed for web
- **Audio:** Include narration or captions if helpful

## 🚀 After Adding Media

1. **Test the website:** `./start.sh` or open `index.html`
2. **Check all images load properly**
3. **Test video modals** by clicking play buttons
4. **Verify YouTube video** works for ASL project

## 📱 Testing Checklist

- [ ] All project images display correctly
- [ ] Prepify video demo plays in modal
- [ ] ASL YouTube video loads properly
- [ ] GraphFlicks video works (when added)
- [ ] Images look good on mobile devices
- [ ] Videos play smoothly on different devices

## 🔧 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure files are in the `assets/` folder
- Try refreshing the browser cache

**Videos not playing?**
- Check file format is MP4
- Ensure file size isn't too large
- Verify YouTube video ID is correct

**Need help?** The website will still work without videos - they're optional enhancements!
