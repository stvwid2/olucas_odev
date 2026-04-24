document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMAÇÕES DE SCROLL (Intersection Observer)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

    // 2. SCROLL SUAVE
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 3. LOG DE INICIALIZAÇÃO
    console.log("🚀 Olucas Especialista - Engine v2 Ativada em BH/MG");
});
