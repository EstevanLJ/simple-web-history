//Importando as dependências do npm
const express = require('express');
const bodyParser = require('body-parser');

//Importa as depencias do projeto, db e crawler
const db = require('./db');
const crawler = require('./crawler')(); //Importa e já executa;
const controller = require('./controller');

//Incia o aplicativo express
const app = express();

//Configura o express para aceitar requisições POST application/json
app.use(bodyParser.json());

//Configura a pasta public como repositório de assets estáticos
app.use(express.static('public'));

//Rota da tela principal
app.get('/sites', function (req, res) {

    controller.sites((err, rows) => {
        res.setHeader('Content-Type', 'application/json');
        if (rows)
            res.send(rows);
        else
            res.status(500).send({
                error: "Erro ao buscar sites!"
            });
    });

});

//Rota para buscar o historico de requisições de um site, via AJAX
app.get('/historico', function (req, res) {

    controller.historico(req.query.site_id, (err, rows) => {
        res.setHeader('Content-Type', 'application/json');
        if (rows)
            res.send(rows);
        else
            res.status(500).send({
                error: "Erro ao buscar historico!"
            });
    });

});

//Rota para adicionar um site, via AJAX
app.post('/site', function (req, res) {

    const site = {
        nome: req.body.nome,
        url: req.body.url
    }

    //Insere o site no banco
    controller.inserirSite(site, (err) => {
        if (err)
            return res.status(500).send({
                error: "Erro ao adicionar o site!"
            });

        return res.send();
    });

});


module.exports = app;