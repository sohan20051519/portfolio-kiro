# Start Here

Welcome! This guide will help you understand and customize this portfolio website.

## What You're Looking At

This is a single-page portfolio website with:
- 3 core files (HTML, CSS, JS)
- No build process required
- No dependencies to install
- Runs directly in the browser

## First Steps

### 1. Open the Site

Simply open `index.html` in your browser. That's it!

### 2. Explore the Code

**Start with these files in order:**

1. `index.html` - The structure and content
2. `styles.css` - Custom animations and utilities
3. `script.js` - Interactive features

### 3. Make Your First Edit

**Change the name:**

Open `index.html` and find line ~60:

```html
<h1 class="text-5xl...">SOHAN A</h1>
```

Replace "SOHAN A" with your name, save, and refresh!

## Understanding the Design

### Neomorphism

The design uses "soft UI" with subtle shadows:
- `shadow-neu` - Raised effect
- `shadow-neu-pressed` - Pressed effect

### Color Palette

- **Mist** (#F0F2F5) - Light background
- **Charcoal** (#1a1a1a) - Dark text
- **Spirit** (#94a3b8) - Muted accents
- **Accent** (#3b82f6) - Blue highlights

### Key Features

1. **Custom Cursor** - Desktop only, smooth tracking
2. **Fog Canvas** - Animated particle background
3. **3D Tilt** - Cards tilt toward mouse
4. **Scroll Reveals** - Content fades in on scroll
5. **Floating Nav** - Transforms on scroll

## Common Customizations

### Add a New Project

Find the projects section (~Line 250 in `index.html`) and copy this template:

```html
<article class="group relative cursor-pointer reveal-on-scroll">
    <div class="js-tilt h-[450px] bg-mist rounded-xl shadow-neu...">
        <!-- Your project content -->
    </div>
</article>
```

### Change Fonts

Update the Google Fonts link in `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap">
```

Then update Tailwind config:

```javascript
fontFamily: {
    'display': ['YourFont', 'serif'],
}
```

### Disable Animations

Remove or comment out in `script.js`:
- Fog canvas (Line ~80-130)
- Custom cursor (Line ~10-30)
- 3D tilt (Line ~240-280)

## Need Help?

- Check `STRUCTURE.md` for file organization
- Read `PROJECT_SUMMARY.md` for technical details
- See `QUICKSTART.md` for setup instructions

## Pro Tips

- Use browser DevTools to inspect elements
- Test on mobile devices early
- Keep the design minimal and fast
- Optimize images before adding them

Ready to dive deeper? Check out the other documentation files!
