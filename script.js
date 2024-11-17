
// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Submission Alert
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset(); // Clear the form fields
});
