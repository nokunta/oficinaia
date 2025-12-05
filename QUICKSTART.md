# Quick Start Guide

Get your interactive landing flow up and running in 3 minutes!

## 🚀 Fast Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000
```

That's it! Your 3-step landing flow is now running.

## 🎨 Customize Your Flow

### 1. Update the Options (Step 1)

Edit `data/options.json`:

```json
{
  "options": [
    {
      "id": "unique-id",
      "title": "Your Option Title",
      "description": "Brief description",
      "image": "https://your-image-url.com/image.jpg",
      "videoUrl": "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    }
  ]
}
```

**Pro Tips:**
- Use high-quality images (recommended: 800x600px)
- For YouTube videos: Use the embed URL format
- For custom videos: Use a direct video file URL or embed code

### 2. Customize Pricing (Step 3)

Edit `app/offer/page.tsx`:
- Update pricing amounts
- Modify features list
- Change button actions

### 3. Brand Colors

Edit `tailwind.config.js` to match your brand:

```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

## 📊 Analytics Setup

### Google Analytics

1. Get your GA4 Measurement ID
2. Create `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. The analytics are already integrated!

### Custom Analytics

Edit `lib/analytics.ts` to integrate with:
- Mixpanel
- Segment
- Amplitude
- Your custom solution

## 🎯 Testing the Flow

1. **Selection Page** (`/`)
   - Click any of the 3 options
   - Should navigate to video page

2. **Video Page** (`/video?option=option-1`)
   - Video should load and play
   - Click "Continue" button

3. **Offer Page** (`/offer`)
   - Choose Free or Premium
   - Check console for analytics events

## 📱 Mobile Testing

Open on your phone:
```
http://YOUR_LOCAL_IP:3000
```

Find your IP:
```bash
# Mac/Linux
ifconfig | grep "inet "

# Windows
ipconfig
```

## 🚀 Deploy to Production

### Vercel (1-Click Deploy)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import in Vercel
3. Deploy!

### Custom Domain

In Vercel dashboard:
1. Go to Project Settings
2. Add your domain
3. Update DNS records

## 🎨 Replace Placeholder Images

Free image resources:
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images & videos

## 🎥 Video Hosting Options

- **YouTube** - Free, easy embedding
- **Vimeo** - Professional, customizable player
- **Wistia** - Marketing-focused, analytics
- **Self-hosted** - Full control, S3/CloudFront

## 💡 Common Customizations

### Change Animation Speed

In any page component, modify the `transition` duration:

```tsx
transition={{ duration: 0.6 }} // Slower
transition={{ duration: 0.3 }} // Faster
```

### Add More Options

Just add more objects to `data/options.json` - the grid will expand automatically!

### Change Button Text

Search for button text in the page files and update as needed.

## ❓ Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build
# Fix any TypeScript errors shown
```

## 📚 Next Steps

- [ ] Replace placeholder images
- [ ] Add your own video content
- [ ] Customize colors and branding
- [ ] Set up analytics
- [ ] Test on mobile devices
- [ ] Deploy to production
- [ ] Add custom domain

## 🤝 Need Help?

- Check the main README.md for detailed docs
- Open an issue on GitHub
- Join our community Discord

---

**Ready to launch?** Just run `npm run dev` and start customizing! 🚀











