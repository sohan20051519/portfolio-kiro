# Technical Stack

## Core Technologies

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, animations, transforms
- **Vanilla JavaScript (ES6+)**: No frameworks, pure DOM manipulation
- **Tailwind CSS 3.x**: Utility-first styling via CDN

## Typography

- **Display Font**: Cinzel (serif) - Headers and titles
- **Body Font**: Manrope (sans-serif) - Content and UI
- **Special Font**: Creepster (cursive) - Halloween theme elements

## Build System

**Zero build process** - No bundlers, no compilation:
- Direct browser execution
- CDN-based dependencies (Tailwind, Google Fonts)
- Instant development feedback
- No npm packages or node_modules

## Development Workflow

1. Edit HTML/CSS/JS files directly
2. Refresh browser to see changes
3. Use browser DevTools for debugging
4. Deploy by uploading files to hosting

## Common Commands

Since this is a static site with no build process:

```bash
# Development (any local server)
python -m http.server 8000
# or
npx serve

# No build command needed
# No test command (manual testing)
```

## Performance Optimizations

- **GPU-accelerated transforms**: Using `transform` over `top/left`
- **RequestAnimationFrame**: For smooth 60fps animations
- **Intersection Observer**: Efficient scroll reveal animations
- **Conditional rendering**: Desktop-only features (custom cursor, complex animations)
- **CDN resources**: Cached globally for fast delivery

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- **Not supported**: IE11 (requires ES6+ features)

## Key Libraries & APIs

- **HTML5 Canvas API**: Fog particle system
- **Intersection Observer API**: Scroll reveal animations
- **RequestAnimationFrame**: Smooth cursor and particle animations
- **CSS 3D Transforms**: Card tilt effects
