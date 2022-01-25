const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proprietarioSchema = new Schema({
    nome: String,
    sobre: String,
    foto: String
});

module.exports = mongoose.model("Proprietario", proprietarioSchema);