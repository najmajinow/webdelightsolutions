// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example alert for demonstration purposes
    alert(`Thank you, ${name}! Your message has been sent.`);

    this.reset(); // Reset the form
});

// Toggle the menu on hamburger click
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu').querySelector('ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the active class to show/hide the menu
});


