// ============================================
// ULTRA-MODERN LANDING PAGE 2026 - JAVASCRIPT
// ============================================

console.log('%c🚀 Landing Page 2026', 'color: #C2178B; font-size: 24px; font-weight: bold;');

// ============================================
// COUNTDOWN TIMER
// ============================================
function startCountdown() {
    const countdownDate = new Date().getTime() + (7 * 60 * 60 * 1000 + 23 * 60 * 1000 + 45 * 1000); // 7h 23m 45s from now

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(x);
            if (hoursEl) hoursEl.textContent = "00";
            if (minutesEl) minutesEl.textContent = "00";
            if (secondsEl) secondsEl.textContent = "00";
        }
    }, 1000);
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// FAQ ACCORDION
// ============================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item-modern');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question-modern');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current FAQ
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS (AOS Alternative) - FASTER
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute - MUCH FASTER
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        // Faster transitions, smaller delays
        el.style.transition = `opacity 0.4s ease ${index * 0.03}s, transform 0.4s ease ${index * 0.03}s`;
        observer.observe(el);
    });
}

// ============================================
// VIDEO PLACEHOLDER CLICK
// ============================================
function initVideo() {
    const videoPlaceholder = document.querySelector('.video-placeholder-modern');

    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // Replace with your actual video embed
            alert('Tutaj możesz osadzić prawdziwy film z YouTube lub Vimeo.\n\nPrzykład:\n<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>');

            // Example: Replace placeholder with iframe
            // this.innerHTML = '<iframe style="width: 100%; height: 100%; border-radius: 24px;" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>';
        });
    }
}

// ============================================
// FLOATING CTA VISIBILITY
// ============================================
function initFloatingCTA() {
    const floatingCTA = document.querySelector('.floating-cta-btn');
    const pricingSection = document.getElementById('pricing');

    if (!floatingCTA || !pricingSection) return;

    function checkScroll() {
        const scrollPosition = window.scrollY;
        const pricingPosition = pricingSection.offsetTop;
        const pricingBottom = pricingPosition + pricingSection.offsetHeight;

        // Show when scrolled past hero, hide when at pricing
        if (scrollPosition > 800 && scrollPosition < pricingPosition - 200) {
            floatingCTA.style.opacity = '1';
            floatingCTA.style.pointerEvents = 'auto';
        } else {
            floatingCTA.style.opacity = '0';
            floatingCTA.style.pointerEvents = 'none';
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
}

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
function initButtonRipple() {
    const buttons = document.querySelectorAll('.btn-modern, .btn-floating');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple-animation 0.6s ease-out';
            ripple.style.pointerEvents = 'none';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    .btn-modern, .btn-floating {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// ============================================
// PARALLAX EFFECT - COMPLETELY DISABLED
// ============================================
function initParallax() {
    // ALL parallax COMPLETELY disabled per user request
    // Hero visual and all children MUST NOT MOVE

    // Force hero-visual to stay 100% fixed
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.style.transform = 'rotate(-3deg)';
        heroVisual.style.transition = 'none';
        heroVisual.style.willChange = 'auto';

        // Lock ALL child elements
        const allChildren = heroVisual.querySelectorAll('*');
        allChildren.forEach(child => {
            child.style.transform = 'none !important';
            child.style.transition = 'none';
            child.style.willChange = 'auto';
        });
    }

    // Very subtle background only (reduced from 0.1 to 0.05)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const bgMesh = document.querySelector('.bg-gradient-mesh');
        if (bgMesh && scrolled < 2000) {
            bgMesh.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    });
}

// ============================================
// CURSOR TRAIL EFFECT (Optional - Modern Touch)
// ============================================
function initCursorTrail() {
    let mouseX = 0;
    let mouseY = 0;
    let cursorCircle = null;

    // Only on desktop
    if (window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!cursorCircle) {
                cursorCircle = document.createElement('div');
                cursorCircle.style.cssText = `
                    position: fixed;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #C2178B, #FF1B9F);
                    pointer-events: none;
                    z-index: 9999;
                    opacity: 0.3;
                    transition: transform 0.2s ease;
                    mix-blend-mode: difference;
                `;
                document.body.appendChild(cursorCircle);
            }

            cursorCircle.style.left = mouseX - 10 + 'px';
            cursorCircle.style.top = mouseY - 10 + 'px';
        });

        // Enlarge on hover over buttons
        document.querySelectorAll('.btn-modern, .btn-floating, a').forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (cursorCircle) {
                    cursorCircle.style.transform = 'scale(2)';
                }
            });
            el.addEventListener('mouseleave', () => {
                if (cursorCircle) {
                    cursorCircle.style.transform = 'scale(1)';
                }
            });
        });
    }
}

// ============================================
// PERFORMANCE MONITORING
// ============================================
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`⚡ Page loaded in ${loadTime}ms`);

            // Send to analytics if you have tracking
            if (loadTime < 3000) {
                console.log('✅ Excellent performance!');
            } else if (loadTime < 5000) {
                console.log('⚠️ Good performance');
            } else {
                console.log('❌ Consider optimization');
            }
        });
    }
}

// ============================================
// ANALYTICS TRACKING (Example)
// ============================================
function trackEvent(eventName, eventData = {}) {
    console.log('📊 Event:', eventName, eventData);

    // Replace with your analytics code
    // Example: gtag('event', eventName, eventData);
    // Example: analytics.track(eventName, eventData);
}

// Track CTA clicks
document.querySelectorAll('[href="#pricing"], .btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('cta_click', {
            button_text: btn.textContent.trim(),
            button_location: btn.closest('section')?.className || 'unknown'
        });
    });
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        if (maxScroll > 25 && maxScroll < 30) trackEvent('scroll_25');
        if (maxScroll > 50 && maxScroll < 55) trackEvent('scroll_50');
        if (maxScroll > 75 && maxScroll < 80) trackEvent('scroll_75');
        if (maxScroll > 90) trackEvent('scroll_complete');
    }
});

// ============================================
// FORM HANDLING (if you add forms)
// ============================================
function initForms() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Add your form submission logic here
            const formData = new FormData(form);

            console.log('Form submitted:', Object.fromEntries(formData));
            trackEvent('form_submit', { form_id: form.id });

            // Example: Send to server
            // fetch('/api/submit', {
            //     method: 'POST',
            //     body: formData
            // });
        });
    });
}

// ============================================
// LAZY LOAD IMAGES (when you add real images)
// ============================================
function initLazyLoad() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================
function improveAccessibility() {
    // Add ARIA labels to buttons without them
    document.querySelectorAll('button, .btn-modern, .btn-floating').forEach(btn => {
        if (!btn.getAttribute('aria-label') && !btn.getAttribute('aria-labelledby')) {
            btn.setAttribute('aria-label', btn.textContent.trim() || 'Button');
        }
    });

    // Add keyboard navigation for FAQ
    document.querySelectorAll('.faq-question-modern').forEach(question => {
        question.setAttribute('tabindex', '0');
        question.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
}

// ============================================
// PREVENT RIGHT CLICK (Optional - if content protection needed)
// ============================================
function protectContent() {
    // Uncomment if you want to prevent right-click
    // document.addEventListener('contextmenu', e => e.preventDefault());

    // Prevent text selection on specific elements
    // document.querySelectorAll('.price-current').forEach(el => {
    //     el.style.userSelect = 'none';
    // });
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 Initializing modern landing page...');

    // Core functions
    startCountdown();
    initFAQ();
    initScrollAnimations();
    initVideo();
    initFloatingCTA();
    initButtonRipple();
    initParallax();
    initLazyLoad();
    initForms();
    improveAccessibility();
    monitorPerformance();

    // Optional enhancements
    // initCursorTrail(); // Uncomment for cursor trail effect

    console.log('✅ Landing page initialized successfully!');

    // Add loaded class for any CSS transitions
    document.body.classList.add('loaded');
});

// ============================================
// HANDLE VISIBILITY CHANGE (Tab switching)
// ============================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('👋 User switched tab');
        trackEvent('tab_hidden');
    } else {
        console.log('👀 User returned');
        trackEvent('tab_visible');
    }
});

// ============================================
// MOBILE MENU TOGGLE (if you add navigation)
// ============================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log('%c💜 Zbuduj zdrową relację z cukrem', 'color: #FF1B9F; font-size: 16px;');
console.log('%c⚡ Landing Page by Claude Code', 'color: #6c757d; font-size: 12px;');

// ============================================
// EXPORT FOR TESTING (if needed)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        startCountdown,
        initFAQ,
        initScrollAnimations,
        trackEvent
    };
}
