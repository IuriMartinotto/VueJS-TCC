const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
  categoria: { type: Schema.Types.ObjectId, ref: "Categoria" },
  proprietario: { type: Schema.Types.ObjectId, ref: "Proprietario" },
  titulo: String,
  descricao: String,
  imagem: String,
  preco: Number,
  quantidadeStock: Number,
  avaliacao: Number,
});

module.exports = mongoose.model("Produtos", produtoSchema);
