import express from 'express';
import {
  getRegistros,
  postRegistrosEntrada,
  postRegistrosSaida
} from '../controllers/registroAcessoController.js';

const router = express.Router();

router.get('/', getRegistros);
router.post('/entrada', postRegistrosEntrada);
router.post('/saida', postRegistrosSaida);

export default router;
