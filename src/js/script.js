document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = document.querySelector("input[type='text']").value;
  let telefone = document.querySelector("input[type='tel']").value;
  let mensagem = document.querySelector("textarea").value;

  let texto = `Olá Marcos, vim pelo site.%0A%0A` +
              `Meu nome: ${nome}%0A` +
              `Telefone: ${telefone}%0A` +
              `Serviço: ${mensagem}`;

  let numero = "5521999999999"; // coloque o número aqui

  window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
});