# Plênio PWA

Aplicativo Progressive Web App (PWA) educacional com sistema de login e dashboard.

## 🚀 Características

- **Landing Page**: Tela inicial com apresentação do app
- **Sistema de Login**: Autenticação com RM e senha
- **Dashboard**: Painel de boas-vindas após login
- **PWA**: Instalável no PC e dispositivos móveis
- **Offline**: Funciona offline com Service Worker
- **Responsivo**: Design adaptado para todos os tamanhos de tela

## 📁 Estrutura do Projeto

```
siteOn/
├── landing.html      # Tela inicial
├── index.html        # Página de login
├── dashboard.html    # Dashboard após login
├── main.js          # Lógica da aplicação
├── styles.css       # Estilos CSS
├── sw.js            # Service Worker
├── manifest.json    # Configuração PWA
├── README.md        # Este arquivo
├── .gitignore       # Configurações do Git
└── icons/           # Ícones da aplicação
```

## 🔐 Credenciais de Teste

- **RM**: 24850
- **Senha**: 123456

## 💻 Como Usar

1. Abra `landing.html` em um servidor local ou GitHub Pages
2. Clique em "Entrar" para ir para a página de login
3. Digite as credenciais de teste
4. Você será redirecionado para o dashboard

## 🌐 Deploy no GitHub Pages

1. Faça push do projeto para o GitHub
2. Vá em **Settings** > **Pages**
3. Selecione a branch `main` ou `master` e a pasta raiz
4. O site estará disponível em `https://seu-usuario.github.io/seu-repositorio`

## 📝 Notas

- O app funciona offline após a primeira visita
- Os ícones estão em `icons/icon.svg`
- Todos os arquivos devem estar rastreados pelo Git

## 👨‍💻 Desenvolvido com

- HTML5
- CSS3
- JavaScript (Vanilla)
- Service Workers

## 📄 Licença

MIT
