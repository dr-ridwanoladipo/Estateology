document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const sidebar = document.querySelector('.sidebar');

    // Function to handle sticky sidebar
    function handleStickySidebar() {
        if (window.innerWidth <= 1000) { // Adjust this value to match your $bp-large
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > 0) {
                sidebar.classList.add('sticky');
            } else {
                sidebar.classList.remove('sticky');
            }
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleStickySidebar);
    window.addEventListener('resize', handleStickySidebar);

    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked (especially useful for mobile)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const yOffset = -60; // Adjust this value based on your sidebar height
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // View our properties button
    const viewPropertiesBtn = document.querySelector('.header__btn');
    if (viewPropertiesBtn) {
        viewPropertiesBtn.addEventListener('click', function() {
            document.getElementById('homes').scrollIntoView({ behavior: 'smooth' });
        });
    }

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
    if (findHomeBtn) {
        findHomeBtn.addEventListener('click', function() {
            document.getElementById('homes').scrollIntoView({ behavior: 'smooth' });
        });
    }

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

    // Initial call to set up the sidebar state
    handleStickySidebar();
});