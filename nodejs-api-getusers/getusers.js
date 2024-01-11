const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let syncedUsers = [];

app.post('/sync-users', (req, res) => {
  const { users } = req.body;
  syncedUsers = users;
  res.status(200).send('Usuários sincronizados com sucesso');
});

app.get('/users', (req, res) => {
  return res.status(200).json(syncedUsers);
});

app.listen(port, () => {
  console.log(`Microserviço de Obtenção de Usuários rodando em http://localhost:${port}`);
});
