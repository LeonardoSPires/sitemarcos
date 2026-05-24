// Caminho base (vazio para local, '/sitemarcos/' para GitHub Pages)
const BASE_PATH = '/';

// Função para incluir partials
function includePartial(selector, url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${url}`);
            }
            return response.text();
        })
        .then(data => {
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = data;
                if (callback) callback();
            }
        })
        .catch(error => console.error(error));
}

document.addEventListener('DOMContentLoaded', function () {

    includePartial('#header', `${BASE_PATH}src/partials/header.html`, function () {
        const menuToggle = document.getElementById('menu-toggle');
        const nav = document.getElementById('nav');

        if (menuToggle && nav) {
            menuToggle.addEventListener('click', function () {
                nav.classList.toggle('active');
                menuToggle.classList.toggle('active');

                // Acessibilidade
                const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', !expanded);
            });

            // Fecha o menu ao clicar em um link
            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    nav.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    });

    includePartial('#footer', `${BASE_PATH}src/partials/footer.html`);
});