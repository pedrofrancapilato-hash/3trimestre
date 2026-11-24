const elementos = document.querySelectorAll(
  'header, ul, .banner1, .estudante_titulo, .estudante-div, .secao-video, .secao-mapa, .secao-jogo, footer'
);


elementos.forEach((el) => {
  el.style.opacity = '0';
});

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      

      entrada.target.animate([
        { opacity: 0, transform: 'translateY(30px)' }, 
        { opacity: 1, transform: 'translateY(0)' }    
      ], {
        duration: 900, 
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)', 
        fill: 'forwards'
      });

      observador.unobserve(entrada.target);
    }
  });
}, {
  threshold: 0.1 
});

elementos.forEach((el) => observador.observe(el));

const btnTelaCheia = document.getElementById('botao-tela-cheia');
const iframeJogo = document.getElementById('jogo-frame');

if (btnTelaCheia && iframeJogo) {
  btnTelaCheia.addEventListener('click', () => {
    if (iframeJogo.requestFullscreen) {
      iframeJogo.requestFullscreen();
    }
  });
}