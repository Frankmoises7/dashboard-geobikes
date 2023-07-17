const Usuario = require('../models/usuario');
const Taller = require('../models/taller');

exports.RenderHome = (req, res) => {
    res.render('home');
};

exports.RenderTables = (req, res) => {
    Usuario.find({}, function (err, users) {
        if (err) {
            console.error('Error al obtener los usuarios:', err);
            return res.status(500).send('Error al obtener los usuarios');
        }

        res.render('users', { users: users });
    });
};

exports.RenderTaller = (req, res) => {
    Taller.find({}, function (err, tallers) {
        if (err) {
            console.error('Error al obtener los talleres:', err);
            return res.status(500).send('Error al obtener los talleres');
        }

        res.render('talleres', { tallers: tallers });
    });
};

exports.RenderNotFound = (req, res) => {
    res.render('404');
};
