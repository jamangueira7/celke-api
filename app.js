const express = require('express');
const mongoose = require('mongoose');

require('./src/models/Home');
const Home = mongoose.model('Home');

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
    res.send('Pegar dados Home');
});

app.post('/home', function (req, res) {
    res.send('Cadastrar pagina home');
});

app.listen(3333, function () {
    console.log("Servidor iniciado em http://localhost:3333/");
});
