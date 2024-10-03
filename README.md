# Fastify Product API

Esta é uma API RESTful simples desenvolvida com **Fastify**, **MongoDB**, e **Docker**, seguindo os princípios de **Clean Architecture**, **SOLID**, e **Clean Code**. A API permite listar, buscar e adicionar produtos, com ênfase em performance, cobertura de testes e tratamento de erros.

## Funcionalidades

- Listagem de até 40 produtos
- Busca de produtos por nome ou descrição
- Adição de produtos ao banco de dados
- Documentação via Swagger

## Tecnologias Utilizadas

- **Node.js** com **Fastify**
- **MongoDB** para persistência de dados
- **Swagger** para documentação da API
- **Docker** e **Docker Compose** para orquestração de serviços
- **Jest** e **Supertest** para testes automatizados

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Como Rodar

### 1. Clonar o Repositório

### 2. Configurar Variáveis de Ambiente

Crie um arquivo .env no diretório raiz e adicione as seguintes variáveis:

env

MONGO_URL=mongodb://mongo:27017/mydb

### 3. Rodar com Docker Compose
Inicie os contêineres com o Docker Compose:

bash

docker-compose up --build
Isso irá levantar tanto o servidor da API quanto o MongoDB. A API estará disponível em http://localhost:3000.

### 4. Acessar a Documentação da API
A documentação da API, gerada via Swagger, pode ser acessada em:

bash

http://localhost:3000/docs

Endpoints

Listar Produtos
GET /products

Retorna até 40 produtos.

Resposta de Exemplo:



[
  {
    "name": "Produto 1",
    "description": "Descrição do Produto 1",
    "price": 50.99
  },
  ...
]
Buscar Produtos
GET /products/search/:query

Busca produtos por nome ou descrição.

Parâmetros:

query: Termo de busca (nome ou descrição)
Resposta de Exemplo:

json

[
  {
    "name": "Produto 1",
    "description": "Descrição do Produto 1",
    "price": 50.99
  }
]
Adicionar Produto
POST /products

Adiciona um novo produto ao banco de dados.

Body:

json

{
  "name": "Novo Produto",
  "description": "Descrição do novo produto",
  "price": 99.99
}
Resposta:

json

{
  "message": "Product added successfully"
}

Testes
O projeto possui cobertura de testes utilizando Jest e Supertest.

Rodar Testes
Para rodar os testes, utilize o comando:

npm test

Estrutura do Projeto
A estrutura do projeto segue os princípios de Clean Architecture:


/src 
├── /controllers      # Controladores que manipulam as requisições
├── /services         # Lógica de negócio (camada de aplicação)
├── /repositories     # Acesso aos dados (MongoDB)
├── /entities         # Definição das entidades de domínio
├── /routes           # Definição das rotas da API
├── /tests            # Testes automatizados
└── app.js            # Configuração e inicialização do Fastify

Como Popular o Banco de Dados

Ao iniciar a API, o banco de dados será automaticamente populado com 40 produtos de demonstração. Isso ocorre no script seed.js, que verifica se o banco já possui produtos e, caso contrário, insere os dados de exemplo.


