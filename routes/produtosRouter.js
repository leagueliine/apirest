const express = require('express');
var produtosRouter = express.Router();

var produto = require('../models/produtoModel');
var produtosController = require('../controllers/produtosController')(produto);

produtosRouter.route('')
.get(produtosController.get)
.post(produtosController.add);

produtosRouter.route('/:id')
.get(produtosController.getById)
.put(produtosController.update)
.delete(produtosController.del);

module.exports = produtosRouter;