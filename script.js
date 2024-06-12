// Listen for the scroll event
window.addEventListener('scroll', function() {
    // Select the navbar element
    const navbar = document.querySelector('.navbar');
    // Check if the page is scrolled more than 50 pixels
    if (window.scrollY > 50) {
        // Add the 'scrolled' class to change the background color
        navbar.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class if not scrolled more than 50 pixels
        navbar.classList.remove('scrolled');
    }
});
