const mongoose = require('mongoose');

const tallerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Taller = mongoose.model('Taller', tallerSchema);

module.exports = Taller;
