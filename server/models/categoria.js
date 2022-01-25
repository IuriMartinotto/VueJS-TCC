const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    tipo: {type: String, unique: true, required: true}
});

module.exports = mongoose.model("Categoria", categoriaSchema);