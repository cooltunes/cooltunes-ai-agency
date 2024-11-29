// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const createMobileMenu = () => {
    const nav = document.querySelector('nav ul');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '☰';
    document.querySelector('nav').prepend(menuButton);

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
};

// Intersection Observer for fade-in animations
const createIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, #about, #contact').forEach((el) => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
};

// Form handling with validation
const setupFormValidation = () => {
    const form = document.querySelector('#contact form');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        if (name && email && message) {
            submitButton.innerHTML = 'Sending...';
            // Simulate form submission
            setTimeout(() => {
                submitButton.innerHTML = 'Message Sent!';
                form.reset();
                setTimeout(() => {
                    submitButton.innerHTML = 'Send Message';
                }, 2000);
            }, 1500);
        }
    });
};

// Typing animation for hero section
const createTypingAnimation = () => {
    const text = "Strategic AI consulting to drive innovation and efficiency";
    const heroP = document.querySelector('#hero p');
    heroP.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroP.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
};

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createMobileMenu();
    createIntersectionObserver();
    setupFormValidation();
    createTypingAnimation();
});
