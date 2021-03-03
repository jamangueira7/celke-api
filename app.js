const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3333, function () {
    console.log("Servidor iniciado em http://localhost:3333/");
});
