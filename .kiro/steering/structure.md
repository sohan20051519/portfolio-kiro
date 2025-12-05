# Project Structure

## File Organization

```
portfolio/
├── index.html          # Main HTML structure (single page)
├── styles.css          # Custom CSS & animations
├── script.js           # Interactive features & animations
├── README.md           # Project overview
├── QUICKSTART.md       # Setup guide
├── START_HERE.md       # Beginner's guide
├── STRUCTURE.md        # Architecture documentation
├── PROJECT_SUMMARY.md  # Technical deep dive
├── PRODUCTION.md       # Deployment guide
├── deploy.md           # Deployment scripts
└── CHECKLIST.md        # Pre-launch checklist
```

## Architecture

**Single-page application** with no routing:
- All content in `index.html`
- Smooth scroll navigation between sections
- No page transitions or multi-page structure

## HTML Structure (index.html)

Sections in order:
1. **Background Elements**: Fog canvas, noise texture, custom cursor
2. **Navigation**: Logo, desktop menu, mobile hamburger
3. **Hero**: Name, title, tagline, social buttons
4. **About**: Bio, experience timeline, tech stack
5. **Projects**: Portfolio cards with 3D tilt
6. **Certificates**: Credential cards
7. **Contact**: Contact form, social links, footer

## CSS Structure (styles.css)

- Tailwind directives (`@tailwind base/components/utilities`)
- Custom scrollbar styling
- Keyframe animations (spin-slow, spin-reverse, pulse-slow, fadeInUp, flicker)
- Utility classes (reveal-on-scroll, fade-in-up, delay-*)
- Component styles (hamburger menu, 3D tilt helper)

## JavaScript Structure (script.js)

Modular feature implementations:
1. **Custom Cursor** (lines ~5-30): Mouse tracking with smooth easing
2. **Text Scramble** (lines ~33-55): Hover effect on logo
3. **Scroll Reveal** (lines ~58-75): Intersection Observer for fade-in
4. **Fog Canvas** (lines ~78-145): Particle system with gradient rendering
5. **Mobile Menu** (lines ~148-195): Toggle functionality
6. **Floating Navigation** (lines ~198-220): Scroll-triggered transformation
7. **3D Tilt Effect** (lines ~223-260): Mouse-based perspective transforms

## Design System

### Color Palette
- `mist`: #F0F2F5 (background)
- `phantom`: #E2E8F0 (secondary background)
- `charcoal`: #1a1a1a (primary text)
- `spirit`: #94a3b8 (muted text)
- `accent`: #3b82f6 (highlights)
- `pumpkin`: #f97316 (Halloween orange)
- `witch`: #9333ea (Halloween purple)
- `slime`: #65a30d (Halloween green)

### Shadows (Neomorphism)
- `shadow-neu`: Soft outset shadow
- `shadow-neu-pressed`: Inset shadow for pressed state
- `shadow-glass`: Glass morphism effect
- `shadow-glow-orange`: Glowing orange effect

## Code Conventions

- **Vanilla JavaScript**: No frameworks, pure DOM manipulation
- **ES6+ syntax**: Arrow functions, template literals, classes
- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<section>`, `<article>`
- **Utility-first CSS**: Tailwind classes with minimal custom CSS
- **Mobile-first**: Responsive breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Performance-conscious**: Conditional rendering, GPU acceleration, efficient observers

## Customization Points

### Easy Changes
- Text content in HTML
- Colors in Tailwind config (inline `<script>` in `<head>`)
- Social links and URLs
- Project cards (copy template structure)

### Moderate Changes
- Animation speeds in JavaScript
- Layout structure in HTML
- Custom CSS utilities in styles.css

### Advanced Changes
- Particle system behavior (Particle class in script.js)
- 3D tilt calculations
- Custom cursor logic
