// 1. Advanced Form Validation with Inline Error Messages
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Clear any previous error messages
    document.querySelectorAll('.error').forEach(el => el.remove());

    // Validation
    let valid = true;

    if (name.value.trim() === '') {
        showError(name, 'Name is required');
        valid = false;
    }

    if (!email.value.includes('@') || email.value.trim() === '') {
        showError(email, 'Valid email is required');
        valid = false;
    }

    if (message.value.trim() === '') {
        showError(message, 'Message is required');
        valid = false;
    }

    if (valid) {
        alert(`Thank you, ${name.value}! Your message has been sent.`);
        contactForm.reset();
    }
});

function showError(input, message) {
    const error = document.createElement('span');
    error.className = 'error';
    error.textContent = message;
    input.parentElement.appendChild(error);
}

// 2. Dark Mode Toggle with Local Storage to Remember Preference
const darkModeToggle = document.getElementById('dark-mode-toggle');
const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';

if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// 3. Notification Banner with Close Button
const notificationBanner = document.createElement('div');
notificationBanner.className = 'notification-banner';
notificationBanner.textContent = 'Welcome! Check out our latest updates.';
const closeBtn = document.createElement('button');
closeBtn.textContent = 'X';
closeBtn.className = 'close-btn';
closeBtn.addEventListener('click', () => {
    notificationBanner.style.display = 'none';
    localStorage.setItem('notification-dismissed', 'true');
});
notificationBanner.appendChild(closeBtn);

if (!localStorage.getItem('notification-dismissed')) {
    document.body.prepend(notificationBanner);
}

// 4. Lazy Loading Images
document.querySelectorAll('img.lazy').forEach(img => {
    img.setAttribute('loading', 'lazy');
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});

// 5. Intersection Observer for Animations on Scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

animatedElements.forEach(el => observer.observe(el));

// 6. Auto-Save Form Data to Local Storage
const formFields = ['name', 'email', 'message'];
formFields.forEach(field => {
    const input = document.getElementById(field);
    input.value = localStorage.getItem(field) || '';
    input.addEventListener('input', () => {
        localStorage.setItem(field, input.value);
    });
});

// CSS to style new elements
const style = document.createElement('style');
style.textContent = `
    .error { color: red; font-size: 0.9em; margin-top: 5px; }
    .dark-mode { background-color: #121212; color: #f0f0f0; }
    .notification-banner {
        background-color: #ff9800; color: #fff;
        position: fixed; top: 0; width: 100%; padding: 1rem; text-align: center;
        display: flex; justify-content: center; align-items: center;
    }
    .close-btn { margin-left: 1rem; color: #fff; background: none; border: none; cursor: pointer; }
    .animate-on-scroll { opacity: 0; transform: translateY(20px); transition: opacity 0.5s, transform 0.5s; }
    .animate-on-scroll.animate { opacity: 1; transform: translateY(0); }
    .lazy.loaded { opacity: 1; transition: opacity 0.3s; }
`;
document.head.appendChild(style);
