# Quick Start Guide

Get your portfolio running in under 2 minutes.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime, etc.)
- Basic knowledge of HTML/CSS/JS

## Installation

### Option 1: Direct Open (Fastest)

1. Download or clone the repository
2. Open `index.html` in your browser
3. Done! The site runs entirely client-side

### Option 2: Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## Customization Basics

### Update Personal Info

Edit `index.html` and find these sections:

1. **Name & Title** (Line ~60-70)
2. **Social Links** (Line ~90-120)
3. **About Section** (Line ~150-200)
4. **Projects** (Line ~250-400)

### Change Colors

Edit the Tailwind config in `index.html` (Line ~15-40):

```javascript
colors: {
    'mist': '#F0F2F5',      // Background
    'charcoal': '#1a1a1a',  // Text
    'accent': '#3b82f6',    // Highlights
}
```

### Modify Animations

Edit `script.js` to adjust:
- Cursor speed (Line ~15)
- Fog particle count (Line ~120)
- Tilt intensity (Line ~250)

## Testing

Open in multiple browsers and devices to ensure responsiveness:
- Desktop: Chrome, Firefox, Safari
- Mobile: iOS Safari, Chrome Mobile
- Tablet: iPad, Android tablets

## Next Steps

- Read `STRUCTURE.md` for file organization
- Check `PRODUCTION.md` for deployment
- Review `CHECKLIST.md` before going live
