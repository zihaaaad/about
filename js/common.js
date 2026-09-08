// js/common.js
document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            const isActive = mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });

        // Close mobile menu when clicking a link
        const navLinks = mainNav.querySelectorAll('a.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    const internalLinks = document.querySelectorAll('a.nav-link[href^="#"], .hero-buttons a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                const header = document.getElementById('main-header');
                const headerOffset = header ? header.offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 15;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Dynamic Footer Copyright Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Sticky Header Shadow on Scroll ---
    const header = document.getElementById('main-header');
    if (header) {
        const checkSticky = () => {
            if (window.pageYOffset > 50) {
                header.classList.add('sticky-header');
            } else {
                header.classList.remove('sticky-header');
            }
        };
        checkSticky();
        window.addEventListener('scroll', checkSticky);
    }
});