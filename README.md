NodeJS API

API feita em NodeJS com autenticação utilizando JWT.

Antes de iniciar o projeto, execute o comando abaixo para baixar as dependências.

```
npm install
```

Depois, crie um arquivo na raíz do projeto chamado .env e utilize o arquivo .env.example para copiar as variáveis de ambiente necessárias (altere para as suas credenciais do mongoDB e crie um token)

```
USER_DB=
PASS_DB=
TOKEN_SECRET=
```

Realizando um registro na rota /api/user/register

![image](https://user-images.githubusercontent.com/48020987/179631639-21ab5387-907b-425f-9b45-15f0775e733a.png)

Acessando a rota /api/posts sem informar o JWT no header

![image](https://user-images.githubusercontent.com/48020987/179631908-97961acb-edfc-40d0-a3af-1b6043275c7a.png)

Acessando a rota api/user/login com email e senha válida para gerar o JWT

![image](https://user-images.githubusercontent.com/48020987/179632007-27e6efd1-57ee-4b91-ae15-aed6854c717e.png)

Inserindo o JWT no header **auth-token** e fazendo a requisição para a rota /api/posts

![image](https://user-images.githubusercontent.com/48020987/179632105-f7643212-f8ca-457d-8e9e-161c085cf774.png)

![image](https://user-images.githubusercontent.com/48020987/179632177-a57a0800-6f64-426a-8e61-de25431b4637.png)


