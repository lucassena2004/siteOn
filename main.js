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
  const email = document.getElementById('email')?.value || '';
  showSnackbar(`Bem-vindo, ${email}`);
});

function showSnackbar(message) {
  if (!snackbar) return;
  snackbar.textContent = message;
  snackbar.classList.add('visible');
  window.setTimeout(() => snackbar.classList.remove('visible'), 3200);
}
