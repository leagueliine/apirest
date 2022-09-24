var Produto = require('../models/produtoModel');

var get = (function (req, res){

 Produto.find(function (err, produtos){
  if(err) {
    res.status(500);
    res.send("Erro interno do servidor");
  } else {
    res.status(200);
    res.send(produtos);
  }
 });
});

var getById = function (req, res){
  Produto.findById(req.params.id, function (err, produto){
    if (err){
      res.status(404);
      res.send('Produto não encontrado...');
    } else {
      res.status(200);
      res.send(produto);
    }
  })
};

var add = function (req, res){
  var produto = new Produto(req.body);
  console.log(req.body)
  produto.save(function(err){
    if (err){
      res.status(500);
      res.send('Erro : Falha ao incluir produto...');
    } else{
      res.status(201);
      res.send(produto);
    }
  })
};

module.exports = {
  add: add,
  get: get,
  getById: getById
};
