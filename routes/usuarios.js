const express = require('express')
const router = express.Router()
const UsuariosController = require('../controllers/usuariosController.js')

router.post('/', UsuariosController.createUsuario)
router.get('/usuarios', UsuariosController.getUsuarios)
router.delete('/:id', UsuariosController.deleteUsuario)
router.put('/:id', UsuariosController.updateUsuario)

router.get('/admin', UsuariosController.getAdmins)


export {router}