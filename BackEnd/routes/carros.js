import express from 'express';
import { getCarros, getCarrosPorUsuario, postCarro, deletarCarro, atualizarCarro } from '../controllers/carrosController.js';

const router = express.Router();

router.get('/', getCarros);
router.get('/:id', getCarrosPorUsuario);
router.delete('/:id', deletarCarro);
router.put('/:id', atualizarCarro); // Agora PUT espera `:id`
router.post('/', postCarro);

export default router;
