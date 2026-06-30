# 🍔 DevBurger API

API REST completa para um sistema de delivery de hamburgueria, desenvolvida com Node.js e Express, utilizando **PostgreSQL** para dados relacionais (usuários, produtos, categorias) e **MongoDB** para os pedidos. Conta com autenticação via JWT, controle de permissões de administrador, upload de imagens e validação de dados com Yup.

---

## 🚀 Funcionalidades

- ✅ Cadastro e autenticação de usuários (JWT)
- ✅ Controle de acesso por permissão de administrador
- ✅ CRUD de produtos com upload de imagem
- ✅ CRUD de categorias com upload de imagem
- ✅ Criação de pedidos com múltiplos produtos e quantidades
- ✅ Atualização de status do pedido (ex: "Em preparo", "Saiu para entrega")
- ✅ Banco relacional (PostgreSQL) para dados estruturados
- ✅ Banco não-relacional (MongoDB) para pedidos

---

## 🛠️ Tecnologias Utilizadas

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

| Tecnologia | Descrição |
| --- | --- |
| [Node.js](https://nodejs.org/) | Ambiente de execução JavaScript |
| [Express 5](https://expressjs.com/) | Framework para criação da API |
| [Sequelize](https://sequelize.org/) | ORM para comunicação com o PostgreSQL |
| [PostgreSQL](https://www.postgresql.org/) | Banco de dados relacional (usuários, produtos, categorias) |
| [Mongoose](https://mongoosejs.com/) | ODM para comunicação com o MongoDB |
| [MongoDB](https://www.mongodb.com/) | Banco de dados não-relacional (pedidos) |
| [JWT (jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken) | Autenticação baseada em token |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | Criptografia de senhas |
| [Multer](https://www.npmjs.com/package/multer) | Upload de arquivos/imagens |
| [Yup](https://www.npmjs.com/package/yup) | Validação de dados de entrada |
| [uuid](https://www.npmjs.com/package/uuid) | Geração de identificadores únicos |
| [dotenv](https://www.npmjs.com/package/dotenv) | Gerenciamento de variáveis de ambiente |
| [Docker](https://www.docker.com/) | Containerização dos bancos de dados |

---

## 📁 Estrutura do Projeto

```
├── src/
│   ├── app/
│   │   ├── controllers/
│   │   │   ├── UserController.js
│   │   │   ├── SessionController.js
│   │   │   ├── ProductController.js
│   │   │   ├── CategoryController.js
│   │   │   └── OrderController.js
│   │   ├── middlewares/
│   │   │   ├── auth.js
│   │   │   └── admin.js
│   │   └── models/
│   │       ├── User.js
│   │       ├── Product.js
│   │       └── Category.js
│   ├── config/
│   │   ├── database.cjs
│   │   ├── auth.js
│   │   └── multer.cjs
│   ├── database/
│   │   └── index.js
│   ├── schemas/
│   │   └── Order.js
│   ├── app.js
│   ├── routes.js
│   └── server.js
├── .env
├── .gitignore
└── package.json
```

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Docker](https://www.docker.com/) instalado (para rodar PostgreSQL e MongoDB)
- Gerenciador de pacotes **pnpm**

### 1. Clone o repositório

```bash
git clone https://github.com/GiulianoMarrocco/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
APP_SECRET=sua-chave-secreta-jwt
```

### 4. Suba os bancos de dados com Docker

```bash
docker run --name devburger-postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=dev-burger-db -p 5432:5432 -d postgres

docker run --name devburger-mongo -p 27017:27017 -d mongo
```

### 5. Rode as migrations do Sequelize

```bash
npx sequelize-cli db:migrate
```

### 6. Inicie o servidor

```bash
pnpm dev
```

O servidor estará disponível em `http://localhost:3001`

---

## 🔗 Endpoints da API

### Autenticação

| Método | Rota | Descrição | Acesso |
| --- | --- | --- | --- |
| `POST` | `/users` | Cadastra um novo usuário | Público |
| `POST` | `/sessions` | Realiza login e retorna o token JWT | Público |

> ⚠️ Todas as rotas abaixo exigem o header `Authorization: Bearer <token>`.

### Produtos

| Método | Rota | Descrição | Acesso |
| --- | --- | --- | --- |
| `GET` | `/products` | Lista todos os produtos | Autenticado |
| `POST` | `/products` | Cadastra um novo produto (com upload de imagem) | Admin |
| `PUT` | `/products/:id` | Atualiza um produto existente | Admin |

### Categorias

| Método | Rota | Descrição | Acesso |
| --- | --- | --- | --- |
| `GET` | `/category` | Lista todas as categorias | Autenticado |
| `POST` | `/category` | Cadastra uma nova categoria (com upload de imagem) | Admin |
| `PUT` | `/category/:id` | Atualiza uma categoria existente | Admin |

### Pedidos

| Método | Rota | Descrição | Acesso |
| --- | --- | --- | --- |
| `GET` | `/orders` | Lista todos os pedidos | Autenticado |
| `POST` | `/orders` | Cria um novo pedido | Admin |
| `PUT` | `/orders/:id` | Atualiza o status de um pedido | Admin |

### Exemplo de corpo (POST /users)

```json
{
  "name": "Henrique",
  "email": "henrique@email.com",
  "password": "123456"
}
```

### Exemplo de corpo (POST /orders)

```json
{
  "products": [
    { "id": 1, "quantity": 2 },
    { "id": 4, "quantity": 1 }
  ]
}
```

---

## 👨‍💻 Sobre o Projeto

Este projeto foi desenvolvido como parte da minha jornada de transição de carreira para a área de tecnologia. Foi meu primeiro projeto utilizando dois bancos de dados diferentes na mesma aplicação (PostgreSQL e MongoDB), além de autenticação JWT, controle de permissões e upload de arquivos. O desenvolvimento trouxe aprendizados práticos sobre relacionamento entre tabelas, modelagem de documentos NoSQL e organização de uma API REST em camadas (controllers, models, middlewares).

---

## 📝 Licença

Este projeto está sob a licença MIT.
