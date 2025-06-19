import express from 'express';
import { getCarros, postCarro } from '../controllers/carrosController.js';

const router = express.Router();

router.get('/', getCarros);
router.post('/', postCarro);

export default router;
