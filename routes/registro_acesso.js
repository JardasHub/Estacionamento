import express from 'express'
const router = express.Router()
import RegistroAcessoController from '../controllers/registroAcessoController.js'

router.post('/registrarAcesso', RegistroAcessoController.registrarAcesso)
router.get('/acessos', RegistroAcessoController.getAcessos)
router.get('/usuario/:usuarioId', RegistroAcessoController.acessoEspecifico)
router.delete('/:id', RegistroAcessoController.deletarAcesso)

export { router }