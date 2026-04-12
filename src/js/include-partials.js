// Inclui header e footer automaticamente
function includePartial(selector, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = data;
                if (callback) callback();
            } else {
                console.warn(`Elemento ${selector} não encontrado.`);
            }
        })
        .catch(error => console.error('Erro ao carregar partial:', error));
}

document.addEventListener('DOMContentLoaded', function () {

    includePartial('#header', '/src/partials/header.html', function () {
        const menuToggle = document.getElementById('menu-toggle');
        const nav = document.getElementById('nav');

        if (menuToggle && nav) {
            menuToggle.addEventListener('click', function () {
                // Abre/fecha o menu
                nav.classList.toggle('active');

                // Faz o hambúrguer virar um "X"
                menuToggle.classList.toggle('active');

                // Acessibilidade
                const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', !expanded);
            });

            // Fecha o menu ao clicar em um link
            const links = nav.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    nav.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    });

    includePartial('#footer', '/src/partials/footer.html');
});