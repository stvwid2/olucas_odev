// Aguarda o site carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleciona o ícone do chat
    const chatIcon = document.querySelector('.chat-icon');
    const chatBubble = document.querySelector('.chat-bubble');

    // 2. Adiciona a execução (o "clique")
    chatIcon.addEventListener('click', () => {
        alert("Olá Olucas! O Chatbot está a ser iniciado...");
        // Aqui podes depois colocar o link para o teu WhatsApp
        window.location.href = "https://wa.me/teunumeroaqui";
    });

    // 3. Efeito simples nos cards do portfólio
    const cards = document.querySelectorAll('.card-job');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log("Usuário interessado neste projeto!");
        });
    });
});
