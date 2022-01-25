const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enderecoSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  pais: String,
  nomeCompleto: String,
  rua: String,
  cidade: String,
  estado: String,
  cep: Number,
});

module.exports = mongoose.model("Endereco", enderecoSchema);
