const Usuario = require('../models/usuario');
const Taller = require('../models/taller')

exports.RenderTables = (req, res) => {
    Usuario.find({}, function (err, usuarios) {
        if (err) {
            console.error('Error al obtener los usuarios:', err);
            return res.status(500).send('Error al obtener los usuarios');
        }

        res.render('users', { usuarios: usuarios });
    });
};

exports.RenderTaller = (req, res) => {
    Usuario.find({}, function (err, usuarios) {
        if (err) {
            console.error('Error al obtener los usuarios:', err);
            return res.status(500).send('Error al obtener los usuarios');
        }

        res.render('users', { usuarios: usuarios });
    });
};