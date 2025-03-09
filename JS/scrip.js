// Código de desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Desplazamiento suave con animación
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
