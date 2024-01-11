const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

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

  // Comunicar com o microserviço de obtenção de usuários para manter os dados sincronizados
  axios.post('http://localhost:3001/sync-users', { users });

  return res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Microserviço de Cadastro de Usuários rodando em http://localhost:${port}`);
});
