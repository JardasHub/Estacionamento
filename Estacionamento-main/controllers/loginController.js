import { login } from "../models/login.js";
import { usuarios } from "../models/usuarios.js";

const postLogin = async (req, res) => {
    try {
        const { acao, usuario_id } = req.body;
        if (!acao || !usuario_id) {
            return res.status(400).send({ mensagem: 'Dados incompletos' });
        }

        const usuarioExistente = await usuarios.findOne({ where: { id: usuario_id } });
        if (!usuarioExistente) {
            return res.status(400).send({ mensagem: 'Usuário não existe' });
        }

        await login.create({ acao, data_hora: new Date(), usuario_id });
        res.status(201).send({ mensagem: 'Registro de login criado' });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Ocorreu um erro inesperado' });
    }
};

const getLogin = async (req, res) => {
    try {
        const loginList = await Login.findAll();
        res.json(loginList);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar registros de login' });
    }
};

export { postLogin, getLogin };
