require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGO_URL

module.exports.connectDB = function (callback) {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Conexión exitosa a la base de datos');
            callback();
        })
        .catch(error => console.error('Error al conectar a la base de datos:', error));
};
