const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const avaliacaoSchema = new Schema({
  headline: String,
  body: String,
  rating: Number,
  photo: String,
  productID: { type: Schema.Types.ObjectId, ref: "Produto" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Avaliacao", avaliacaoSchema);
