<h1 align="center">Teddy Single-Spa</h1>

<h2>Descrição:</h2>
<p>Plataforma desenvolvida com React, Angular e Single-Spa para gestão de parceiros e empresas externas.</p>

<h2>Rodar o projeto:</h2>

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

<h2>Rodar o projeto - Time LOGIN:</h2>

```bash
# Acesse a pasta app-login
$ cd app-login
# Instale as dependências
$ yarn
# Inicie o projeto
$ yarn serve
# O servidor iniciará na porta: 9001. Acesse http://localhost:9000/login
```

<h2>Rodar o projeto - Time DASHBOARD:</h2>

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
