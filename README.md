# API crud de tarefas usando Node.js, Express e MySQL

"Não é só inovando que mostra habilidade, mas sim dominando o clássico que prova capacidade."

# Descrição
API RESTful para gerenciamento de tarefas. Permite criar, listar, atualizar e deletar tarefas, com boas práticas de desenvolvimento, estrutura modularizada e conexão a banco de dados MySQL.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL
- Body-Parser
- CORS
- dotenv

## Como Executar o Projeto

1. **Clone o repositório:**

````
git clone https://github.com/seu-usuario/seu-repositorio.git
````

2. **Instale as dependências:**

````
npm install
````

3. **Configure as variáveis de ambiente:**

Copie o arquivo `.env.example` e crie seu próprio `.env`:

````
cp .env.example .env
````

Preencha as variáveis de ambiente com suas informações do banco de dados.

4. **Configure o Banco de Dados:**

Crie a tabela no seu banco MySQL:

````
CREATE TABLE tarefa (
  id_crud INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(50) NOT NULL,
  descricao TEXT NOT NULL
);
````

5. **Inicie o servidor:**

````
npm start
````

Servidor disponível em:  
````
http://localhost:3001
````

## Endpoints 

| Método | Rota                   | Descrição                   |
|--------|-------------------------|------------------------------|
| GET    | `/api/tarefa`            | Listar todas as tarefas      |
| GET    | `/api/tarefa/:id_crud`   | Buscar uma tarefa por ID     |
| POST   | `/api/tarefa`            | Criar uma nova tarefa        |
| PUT    | `/api/tarefa/:id_crud`   | Atualizar uma tarefa existente |
| DELETE | `/api/tarefa/:id_crud`   | Remover uma tarefa           |

## Testes

Os testes foram realizados utilizando o Postman.

**Para garantir o funcionamento correto no POST e PUT:**
- Em Headers, adicione:
````
Content-Type: application/json
````
- Em Body, selecione:
 ````
 raw (JSON)
````
- Body esperado
`````
{
  "titulo": "Título da tarefa",
  "descricao": "Descrição da tarefa"
}