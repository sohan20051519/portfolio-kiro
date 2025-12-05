# Production Deployment Guide

Complete guide for deploying your portfolio to production.

## Pre-Deployment Checklist

- [ ] Test on all major browsers
- [ ] Verify mobile responsiveness
- [ ] Check all links work
- [ ] Optimize images
- [ ] Update meta tags
- [ ] Add favicon
- [ ] Test contact form
- [ ] Review content for typos

## Hosting Options

### Option 1: Vercel (Recommended)

**Pros**: Free, fast CDN, automatic HTTPS, GitHub integration

**Steps**:
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic)

**Custom Domain**:
```bash
# In Vercel dashboard
Settings → Domains → Add Domain
```

### Option 2: Netlify

**Pros**: Free tier, drag-and-drop, form handling

**Steps**:
1. Visit [netlify.com](https://netlify.com)
2. Drag your project folder
3. Deploy instantly

**Custom Domain**:
```bash
# In Netlify dashboard
Domain Settings → Add Custom Domain
```

### Option 3: GitHub Pages

**Pros**: Free, simple, version controlled

**Steps**:
```bash
# Create gh-pages branch
git checkout -b gh-pages
git push origin gh-pages

# Enable in repo settings
Settings → Pages → Source: gh-pages
```

**URL**: `https://yourusername.github.io/repo-name`

### Option 4: AWS S3 + CloudFront

**Pros**: Scalable, professional, full control

**Steps**:
1. Create S3 bucket
2. Enable static website hosting
3. Upload files
4. Configure CloudFront CDN
5. Add custom domain via Route 53

### Option 5: Traditional Hosting

**Providers**: Bluehost, HostGator, SiteGround

**Steps**:
1. Purchase hosting plan
2. Upload via FTP/cPanel
3. Point domain to hosting

## Optimization Before Deploy

### 1. Minify Files

```bash
# HTML
npx html-minifier index.html -o index.min.html

# CSS
npx csso styles.css -o styles.min.css

# JavaScript
npx terser script.js -o script.min.js
```

### 2. Image Optimization

- Use WebP format
- Compress with TinyPNG
- Lazy load images
- Add responsive images

### 3. Add Meta Tags

```html
<meta name="description" content="Your description">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:image" content="preview.jpg">
```

### 4. Add Favicon

```html
<link rel="icon" type="image/png" href="favicon.png">
```

## Environment Configuration

### Production vs Development

Create separate configs if needed:

```javascript
const config = {
    production: {
        apiUrl: 'https://api.yoursite.com',
        analytics: 'UA-XXXXX-Y'
    },
    development: {
        apiUrl: 'http://localhost:3000',
        analytics: null
    }
}
```

## Analytics Setup

### Google Analytics

```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Performance Monitoring

### Tools to Use

- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse (Chrome DevTools)

### Target Metrics

- First Contentful Paint: < 1.8s
- Speed Index: < 3.4s
- Time to Interactive: < 3.8s
- Total Blocking Time: < 300ms

## Security Headers

Add to hosting config:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## SSL/HTTPS

All recommended hosts provide free SSL via Let's Encrypt.

## Custom Domain Setup

1. Purchase domain (Namecheap, Google Domains)
2. Update DNS records:
   - A record → hosting IP
   - CNAME → www subdomain
3. Wait for propagation (24-48 hours)

## Continuous Deployment

### GitHub Actions Example

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        run: vercel --prod
```

## Backup Strategy

- Keep code in Git repository
- Export hosting backups monthly
- Store credentials securely

## Monitoring

- Set up uptime monitoring (UptimeRobot)
- Enable error tracking (Sentry)
- Monitor analytics weekly

## Post-Deployment

1. Test all functionality
2. Check mobile experience
3. Verify forms work
4. Test on slow connections
5. Share with friends for feedback

## Troubleshooting

**Issue**: Styles not loading
- Check file paths are relative
- Verify CDN links work

**Issue**: Animations laggy
- Reduce particle count
- Disable on mobile

**Issue**: Contact form not working
- Add backend service (Formspree, Netlify Forms)

## Maintenance Schedule

- **Weekly**: Check analytics
- **Monthly**: Update content
- **Quarterly**: Review performance
- **Yearly**: Redesign consideration

See `deploy.md` for automated deployment scripts.
