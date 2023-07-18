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



exports.CreateTaller = (req, res) => {
  const { name, lat, lon, direction, email } = req.body;

  const newTaller = new Taller({ name, lat, lon, direction, email });

  newTaller
    .save()
    .then(() => {
      res.redirect('/talleres');
    })
    .catch((err) => {
      console.error('Error al crear el taller:', err);
      res.status(500).send('Error al crear el taller');
    });
};

exports.GetTallerById = (req, res) => {
  const { id } = req.params;

  Taller.findById(id)
    .then((taller) => {
      if (!taller) {
        return res.status(404).send('Taller no encontrado');
      }

      res.render('taller', { taller: taller });
    })
    .catch((err) => {
      console.error('Error al obtener el taller:', err);
      res.status(500).send('Error al obtener el taller');
    });
};

exports.UpdateTaller = (req, res) => {
  const { id } = req.params;
  const { name, lat, lon, direction, email } = req.body;

  Taller.findByIdAndUpdate(id, { name, lat, lon, direction, email })
    .then(() => {
      res.redirect('/talleres');
    })
    .catch((err) => {
      console.error('Error al actualizar el taller:', err);
      res.status(500).send('Error al actualizar el taller');
    });
};

exports.DeleteTaller = (req, res) => {
  const { id } = req.params;

  Taller.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/talleres');
    })
    .catch((err) => {
      console.error('Error al eliminar el taller:', err);
      res.status(500).send('Error al eliminar el taller');
    });
};

exports.GetUsuarioById = (req, res) => {
  const { id } = req.params;

  Usuario.findById(id)
    .then((usuario) => {
      if (!usuario) {
        return res.status(404).send('Usuario no encontrado');
      }

      res.render('usuario', { usuario: usuario });
    })
    .catch((err) => {
      console.error('Error al obtener el usuario:', err);
      res.status(500).send('Error al obtener el usuario');
    });
};

exports.CreateUsuario = (req, res) => {
  const { id, name, email } = req.body;

  const newUsuario = new Usuario({ id, name, email });

  newUsuario
    .save()
    .then(() => {
      res.redirect('/users');
    })
    .catch((err) => {
      console.error('Error al crear el usuario:', err);
      res.status(500).send('Error al crear el usuario');
    });
};

exports.RenderEditUsuario = (req, res) => {
    const { id } = req.params;
  
    Usuario.findById(id)
      .then((usuario) => {
        if (!usuario) {
          return res.status(404).send('Usuario no encontrado');
        }
  
        res.render('editUsuario', { usuario: usuario });
      })
      .catch((err) => {
        console.error('Error al obtener el usuario:', err);
        res.status(500).send('Error al obtener el usuario');
      });
  };
  
  exports.UpdateUsuario = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
  
    Usuario.findByIdAndUpdate(id, { name, email })
      .then(() => {
        res.redirect('/users');
      })
      .catch((err) => {
        console.error('Error al actualizar el usuario:', err);
        res.status(500).send('Error al actualizar el usuario');
      });
  };

exports.DeleteUsuario = (req, res) => {
  const { id } = req.params;

  Usuario.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/users');
    })
    .catch((err) => {
      console.error('Error al eliminar el usuario:', err);
      res.status(500).send('Error al eliminar el usuario');
    });
};

exports.RenderNotFound = (req, res) => {
    res.render('404');
  };