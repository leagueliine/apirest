const express = require('express');
const mongoose = require('mongoose');

var produtosRouter = require('./routes/produtosRouter');

var app= express();
var router = express.Router();

var url = 'mongodb+srv://leagueliine:Ursinha157@vendasdb.vl98sok.mongodb.net/?retryWrites=true&w=majority';

var db = mongoose.connection;

db.on('error',console.error);
db.once('open', function(){
  console.log('Conectado ao banco de dados produtosdb MongoDB.')
});

mongoose.connect(url);

app.listen(5000, function(){
  console.log('Servidor escutando na porta 5000');
});

app.use('/produtos', produtosRouter);

router.get('/', function(req, res){
  res.send('Esta é a página principal!');
});

router.get('/teste', function(req, res){
  res.send('Esta é a pagina teste!');
});

app.use('/', router);
