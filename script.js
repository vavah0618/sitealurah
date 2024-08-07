// Código para o menu fixo
window.onscroll = function () {
    stickyHeader();
    scrollFunction();
};

// Obtém o cabeçalho e o botão de rolagem
const header = document.querySelector('header');
const topButton = document.querySelector('#topBtn');

// Adiciona ou remove a classe sticky ao cabeçalho quando o usuário rola a página
function stickyHeader() {
    if (window.pageYOffset > header.offsetHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Mostra o botão "Voltar ao Topo" quando o usuário rola para baixo
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
}

// Leva o usuário ao topo da página quando o botão é clicado
document.querySelector('#topBtn').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
