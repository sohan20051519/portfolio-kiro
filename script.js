document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Custom Cursor Logic ---
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Main cursor (faster)
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px)`;

        // Follower (slower, ghostly)
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.transform = `translate(${followerX - 4}px, ${followerY - 4}px)`;

        requestAnimationFrame(animateCursor);
    }
    
    // Only run custom cursor on desktop to save mobile performance
    if (window.matchMedia("(min-width: 768px)").matches) {
        animateCursor();
    }


    // --- 2. Text Scramble Effect (The "Haunting" Glitch) ---
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ🎃🕸️🦇";
    
    document.querySelector('div[data-scramble]').onmouseover = event => {
        let iteration = 0;
        const target = event.target;
        // Handle child span properly by targeting text node if possible, but for simplicity we scramble the text content
        // We need to preserve the span inside if we want the pumpkin icon to stay, but the original code just replaces innerText.
        // Let's just scramble the text part.
        const originalText = target.dataset.scramble;
        
        clearInterval(target.interval);
        
        target.interval = setInterval(() => {
            const scrambled = originalText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)]
                })
                .join("");
            
            // We use innerHTML to keep the pumpkin span if we wanted, but here we just replace text.
            // A simple hack to keep the pumpkin is to append it after.
            target.innerHTML = scrambled + ' <span class="text-pumpkin text-xs animate-pulse">🎃</span>';
            
            if(iteration >= originalText.length){ 
                clearInterval(target.interval);
            }
            
            iteration += 1 / 3;
        }, 30);
    }


    // --- 3. Intersection Observer for Scroll Reveals ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });


    // --- 4. Fog Canvas Effect (Halloween Edition) ---
    const canvas = document.getElementById('fogCanvas');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 100 + 50;
            this.alpha = Math.random() * 0.05; // Very subtle opacity
            
            // Halloween Colors: Orange, Purple, Green
            const colors = [
                '251, 146, 60',  // Orange
                '147, 51, 234',  // Purple
                '101, 163, 13'   // Lime Green
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges (or wrap around for smoother effect)
            if (this.x < -100) this.x = width + 100;
            if (this.x > width + 100) this.x = -100;
            if (this.y < -100) this.y = height + 100;
            if (this.y > height + 100) this.y = -100;
        }

        draw() {
            ctx.beginPath();
            // Create a soft gradient for each particle
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
            gradient.addColorStop(0, `rgba(${this.color}, ${this.alpha})`); 
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.fillStyle = gradient;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialize particles
    for (let i = 0; i < 35; i++) {
        particles.push(new Particle());
    }

    function animateFog() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animateFog);
    }

    animateFog();


    // --- 5. Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Open Menu
                mobileMenu.classList.remove('pointer-events-none', 'opacity-0', 'translate-y-10');
                mobileMenu.classList.add('pointer-events-auto', 'opacity-100', 'translate-y-0');
                
                // Animate Burger
                const line = mobileMenuBtn.querySelector('.hamburger-line');
                line.style.transform = 'rotate(45deg)';
                line.classList.add('before:rotate-90', 'before:translate-y-0');
                // Simplified visual toggle for the single div burger:
                line.style.background = 'transparent';
                line.innerHTML = '<div class="absolute w-full h-full bg-pumpkin rotate-45"></div><div class="absolute w-full h-full bg-pumpkin -rotate-45"></div>';
            } else {
                // Close Menu
                mobileMenu.classList.add('pointer-events-none', 'opacity-0', 'translate-y-10');
                mobileMenu.classList.remove('pointer-events-auto', 'opacity-100', 'translate-y-0');
                
                // Reset Burger
                const line = mobileMenuBtn.querySelector('.hamburger-line');
                line.style.background = '#1a1a1a'; // charcoal
                line.innerHTML = '';
                line.style.transform = 'none';
            }
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('pointer-events-none', 'opacity-0', 'translate-y-10');
                mobileMenu.classList.remove('pointer-events-auto', 'opacity-100', 'translate-y-0');
                
                const line = mobileMenuBtn.querySelector('.hamburger-line');
                line.style.background = '#1a1a1a';
                line.innerHTML = '';
                line.style.transform = 'none';
            });
        });
    }

    // --- 6. Floating Navigation Bar Logic ---
    const navbar = document.getElementById('navbar');
    
    function updateNavbar() {
        // We use a small threshold to trigger the floating effect
        if (window.scrollY > 30) {
            // Floating State (Rounded, Detached, Glass)
            navbar.classList.remove('w-full', 'px-6', 'py-6', 'bg-transparent', 'backdrop-blur-[2px]');
            navbar.classList.add('w-[92%]', 'md:w-[75%]', 'left-1/2', '-translate-x-1/2', 'top-4', 'rounded-full', 'px-8', 'py-3', 'bg-white/70', 'backdrop-blur-md', 'shadow-neu', 'border', 'border-white/40');
        } else {
            // Default State (Top, Full Width, Flat)
            navbar.classList.add('w-full', 'px-6', 'py-6', 'bg-transparent', 'backdrop-blur-[2px]');
            navbar.classList.remove('w-[92%]', 'md:w-[75%]', 'left-1/2', '-translate-x-1/2', 'top-4', 'rounded-full', 'px-8', 'py-3', 'bg-white/70', 'backdrop-blur-md', 'shadow-neu', 'border', 'border-white/40');
        }
    }
    
    // Initialize on load in case user refreshes down the page
    updateNavbar();
    window.addEventListener('scroll', updateNavbar);

    // --- 7. 3D Tilt Effect Logic ---
    const tiltElements = document.querySelectorAll('.js-tilt');

    tiltElements.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Fast transition for immediate response
            // We preserve box-shadow transition if it exists in CSS (usually 0.3s or 0.5s)
            card.style.transition = 'transform 0.1s ease-out, box-shadow 0.5s ease';
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate distance from center (-1 to 1)
            // RotateX is based on Y axis (tilting up/down)
            // RotateY is based on X axis (tilting left/right)
            // We invert RotateX so moving mouse up tilts the top towards us (or away depending on preference)
            // Standard "look at mouse" feel: Mouse Top -> Top tilts away (RotateX positive)? No, usually Mouse Top -> Top tilts towards (RotateX negative).
            const rotateX = ((y - centerY) / centerY) * -1; 
            const rotateY = (x - centerX) / centerX;
            
            // Max rotation degrees
            const maxDeg = 4; // Subtle effect
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX * maxDeg}deg) rotateY(${rotateY * maxDeg}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            // Slow ease out for reset
            card.style.transition = 'transform 0.5s ease-out, box-shadow 0.5s ease';
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
});