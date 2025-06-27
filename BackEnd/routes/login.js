import express from 'express';
import { postLogin, getLogin } from '../controllers/loginController.js';

const router = express.Router();

router.get('/', getLogin);
router.post('/', postLogin);

export default router;
