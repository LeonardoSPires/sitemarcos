document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll para links com âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      // Pula o link vazio
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.querySelector("input[type='text']").value;
      const telefone = document.querySelector("input[type='tel']").value;
      const mensagem = document.querySelector("textarea").value;

      const numero = "5521974708402";

      const texto = encodeURIComponent(
        `Olá! Vim pelo site da MP Reformas.\n\n` +
        `Nome: ${nome}\n` +
        `Telefone: ${telefone}\n` +
        `Serviço: ${mensagem}`
      );

      window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
    });
  }
});