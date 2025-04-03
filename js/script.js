document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLink = document.querySelector('.nav-link');

    menuToggle.addEventListener('click', function() {
        navLink.classList.toggle('active');
    });


});

function setFavicon(url) {
    let link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png"; // Adjust the type based on your favicon file
    link.href = url;

    // Remove any existing favicon
    let existingFavicon = document.querySelector("link[rel='icon']");
    if (existingFavicon) {
        document.head.removeChild(existingFavicon);
    }

    document.head.appendChild(link);
}

// Set favicon on page load
window.onload = function() {
    setFavicon("images/quill.png"); // Update with the actual path to your favicon
};