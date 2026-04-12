document.addEventListener("DOMContentLoaded", function () {
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