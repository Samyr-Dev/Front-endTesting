# Front-endTesting

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Samyr-Dev/Front-endTesting/blob/main/LICENSE)

# Sobre o repositório

Este repositório foi criado para testes iniciais de introdução ao Node.js e Express.js, com o objetivo de compreender a criação de servidores web simples utilizando essas tecnologias.

# Tecnologias utilizadas
### 📦 Back-end (apesar do nome do repositório)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

# Como Executar o projeto

### ✅ Pré-requisitos
- Node.js instalado
- Express.js instalado via `npm`

### 📥 Instalação do Node.js e Express.js

1. Acesse: [https://nodejs.org/pt/download](https://nodejs.org/pt/download)
2. Faça o download do Node de acordo com seu sistema operacional
3. Após a instalação, abra o terminal:
   - Pressione `Win + R`, digite `cmd` e pressione Enter
   - Execute o comando:

```bash
npm install express
```

## Criando um servidor web simples

1. Abra o VS Code e crie um arquivo chamado app.js
2. Insira o seguinte código:

```bash
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

3- No terminal, execute o comando:
```bash
node app.js
````
4- Acesse http://localhost:3000 no seu navegador para ver o resultado

# Clonando o Repositório

```bash
# clonar repositório
git clone https://github.com/Samyr-Dev/Front-endTesting.git

# executar o projeto em uma IDE com o projeto aberto
Recomendável utilizar VsCode
```

# Autor

Samyr Silva Tertuliano Deusdará

https://www.linkedin.com/in/samyrtertuliano
