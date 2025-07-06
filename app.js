const express = require('express');
const app = express();
const port = 3000;

app.get('/' , (req, res) => {
    res.send('Testando umas coisas');

});

app.listen(port, () => {
    console.log('Servidor rodando em http:// localbost: ${port}');

});