/**
 * Olucas Especialista - Sistema de Automação e Chatbot
 * Localização: Belo Horizonte, MG
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initChatBot();
});

// ============================================================
// 1. LÓGICA DO CHATBOT EM TEMPO REAL
// ============================================================
const chatData = { nome: '', servico: '' };

function initChatBot() {
    const chatContainer = document.getElementById('chatMessages');
    if (!chatContainer) return;

    // Mensagem inicial após 1.5s
    setTimeout(() => {
        addMessage("Olá! Sou o assistente do Olucas. Com quem falo?", 'bot');
    }, 1500);
}

function addMessage(text, side) {
    const container = document.getElementById('chatMessages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-bubble ${side === 'bot' ? 'chat-bubble-bot' : 'chat-bubble-user'}`;
    msgDiv.innerText = text;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

// Esta função será chamada quando o usuário clicar nas opções do chat no HTML
window.handleChatChoice = function(choice) {
    addMessage(choice, 'user');

    if (!chatData.nome) {
        chatData.nome = choice; // Na primeira interação, assume-se que é o nome ou clique inicial
        addMessage(`Prazer! Olucas está em BH/MG, mas atende o mundo todo. Qual serviço você busca?`, 'bot');
    } else {
        chatData.servico = choice;
        addMessage("Excelente! Gerando seu orçamento VIP e te levando ao WhatsApp...", 'bot');
        
        setTimeout(() => {
            const numeroZap = "5531972114553";
            const mensagemFinal = encodeURIComponent(
                `Olá Olucas! Vi seu portfólio (RCswim/Lojas). Meu nome é ${chatData.nome} e preciso de: ${chatData.servico}.`
            );
            window.open(`https://wa.me/${numeroZap}?text=${mensagemFinal}`, '_blank');
        }, 1500);
    }
}

// ============================================================
// 2. EFEITOS DE REVELAÇÃO (SCROLL REVEAL)
// ============================================================
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    // Seleciona cards de portfólio, serviços e títulos
    const elements = document.querySelectorAll('.card-job, .section-title, .portfolio-item, .hero-content');
    elements.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
}

// ============================================================
// 3. LOG DE PERFORMANCE
// ============================================================
console.log("🚀 Olucas Especialista - Engine Ativada (BH/MG)");
