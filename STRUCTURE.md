# Project Structure

Complete breakdown of the portfolio website architecture.

## File Organization

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Custom CSS & animations
├── script.js           # Interactive features
├── README.md           # Project overview
├── QUICKSTART.md       # Setup guide
├── START_HERE.md       # Beginner's guide
├── STRUCTURE.md        # This file
├── PROJECT_SUMMARY.md  # Technical details
├── PRODUCTION.md       # Deployment guide
├── deploy.md           # Deployment scripts
└── CHECKLIST.md        # Pre-launch checklist
```

## HTML Structure (`index.html`)

### Head Section
- Meta tags for SEO and viewport
- Tailwind CSS CDN
- Google Fonts (Cinzel, Manrope)
- Tailwind configuration
- Custom CSS link

### Body Sections

1. **Background Elements** (Lines ~50-55)
   - Fog canvas
   - Noise texture overlay
   - Custom cursor elements

2. **Navigation** (Lines ~58-80)
   - Logo with scramble effect
   - Desktop menu
   - Mobile hamburger button
   - Mobile overlay menu

3. **Hero Section** (Lines ~85-140)
   - Name and title
   - Tagline
   - Social buttons (GitHub, LinkedIn, Resume)

4. **About Section** (Lines ~145-230)
   - Bio and description
   - Experience timeline
   - Tech stack cards

5. **Projects Section** (Lines ~235-450)
   - Project cards with 3D tilt
   - Hover overlays
   - Live demo and GitHub links

6. **Certificates Section** (Lines ~455-550)
   - Credential cards
   - Issuer information

7. **Contact Section** (Lines ~555-620)
   - Contact form
   - Social links
   - Footer

## CSS Structure (`styles.css`)

### Tailwind Directives
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Custom Styles

1. **Scrollbar Styling** (Lines ~8-20)
2. **Keyframe Animations** (Lines ~23-50)
   - `spin-slow` - Slow rotation
   - `spin-reverse` - Reverse rotation
   - `pulse-slow` - Breathing effect
   - `fadeInUp` - Entrance animation

3. **Utility Classes** (Lines ~53-90)
   - `.reveal-on-scroll` - Scroll animations
   - `.fade-in-up` - Fade entrance
   - `.delay-*` - Animation delays

4. **Component Styles** (Lines ~93-120)
   - Hamburger menu
   - 3D tilt helper
   - Selection colors

## JavaScript Structure (`script.js`)

### 1. Custom Cursor (Lines ~5-30)
- Mouse tracking
- Smooth following animation
- Desktop-only activation

### 2. Text Scramble (Lines ~33-55)
- Hover effect on logo
- Random letter generation
- Gradual reveal

### 3. Scroll Reveal (Lines ~58-75)
- Intersection Observer
- Fade-in on scroll
- One-time animation

### 4. Fog Canvas (Lines ~78-145)
- Particle system
- Gradient rendering
- Continuous animation loop

### 5. Mobile Menu (Lines ~148-195)
- Toggle functionality
- Hamburger animation
- Link click handlers

### 6. Floating Navigation (Lines ~198-220)
- Scroll detection
- Class toggling
- Smooth transitions

### 7. 3D Tilt Effect (Lines ~223-260)
- Mouse position tracking
- Perspective transforms
- Smooth reset on leave

## Dependencies

### External (CDN)
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Cinzel (display) & Manrope (body)

### Internal
- No npm packages
- No build tools
- Pure vanilla JavaScript

## Data Flow

```
User Interaction
    ↓
Event Listeners (script.js)
    ↓
DOM Manipulation
    ↓
CSS Transitions/Animations
    ↓
Visual Feedback
```

## Performance Considerations

1. **Lazy Loading**: Scroll animations only trigger once
2. **Desktop-Only Features**: Cursor and some effects disabled on mobile
3. **RequestAnimationFrame**: Smooth 60fps animations
4. **Minimal Repaints**: Transform-based animations
5. **CDN Resources**: Fast font and CSS delivery

## Customization Points

### Easy Changes
- Text content in HTML
- Colors in Tailwind config
- Social links and URLs

### Moderate Changes
- Animation speeds in JS
- Layout structure in HTML
- Custom CSS utilities

### Advanced Changes
- Particle system behavior
- 3D tilt calculations
- Custom cursor logic

## Browser Compatibility

- **Modern Browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **IE11**: Not supported (uses modern JS features)
- **Mobile**: Fully responsive with touch-optimized interactions

## File Size

- `index.html`: ~25KB
- `styles.css`: ~3KB
- `script.js`: ~8KB
- **Total**: ~36KB (excluding external resources)

## Next Steps

- See `PROJECT_SUMMARY.md` for technical deep dive
- Check `PRODUCTION.md` for deployment
- Review `CHECKLIST.md` before launch
