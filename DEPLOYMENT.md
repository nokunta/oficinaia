# Deployment Guide

Complete guide to deploying your 3-step interactive landing flow to production.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Built for Next.js
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available

**Deploy Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! 🎉

**Custom Domain:**
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

---

### Option 2: Netlify

**Deploy Steps:**

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js

2. **Deploy:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Build and deploy
   npm run build
   netlify deploy --prod
   ```

---

### Option 3: DigitalOcean App Platform

**Deploy Steps:**

1. **Connect Repository:**
   - Go to DigitalOcean App Platform
   - Create new app from GitHub

2. **Configure:**
   - Detected: Next.js App
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - HTTP Port: 3000

3. **Deploy:**
   - Click "Deploy"
   - Wait 3-5 minutes

**Pricing:** Starting at $5/month

---

### Option 4: AWS (Advanced)

**Using AWS Amplify:**

1. **Install Amplify CLI:**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize:**
   ```bash
   amplify init
   amplify add hosting
   ```

3. **Deploy:**
   ```bash
   npm run build
   amplify publish
   ```

---

### Option 5: Railway

**One-Command Deploy:**

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

**Features:**
- $5 free credit monthly
- Automatic deployments
- Custom domains

---

### Option 6: Cloudflare Pages

**Deploy Steps:**

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   npx wrangler pages publish .next
   ```

---

## 🔧 Pre-Deployment Checklist

- [ ] Test locally: `npm run build && npm start`
- [ ] Update `data/options.json` with real content
- [ ] Replace placeholder images with production URLs
- [ ] Update video URLs with real content
- [ ] Configure analytics (GA, Mixpanel, etc.)
- [ ] Set environment variables
- [ ] Test on mobile devices
- [ ] Check performance (Lighthouse)
- [ ] Verify SEO meta tags
- [ ] Test all three steps of the flow

---

## 🌍 Environment Variables

Create these in your deployment platform:

```bash
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_MIXPANEL_TOKEN=your-token

# Optional
NEXT_PUBLIC_ANALYTICS_ENABLED=true
NEXT_PUBLIC_API_URL=https://your-api.com
```

**Vercel:** Project Settings → Environment Variables
**Netlify:** Site Settings → Build & Deploy → Environment
**Others:** Check their documentation

---

## 📊 Performance Optimization

### 1. Image Optimization

Replace external images with Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

### 2. Enable Compression

In `next.config.js`:

```js
module.exports = {
  compress: true,
  // ... other config
}
```

### 3. CDN for Assets

Store images/videos on:
- Cloudinary
- Imgix
- AWS S3 + CloudFront
- Vercel Blob Storage

---

## 🔒 Security Best Practices

### 1. Environment Variables

Never commit `.env` files:
```bash
# Already in .gitignore
.env.local
.env
```

### 2. API Keys

Store sensitive keys server-side only (no `NEXT_PUBLIC_` prefix)

### 3. HTTPS Only

All major platforms provide automatic HTTPS:
- Vercel ✅
- Netlify ✅
- Cloudflare ✅

---

## 📈 Monitoring & Analytics

### 1. Set up Error Tracking

**Sentry Integration:**

```bash
npm install @sentry/nextjs
```

**Configure:**
```js
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'YOUR_DSN',
  tracesSampleRate: 1.0,
})
```

### 2. Performance Monitoring

**Vercel Analytics:**
- Automatic in Vercel deployments
- View in Vercel dashboard

**Google Analytics:**
- Already integrated in `lib/analytics.ts`
- Add your GA ID in environment variables

### 3. Uptime Monitoring

Free options:
- UptimeRobot (50 monitors free)
- Pingdom
- StatusCake

---

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: Out of memory**
```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Deployment Issues

**Vercel build timeout:**
- Check build logs
- Optimize large dependencies
- Contact support for increased limits

**404 on routes:**
- Ensure using App Router (Next.js 13+)
- Check `next.config.js` settings

### Performance Issues

**Slow page loads:**
- Use Next.js Image component
- Enable compression
- Optimize video loading
- Use CDN for static assets

---

## 🔄 Continuous Deployment

### GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run deploy
```

---

## 📱 Mobile App Version

Want a mobile app? Consider:

1. **React Native** - Full native app
2. **Capacitor** - Wrap your web app
3. **PWA** - Progressive Web App (easiest)

**PWA Setup:**

Add to `next.config.js`:
```js
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
})
```

---

## 🎯 Post-Deployment

After deploying:

1. **Test Everything:**
   - All three steps work
   - Mobile responsiveness
   - Videos load properly
   - Analytics tracking

2. **Monitor:**
   - Check error logs daily (first week)
   - Review analytics weekly
   - Monitor performance metrics

3. **Iterate:**
   - A/B test different options
   - Optimize conversion rates
   - Update content based on data

---

## 📞 Support

**Need help?**
- Check [Next.js Documentation](https://nextjs.org/docs)
- Visit [Vercel's Help](https://vercel.com/help)
- Open an issue on GitHub

---

## ✨ Success Checklist

- [ ] Site is live and accessible
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] All pages load correctly
- [ ] Mobile version works perfectly
- [ ] Analytics tracking verified
- [ ] Error monitoring set up
- [ ] Backup/version control configured
- [ ] Team has access
- [ ] Documentation updated

---

**Congratulations! Your landing flow is now live! 🚀**

Monitor your analytics and watch those conversions roll in!











