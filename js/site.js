/* Instituto Fliegen — interações do site (menu, cabeçalho, animações de entrada) */
(function () {
  'use strict';
  var topo = document.getElementById('topo');
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('menu-principal');

  // Menu do celular
  function fechar() {
    nav.classList.remove('aberto');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Abrir menu');
    btn.querySelector('use').setAttribute('href', '#i-menu');
  }
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var abrir = !nav.classList.contains('aberto');
      nav.classList.toggle('aberto', abrir);
      btn.setAttribute('aria-expanded', String(abrir));
      btn.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
      btn.querySelector('use').setAttribute('href', abrir ? '#i-fechar' : '#i-menu');
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) fechar(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });
  }

  // Sombra no cabeçalho ao rolar
  function aoRolar() { if (topo) topo.classList.toggle('rolou', window.scrollY > 8); }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  // Animação de entrada
  var itens = document.querySelectorAll('.revelar');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visivel'); obs.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    itens.forEach(function (el) { obs.observe(el); });
  } else {
    itens.forEach(function (el) { el.classList.add('visivel'); });
  }

  // Ano no rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
