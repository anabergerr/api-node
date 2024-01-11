const express = require('express');
const axios = require('axios');

const app = express();
const port = 3002;

app.use(express.json());

let users = [];

app.get('/users', (req, res) => {
  console.log('Obtendo usuários:', users);

  return res.status(200).json(users);
});

// Rota para receber a atualização do array de usuários
app.post('/updateUsers', (req, res) => {
  users = req.body.users;
  console.log('Array de usuários atualizado:', users);
  res.status(200).send('Array de usuários atualizado com sucesso');
});

app.listen(port, () => {
  console.log(`Servidor de obtenção de usuários rodando em http://localhost:${port}`);
});
