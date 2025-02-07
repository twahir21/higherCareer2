document.addEventListener('DOMContentLoaded', function() {
    // Add animation delay to footer list items
    document.querySelectorAll('.footer-section ul li').forEach((item, index) => {
        item.style.setProperty('--i', index + 1);
    });
});

/* Intersection Observer for animation trigger */
const footerSections = document.querySelectorAll('.footer-section');
const observerOptions = {
    threshold: 0.2,
    rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

footerSections.forEach(section => {
    section.style.animationPlayState = 'paused';
    observer.observe(section);
});
