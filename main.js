const snackbar = document.getElementById('snackbar');
const loginForm = document.getElementById('login-form');
const btnLogin = document.getElementById('btn-login');
const btnInfo = document.getElementById('btn-info');
const btnBack = document.getElementById('btn-back');
const btnLogout = document.getElementById('btn-logout');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('Service Worker registrado com sucesso.'))
      .catch(error => console.error('Falha ao registrar Service Worker:', error));
  });
}

// Botão "Entrar" na landing page - Direciona para login
if (btnLogin) {
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
  });
}

// Botão "Saiba Mais" na landing page
if (btnInfo) {
  btnInfo.addEventListener('click', () => {
    showSnackbar('Plênio é sua solução educacional completa!');
  });
}

// Botão "Voltar" na página de login - Retorna à landing page
if (btnBack) {
  btnBack.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'landing.html';
  });
}

// Botão "Sair" no dashboard - Retorna à landing page
if (btnLogout) {
  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('userRM');
    window.location.href = 'landing.html';
  });
}

// Formulário de login
if (loginForm) {
  loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const rm = document.getElementById('rm').value;
    const senha = document.getElementById('senha').value;
    
    if (rm === '24850' && senha === '123456') {
      // Armazenar RM do usuário
      localStorage.setItem('userRM', rm);
      showSnackbar('Login realizado com sucesso!');
      // Redirecionar para dashboard após 1.5 segundos
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    } else {
      showSnackbar('RM ou senha incorretos.');
    }
  });
}

function showSnackbar(message) {
  if (!snackbar) return;
  snackbar.textContent = message;
  snackbar.classList.add('visible');
  window.setTimeout(() => snackbar.classList.remove('visible'), 3200);
}
