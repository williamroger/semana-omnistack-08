const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.json({ 'message': `Olá ${req.query.name} seja bem vindo`});
});

server.listen(3333);