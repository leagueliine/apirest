const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var produtoModel = new Schema({
  nome: String,
  descricao: String,
  preco: Number,
  estoque: Number,
  ativo:{type: Boolean, default:true}
});

module.exports = mongoose.model("produto", produtoModel);