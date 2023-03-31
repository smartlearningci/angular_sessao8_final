const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const blogSchema = new Schema({
  titulo: String,
  dataPublicacao: String,
  tempoDeLeitura: String,
  comentarios: String,
  pequenaDescricao: String,
  imagem: String,
  id: Number,
  seoTitulo: String
});


 
module.exports = mongoose.model("Blog", blogSchema);