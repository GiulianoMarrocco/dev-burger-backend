# 🍔 DevBurger API

<div align="center">

# API REST para Sistema de Delivery

API desenvolvida com **Node.js**, **Express**, **PostgreSQL** e **MongoDB**, oferecendo autenticação JWT, gerenciamento de produtos, categorias, usuários e pedidos.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

</div>

---

# 📸 Demonstração

> **Em breve:** GIF da aplicação completa e screenshots do painel administrativo e do frontend.

---

# 📑 Índice

- Sobre
- Funcionalidades
- Tecnologias
- Arquitetura
- Estrutura do Projeto
- Instalação
- Endpoints
- Exemplos
- Roadmap
- Autor
- Licença

---

# 🚀 Funcionalidades

- ✅ Cadastro de usuários
- ✅ Login com JWT
- ✅ Controle de acesso por administrador
- ✅ CRUD de Produtos
- ✅ CRUD de Categorias
- ✅ Upload de imagens
- ✅ Criação de pedidos
- ✅ Atualização de status dos pedidos
- ✅ PostgreSQL para dados relacionais
- ✅ MongoDB para pedidos

---

# ⭐ Diferenciais

- Arquitetura em camadas
- API REST
- Autenticação JWT
- Upload de imagens
- Validação com Yup
- Criptografia com bcrypt
- Organização escalável
- Docker para bancos de dados
- Código versionado com Git e GitHub

---

# 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| Node.js | Ambiente de execução JavaScript |
| Express | Framework da API |
| Sequelize | ORM do PostgreSQL |
| PostgreSQL | Banco relacional |
| Mongoose | ODM para MongoDB |
| MongoDB | Banco NoSQL para pedidos |
| JWT | Autenticação |
| bcrypt | Criptografia |
| Multer | Upload de imagens |
| Yup | Validação |
| UUID | Identificadores únicos |
| dotenv | Variáveis de ambiente |
| Docker | Containerização |
| Git / GitHub | Versionamento |

---

# 🏗️ Arquitetura

```text
Cliente
   │
HTTP
   │
Express
   │
Routes
   │
Controllers
   │
Models
   │
 ├── PostgreSQL
 └── MongoDB
```

---

# 📁 Estrutura do Projeto

```text
src/
├── app/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
├── config/
├── database/
├── schemas/
├── routes.js
├── app.js
└── server.js
```

---

# ⚙️ Como Executar

## Pré-requisitos

- Node.js
- Docker
- pnpm

## Clone

```bash
git clone https://github.com/GiulianoMarrocco/dev-burger-backend.git
cd dev-burger-backend
```

## Instale

```bash
pnpm install
```

## Configure o .env

```env
APP_SECRET=sua-chave-secreta-jwt
```

## Suba os bancos

```bash
docker run --name devburger-postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=dev-burger-db -p 5432:5432 -d postgres

docker run --name devburger-mongo -p 27017:27017 -d mongo
```

## Execute as migrations

```bash
npx sequelize-cli db:migrate
```

## Execute

```bash
pnpm dev
```

A API ficará disponível em:

`http://localhost:3001`

---

# 🔐 Fluxo de Autenticação

```text
Login
   ↓
JWT
   ↓
Bearer Token
   ↓
Rotas Protegidas
```

---

# 📚 Endpoints

## Usuários

| Método | Endpoint |
|--------|----------|
| POST | /users |

## Login

| Método | Endpoint |
|--------|----------|
| POST | /sessions |

## Produtos

- GET /products
- POST /products
- PUT /products/:id

## Categorias

- GET /category
- POST /category
- PUT /category/:id

## Pedidos

- GET /orders
- POST /orders
- PUT /orders/:id

---

# 📦 Exemplos

## Cadastro

```json
{
  "name":"Henrique",
  "email":"henrique@email.com",
  "password":"123456"
}
```

## Pedido

```json
{
  "products":[
    {"id":1,"quantity":2},
    {"id":4,"quantity":1}
  ]
}
```

---

# 🗺️ Roadmap

- ✅ Cadastro de usuários
- ✅ Login JWT
- ✅ Produtos
- ✅ Categorias
- ✅ Pedidos
- ⬜ Integração com pagamentos
- ⬜ Deploy
- ⬜ Swagger
- ⬜ Testes automatizados

---

# 👨‍💻 Sobre o Projeto

Este projeto foi desenvolvido durante minha transição de carreira para o desenvolvimento Full Stack. O objetivo foi aplicar conceitos de APIs REST, autenticação JWT, upload de arquivos, integração entre bancos de dados relacionais e NoSQL, organização em camadas e boas práticas de desenvolvimento.

---

# 👨‍💻 Autor

**Giuliano Marrocco**

- GitHub: https://github.com/GiulianoMarrocco
- LinkedIn: https://www.linkedin.com/in/giulianomarrocco

---

# 📝 Licença

Este projeto está licenciado sob a licença MIT.
