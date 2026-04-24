/**
 * script.js - Funções de Interface e UX
 * Focado em Belo Horizonte, MG
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. SCROLL SUAVE PARA LINKS INTERNOS
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href');
            const target = document.querySelector(id);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Ajuste para a navbar fixa
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. NAVBAR DINÂMICA (MUDA DE COR AO FAZER SCROLL)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // 3. LOG DE AUTORIDADE NO CONSOLE
    console.log("%c🚀 Olucas Especialista - Engine Ativada", "color: #00ff7f; font-size: 20px; font-weight: bold;");
    console.log("Desenvolvendo soluções de alta conversão em MG.");
});
