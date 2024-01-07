<h1 align="center">Teddy Single-Spa</h1>

<h3>Descrição:</h3>
<p>Plataforma desenvolvida com React, Angular e Single-Spa para gestão de parceiros e empresas externas.</p>

<h3>Rodar o projeto:</h3>

```bash
# Clone o repositório
$ git clone https://github.com/edusdorneles/teddy-single-spa.git
# Acesse a pasta do projeto no terminal
$ cd teddy-single-spa
# Acesse a pasta root
$ cd root
# Instale as dependências
$ yarn
# Inicie o projeto
$ yarn start
# O servidor iniciará na porta: 9000. Acesse http://localhost:9000/
```

<h3>Rodar o projeto - Time LOGIN:</h3>

```bash
# Acesse a pasta app-login
$ cd app-login
# Instale as dependências
$ yarn
# Inicie o projeto
$ yarn serve
# O servidor iniciará na porta: 9001. Acesse http://localhost:9000/login
```

<h3>Rodar o projeto - Time DASHBOARD:</h3>

```bash
# Acesse a pasta app-login
$ cd app-dashboard
# Instale as dependências
$ yarn
# Inicie o projeto
$ yarn start
# O servidor iniciará na porta: 9002. Acesse http://localhost:9000/dashboard
```

<p>Caso você não queira instalar a aplicação de login:</p>

```bash
# No seu navegador, acesse http://localhost:9000 e abra o inspecionar
# Acesse a aba "Applicação"
# Adicione um usuário aos cookies
$ document.cookie = "@teddy/user-name=DASHBOARD";
# Acesse http://localhost:9000/dashboard
```

<h3>Pendências:</h3>
<ul>
    <li>Responsividade (Meio dia para finalizar).</li>
    <li>Adicionar testes unitários (Meio dia para finalizar).</li>
    <li>Containerizar o projeto (1 dia para finalizar).</li>
    <li>Fazer deploy na Vercel (2 dia para finalizar).</li>
</ul>

<h3>Autor:</h3>
<img src="https://avatars.githubusercontent.com/dududornelees" height="100" />

Made with 💙 by Eduardo Dorneles 👋.

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dududornelees/) [![Website Badge](https://img.shields.io/badge/website-14141C?style=for-the-badge&logo=About.me&logoColor=white)](https://dududornelees.com.br/)
