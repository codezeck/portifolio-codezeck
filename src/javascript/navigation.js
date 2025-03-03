/* função botão mobile */
function btnMenu() {
  const nav = document.querySelector('.tab-buttons');
  nav.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.tab-buttons');
  button.addEventListener('click', (event) => {
      if (event.target === button || button.contains(event.target)) {
          btnMenu();
      }
  });
});

/* função navegação */

function setActive(button) {

  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  button.classList.add('active');

  document.querySelectorAll('.hidden-content').forEach(content => content.style.display = 'none');

  const contentId = button.getAttribute('content-id');
  const contentDiv = document.getElementById(contentId);
  if (contentDiv) {
      contentDiv.style.display = 'flex';
  }
}

document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', function() {
      setActive(this);
  });
});

document.getElementById('home').style.display = 'flex';

/* animações */

