document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem('cookieConsent')) {
        const cookieModal = document.getElementById('cookie-consent-modal');
        cookieModal.style.display = 'block';

        document.getElementById('accept-cookies').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieModal.style.display = 'none';
            // Cargar cookies no esenciales
        });

        document.getElementById('reject-cookies').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'rejected');
            cookieModal.style.display = 'none';
            // No cargar cookies no esenciales
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const headerAbajo = document.querySelector('.header-abajo');

    hamburger.addEventListener('click', function() {
        headerAbajo.classList.toggle('active');
    });
});

