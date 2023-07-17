const express = require('express')
const { RenderHome, RenderTables, RenderNotFound, RenderTaller} = require('../controllers/PageController')
const router = express.Router()

router.get('/', RenderHome)
router.get('/users', RenderTables)
router.get('/talleres', RenderTaller)
router.get('*', RenderNotFound)



module.exports = {routes: router}