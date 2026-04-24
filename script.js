// Iniciar Animações de Scroll
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true
    });

    // Lógica do Formulário
    const form = document.getElementById('form-contato');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Proposta enviada! Olucas entrará em contato em breve.");
    });

    // Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
