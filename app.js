const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./src/models/Home');
require('./src/models/Orcamento');
const Home = mongoose.model('Home');
const Orcamento = mongoose.model('Orcamento');

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type,Authorization");
    app.use(cors());
    next();
});

mongoose.connect(
    'mongodb://localhost:27017/celke',
    { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => {
        console.log("Conexão com o DB MongoDB realizado com sucesso!");
    }).catch((err) => {
        console.log("Erro: conexão deu pau!");
    });

app.get('/home', async (req, res) => {
    await Home.findOne({}).then((home) => {
        return res.json({
            error: false,
            home
        });
    }).catch((err) => {
        res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado!"
        });
    });
});

app.post('/home', async (req, res) => {
    const dados = {
        "topTitulo": "Temos a solução que usa empresa precisa!",
        "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "topTextoBtn": "Orçamento",
        "topLinkBtn": "laptop-code",
        "serTitulo": "Serviços",
        "serSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "serUmIcon": "",
        "serUmTitulo": "Serviço um",
        "serUmDesc": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "serDoisIcon": "mobile-alt",
        "serDoisTitulo": "Serviço dois",
        "serDoisDesc": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "serTresIcon": "network-wired",
        "serTresTitulo": "Serviço três",
        "serTresDesc": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
    };

    const homeExists = await Home.findOne({});

    if(homeExists) {
        return res.status(400).json({
            error: true,
            message: "Erro: A página Home já possui um registro no banco!"
        });
    }

    await Home.create(dados, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Conteúdo da página não cadastrado com sucesso!"
        });
    });

    return res.json({
        error: false,
        message: "Conteúdo da página home cadastrado com sucesso!"
    });

});

app.post('/orcamento', async (req, res) => {

    await Orcamento.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Solicitação de orçamento não enviado com sucesso!"
        });
    });

    return res.json({
        error: false,
        message: "Solicitação de orçamento enviado com sucesso"
    });

});



app.listen(3333, function () {
    console.log("Servidor iniciado em http://localhost:3333/");
});
