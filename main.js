document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const smoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    };

    // Header scroll effect
    const headerScrollEffect = () => {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(53, 66, 74, 0.9)';
                header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'var(--primary-color)';
                header.style.boxShadow = 'none';
            }
        });
    };

    // Hover effects for features and team members
    const addHoverEffect = (elements) => {
        elements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'scale(1.05)';
            });
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'scale(1)';
            });
        });
    };

    // Handle CTA click
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent any other default action
            window.location.href = 'mailto:george@buffr.ai?subject=Contact%20George%20at%20Buffr';
        });
    }

    // Initialize functions
    smoothScroll();
    headerScrollEffect();
    addHoverEffect(document.querySelectorAll('.feature-box'));
    addHoverEffect(document.querySelectorAll('.team-member'));
});