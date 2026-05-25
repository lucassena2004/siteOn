const snackbar = document.getElementById('snackbar');
const loginForm = document.getElementById('login-form');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('Service Worker registrado com sucesso.'))
      .catch(error => console.error('Falha ao registrar Service Worker:', error));
  });
}


loginForm?.addEventListener('submit', event => {
  event.preventDefault();
  const rm = document.getElementById('rm').value;
  const senha = document.getElementById('senha').value;
  if (rm === '24850' && senha === '123456') {
    showSnackbar('Login realizado com sucesso!');
  } else {
    showSnackbar('RM ou senha incorretos.');
  }
});

function showSnackbar(message) {
  if (!snackbar) return;
  snackbar.textContent = message;
  snackbar.classList.add('visible');
  window.setTimeout(() => snackbar.classList.remove('visible'), 3200);
}
