const express = require('express');
const {
  RenderHome,
  RenderTables,
  RenderTaller,
  RenderNotFound,
  CreateTaller,
  GetTallerById,
  UpdateTaller,
  DeleteTaller,
  GetUsuarioById,
  CreateUsuario,
  UpdateUsuario,
  DeleteUsuario,
  RenderEditUsuario
} = require('../controllers/PageController');

const router = express.Router();

router.get('/users/:id', GetUsuarioById); // Obtener usuario por ID
router.post('/users', CreateUsuario); // Crear un nuevo usuario
router.put('/users/:id/edit', RenderEditUsuario); // Actualizar un usuario existente
router.delete('/users/:id', DeleteUsuario); // Eliminar un usuario existente

router.get('/', RenderHome);
router.get('/users', RenderTables);
router.get('/talleres', RenderTaller);
router.get('/talleres/:id', GetTallerById); // Obtener taller por ID
router.post('/talleres', CreateTaller); // Crear un nuevo taller
router.put('/talleres/:id', UpdateTaller); // Actualizar un taller existente
router.delete('/talleres/:id', DeleteTaller); // Eliminar un taller existente
router.get('*', RenderNotFound);

module.exports = router;
