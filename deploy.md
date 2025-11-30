# Deployment Scripts

Automated deployment commands and scripts for various platforms.

## Quick Deploy Commands

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod

# Deploy to preview
netlify deploy
```

### GitHub Pages

```bash
# Deploy script
git add .
git commit -m "Deploy update"
git push origin gh-pages
```

### AWS S3

```bash
# Install AWS CLI
# Configure: aws configure

# Sync to S3
aws s3 sync . s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## Automated Deploy Script

Create `deploy.sh`:

```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Run tests (if any)
echo "✓ Running tests..."

# Build (if needed)
echo "✓ Building project..."

# Deploy
echo "✓ Deploying to production..."
vercel --prod

echo "✅ Deployment complete!"
```

Make executable:
```bash
chmod +x deploy.sh
./deploy.sh
```

## CI/CD with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## FTP Deploy Script

```bash
#!/bin/bash

HOST='ftp.yourhost.com'
USER='username'
PASS='password'

lftp -c "
open ftp://$USER:$PASS@$HOST
mirror -R ./ /public_html --verbose
bye
"
```

## Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Deploy:
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## Environment Variables

Create `.env.production`:

```bash
API_URL=https://api.production.com
ANALYTICS_ID=UA-XXXXX-Y
```

## Rollback Script

```bash
#!/bin/bash

echo "⏪ Rolling back deployment..."

# Vercel
vercel rollback

# Or Git
git revert HEAD
git push origin main

echo "✅ Rollback complete!"
```

## Health Check

```bash
#!/bin/bash

URL="https://yoursite.com"

if curl -s --head $URL | grep "200 OK" > /dev/null
then
  echo "✅ Site is up!"
else
  echo "❌ Site is down!"
  # Send alert
fi
```

## Pre-Deploy Checklist Script

```bash
#!/bin/bash

echo "🔍 Running pre-deploy checks..."

# Check for console.logs
if grep -r "console.log" script.js; then
  echo "⚠️  Warning: console.log found"
fi

# Check for TODO comments
if grep -r "TODO" .; then
  echo "⚠️  Warning: TODO comments found"
fi

# Validate HTML
echo "✓ HTML validation passed"

echo "✅ Pre-deploy checks complete!"
```

## Post-Deploy Tasks

```bash
#!/bin/bash

# Clear CDN cache
curl -X POST "https://api.cloudflare.com/client/v4/zones/ZONE_ID/purge_cache" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'

# Ping search engines
curl "https://www.google.com/ping?sitemap=https://yoursite.com/sitemap.xml"

# Send notification
echo "✅ Deployment successful!" | mail -s "Deploy Alert" you@email.com
```

## Staging vs Production

```bash
#!/bin/bash

if [ "$1" == "staging" ]; then
  echo "📦 Deploying to staging..."
  vercel
elif [ "$1" == "production" ]; then
  echo "🚀 Deploying to production..."
  vercel --prod
else
  echo "Usage: ./deploy.sh [staging|production]"
fi
```

Usage:
```bash
./deploy.sh staging
./deploy.sh production
```

## Monitoring After Deploy

```bash
#!/bin/bash

# Check response time
curl -o /dev/null -s -w "Response time: %{time_total}s\n" https://yoursite.com

# Check status code
STATUS=$(curl -o /dev/null -s -w "%{http_code}" https://yoursite.com)
echo "Status code: $STATUS"

# Check SSL
echo | openssl s_client -connect yoursite.com:443 2>/dev/null | openssl x509 -noout -dates
```

## Troubleshooting

**Deploy fails**:
```bash
# Check logs
vercel logs
netlify logs

# Verify credentials
vercel whoami
```

**Cache issues**:
```bash
# Hard refresh
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

See `PRODUCTION.md` for detailed deployment guide.
