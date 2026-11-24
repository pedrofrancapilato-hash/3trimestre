document.addEventListener("DOMContentLoaded", () => {
    const jogo = document.getElementById("jogo-frame");
    const botao = document.getElementById("botao-tela-cheia");

    if (!jogo || !botao) {
        console.error("Não foi encontrado o jogo ou o botão de tela cheia.");
        return;
    }

    botao.addEventListener("click", async () => {
        try {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
            } else {
                await jogo.requestFullscreen();
            }
        } catch (erro) {
            console.error("Erro ao alternar tela cheia:", erro);
            alert("Não foi possível ativar a tela cheia. Tente novamente.");
        }
    });

    document.addEventListener("fullscreenchange", () => {
        botao.textContent = document.fullscreenElement
            ? "Sair da tela cheia (Esc)"
            : "⛶ Tela cheia";
    });
});


const elementos = document.querySelectorAll('.animar');

// Esconde os elementos inicialmente via JS
elementos.forEach((el) => {
  el.style.opacity = '0';
});

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      
      // Executa a animação direto pelo JavaScript
      entrada.target.animate([
        { opacity: 0, transform: 'translateY(40px)' }, // Começo
        { opacity: 1, transform: 'translateY(0)' }     // Fim
      ], {
        duration: 600,      // Duração em milissegundos (0.6s)
        easing: 'ease-out', // Suavização
        fill: 'forwards'    // Mantém o estado final após terminar
      });

      // Para de observar para não repetir a animação
      observador.unobserve(entrada.target);
    }
  });
}, {
  threshold: 0.1 // Ativa quando 10% do elemento aparece na tela
});

// Inicia a observação
elementos.forEach((el) => observador.observe(el));

