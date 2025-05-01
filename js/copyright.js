// Function to create dynamic copyright banner
document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Create or update the copyright text
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = `<p>&copy; ${currentYear} Bill Futreal. All rights reserved.</p>`;
    } else {
        // If footer doesn't exist, create one
        const footer = document.createElement('footer');
        footer.innerHTML = `<p>&copy; ${currentYear} Bill Futreal. All rights reserved.</p>`;
        document.body.appendChild(footer);
    }
});
