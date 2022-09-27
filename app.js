var express = require('express');
var produtosRouter = require('./routes/produtosRouter');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var url = ''; //seu banco de dados aqui


var db = mongoose.connection;
var app = express();
app.use(bodyParser.json());

db.on('error', console.error);
db.once('open', function() {
  console.log('Conectado ao banco de dados produtosdb MongoDB.')
});

mongoose.connect(url);

app.listen(5000, function () {
    console.log('Servidor escutando na porta 5000');
});

app.use('/produtos', produtosRouter);  