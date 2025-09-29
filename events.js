document.addEventListener('DOMContentLoaded', () => {

    // Light/Dark Mode Toggle Functie
const themeToggleBtn = document.getElementById('theme-toggle-btn');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        // Schakelt de 'dark-theme' klasse op het <body> element om de CSS te activeren
        document.body.classList.toggle('dark-theme');
    });
}
    
    // Selecteer alle elementen die de "fade-in" animatie moeten krijgen
    const fadeElements = document.querySelectorAll('.fade-in-element');

    // Opties voor de Intersection Observer API
    const observerOptions = {
        root: null, // 'null' betekent dat de viewport als referentie wordt gebruikt
        rootMargin: '0px',
        threshold: 0.1 // Start de animatie als 10% van het element zichtbaar is
    };

    // Maak een nieuwe "observer" die kijkt wanneer elementen in beeld komen
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Controleer of het element de viewport binnenkomt
            if (entry.isIntersecting) {
                // Voeg de 'is-visible' class toe om de CSS-animatie te triggeren
                entry.target.classList.add('is-visible');
                // Stop met het observeren van dit element nadat de animatie is geactiveerd
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Laat de observer elk geselecteerd fade-element in de gaten houden
    fadeElements.forEach(el => {
        observer.observe(el);
    });

});