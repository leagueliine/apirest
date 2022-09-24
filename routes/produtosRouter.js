const express = require('express');
var produtosRouter = express.Router();

var produtosController = require('../controllers/produtosController');

produtosRouter.route('/post')
.get(produtosController.get)
.post(produtosController.add);

produtosRouter.route('/:id')
.get(produtosController.getById)

module.exports = produtosRouter;