const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    email: String,
  },
  { collection: 'users' } // Nombre de colección: 'users'
);

module.exports = mongoose.model('Usuario', usuarioSchema);
