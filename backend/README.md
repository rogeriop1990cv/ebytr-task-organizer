
# Api Task Organizer

Api tem como objetivo criar, atualiza, delete e lista todas ao tarefas no banco de dados.


## Stack utilizada

**MongoDB**  
- MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas  

**NodeJS** 
- Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. 

## Como executa a API.

Clone o projeto:
```bash
  git clone git@github.com:rogeriop1990cv/ebytr-task-organizer.git
```
Depois entre do diretoria que foi criado.
```bash
  cd ebytr-task-organizer
```

Instale as dependencias:
```bash
  npm install
```
Para subi a api rode o comado.
```bash
  npm run start -w backend
```
## Documentação da API

#### Retorna todos os itens

```http
  GET /
```
#### Resposta
```html
    Status: 200 OK
```
```json
[
  {
    "_id": "6284714eb7c1e70a8d51c753",
    "description": "a simple description for the test of creating a new record in the database",
    "status": "Pendente",
    "createAt": "2022-05-18T04:08:46.463Z",
    "__v": 0
  },
  ...
  {
    "_id": "6284714fb7c1e70a8d51c755",
    "description": "a simple description for the test of creating a new record in the database",
    "status": "Pendente",
    "createAt": "2022-05-18T04:08:47.473Z",
    "__v": 0
  },
]
```

#### Criar uma nova tarefa

```http
POST /
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `description`      | `string` |  Descrição da tarefa |

#### Resposta

```html
Status: 201 Created
```
```json
{
  "description": "a simple description for the test of creating a new record in the database",
  "status": "Pendente",
  "_id": "6284844b7df24f0d9d0510da",
  "createAt": "2022-05-18T05:29:47.645Z",
  "__v": 0
}
```

#### Atualiza uma tarefa

```http
  PUT /${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`| `string` | ID da tarefa |

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `description`| `string` | Descrição da tarefa |
| `status`| `string` | Status da tarefa |

#### Resposta

```html
Status: 200 OK
```
```json
{}
```

#### Retorna um item

```http
  DELETE /${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` |  O ID da tarefa |

#### Resposta

```html
Status: 200 OK
```
```json
{}
```
