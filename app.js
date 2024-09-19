const express = require('express');
const app = express();
// Define uma rota para a raiz do site
app.get('/', (req, res) => {
 res.send('Hello World!');
});
// O servidor irá rodar na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
});