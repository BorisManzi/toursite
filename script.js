document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Toggle the mobile navigation menu
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // Toggle icon between bars and times (close)
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close the menu when a link is clicked (useful for single-page layout)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // --- Potential Future JavaScript Enhancements (Conceptual) ---

    /* // 1. Simple Form Validation for the Search
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', function(e) {
        const destination = this.querySelector('input[type="text"]').value;
        if (destination.length < 3) {
            e.preventDefault();
            alert("Please enter a valid destination.");
        }
    });
    */

    /*
    // 2. Simple Scroll-to-Top Button (CSS/HTML would need a button element)
    window.addEventListener('scroll', function() {
        const scrollTopBtn = document.getElementById('scroll-top');
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    */
});