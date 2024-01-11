const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(express.json());

const users = [];

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  console.log(`Novo usuário cadastrado: ${JSON.stringify(newUser)}`);

  // Enviar a atualização do array para o microserviço de obtenção de usuários
  axios.post('http://localhost:3002/updateUsers', { users });

  return res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Servidor de cadastro de usuários rodando em http://localhost:${port}`);
});
