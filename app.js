const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
    'mongodb://localhost:27017/celke',
    { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => {
        console.log("Conexão com o DB MongoDB realizado com sucesso!");
    }).catch((err) => {
        console.log("Erro: conexão deu pau!");
    });

app.get('/home', function (req, res) {
    res.send('Hello World');
});

app.listen(3333, function () {
    console.log("Servidor iniciado em http://localhost:3333/");
});
