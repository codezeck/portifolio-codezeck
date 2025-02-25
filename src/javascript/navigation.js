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

function setActive(button) {
    // Remove a classe 'active' de todos os botões
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });

    // Adiciona a classe 'active' ao botão clicado
    button.classList.add('active');

    // Esconde todos os conteúdos
    const contents = document.querySelectorAll('.hidden-content');
    contents.forEach(content => {
      content.style.display = 'none';
    });

    // Mostra o conteúdo correspondente ao botão clicado
    const contentId = button.getAttribute('content-id');
    const contentDiv = document.getElementById(contentId);
    if (contentDiv) {
      contentDiv.style.display = 'flex';
    }
  }

  // Adiciona o evento de clique a todos os botões com a classe 'tab-btn'
  document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
      setActive(this);
    });
  });

  // Mostra o conteúdo 'Home' por padrão
  document.getElementById('home').style.display = 'flex';



/* animações */

