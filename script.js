// Countdown Timer Function
function startCountdown() {
    const countdownDate = new Date('Dec 22, 2025 00:00:00').getTime();
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (document.getElementById('days')) {
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
        }
        
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
        }
    }, 1000);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in Animation on Scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.workshop-card, .competition-card, .contact-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Form Validation
function validateForm(event) {
    const form = event.target;
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');
    
    if (!name.value || !email.value || !message.value) {
        alert('Please fill in all fields');
        event.preventDefault();
        return false;
    }
    
    if (!email.value.includes('@')) {
        alert('Please enter a valid email address');
        event.preventDefault();
        return false;
    }
    
    alert('Message sent successfully!');
    return true;
}
Add script.js - Main JavaScript file// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    
    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Add form submit listener
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
    
    // Initial reveal check
    revealOnScroll();
});

// Mobile Menu Toggle (if needed)
function toggleMobileMenu() {
    const nav = document.querySelector('.navbar nav');
    nav.classList.toggle('active');
}

console.log('Techfest website loaded successfully!');
