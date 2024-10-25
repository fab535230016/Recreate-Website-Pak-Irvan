document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarOverlay = document.getElementById('navbarOverlay');

    navbarToggler.addEventListener('click', function () {
        navbarOverlay.classList.toggle('show');
    });

    navbarOverlay.addEventListener('click', function () {
        navbarOverlay.classList.remove('show');
        document.getElementById('navbarNav').classList.remove('show');
    });
});
