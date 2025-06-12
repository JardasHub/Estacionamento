import express from 'express'
const router = express.Router()
import LogsController from '../controllers/logsController.js'

router.post('/registrarLog', LogsController.registrarLog)
router.get('/logs', LogsController.getLogs)
router.get('/usuario', LogsController.listarUsuarioLogs)

export { router }