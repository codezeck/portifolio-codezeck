/* função botão mobile */

function btnMenu() {
    console.log('clicou')
    const nav = document.querySelector('.tab-buttons');
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
    } else if (!nav.classList.contains('hidden')){
        nav.classList.add('hidden');
    }
}

/* função navegação */

// Função para alternar a visibilidade do menu
function btnMenu() {
    const nav = document.querySelector('.tab-buttons');
    nav.classList.toggle('hidden');
}

// Função para lidar com cliques nas abas de navegação
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.removeAttribute('id'));
    tab.id = 'active';

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('show');
        content.classList.add('hidden');
    });

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);
    
    if (content) {
        content.classList.remove('hidden');
        content.classList.add('show');
    } else {
        console.error(`Elemento com content-id "${contentId}" não encontrado.`);
    }

    console.log(content);
};

const currentActiveTab = document.querySelector('.tab-btn#active');
if (currentActiveTab) {
    tabClicked(currentActiveTab);
}



/* animações */

