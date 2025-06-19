import express from 'express';
import { postUsuarios, getUsuarios, deletarUsuario, putUsuarios } from '../controllers/usuariosController.js';

const router = express.Router();

router.post('/', postUsuarios);
router.get('/', getUsuarios);
router.delete('/:id', deletarUsuario);
router.put('/:id', putUsuarios);

export default router;