import express from 'express'
import CarrosController from '../controllers/carrosController.js'

const router = express.Router()

router.post('/registrarCarro', CarrosController.registrarCarro)
router.get('/carros', CarrosController.getCarros)
router.get('/usuario/:usuarioId', CarrosController.getCarrosPorUsuario)
router.delete('/:id', CarrosController.deletarCarro)
router.put('/:id', CarrosController.atualizarCarro)

export {router}