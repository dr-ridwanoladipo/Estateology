// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked (especially useful for mobile)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
            navMenu.classList.remove('nav-menu--active');
        });
    });

    // View our properties button
    const viewPropertiesBtn = document.querySelector('.header__btn');
    viewPropertiesBtn.addEventListener('click', function() {
        document.getElementById('homes').scrollIntoView({ behavior: 'smooth' });
    });

    // Contact realtor buttons
    const contactRealtorBtns = document.querySelectorAll('.home__btn');
    contactRealtorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const houseName = this.closest('.home').querySelector('.home__name').textContent;
            alert(`Contacting realtor about: ${houseName}`);
        });
    });

    // Find your own home button
    const findHomeBtn = document.querySelector('.story__content .btn');
    findHomeBtn.addEventListener('click', function() {
        document.getElementById('homes').scrollIntoView({ behavior: 'smooth' });
    });

    // Like buttons (heart icons)
    const likeButtons = document.querySelectorAll('.home__like');
    likeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('home__like--active');
            const houseName = this.closest('.home').querySelector('.home__name').textContent;
            if (this.classList.contains('home__like--active')) {
                alert(`Added ${houseName} to your favorites!`);
            } else {
                alert(`Removed ${houseName} from your favorites.`);
            }
        });
    });
});