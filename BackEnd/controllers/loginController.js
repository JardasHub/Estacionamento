import { login } from "../models/login.js";
import { usuarios } from "../models/usuarios.js";

// Criar um novo registro de login/logout
const postLogin = async (req, res) => {
    try {
        const { acao, usuario_id } = req.body;

        if (!acao || !usuario_id) {
            return res.status(400).json({ mensagem: 'Dados incompletos. Informe "acao" e "usuario_id".' });
        }

        const usuarioExistente = await usuarios.findOne({ where: { id: usuario_id } });
        if (!usuarioExistente) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
        }

        await login.create({
            acao,
            data_hora: new Date(),
            usuario_id
        });

        return res.status(201).json({ mensagem: 'Registro de login/logout criado com sucesso.' });

    } catch (erro) {
        console.error('Erro ao registrar login/logout:', erro);
        return res.status(500).json({ mensagem: 'Erro interno ao registrar login/logout.' });
    }
};


const getLogin = async (req, res) => {
    try {
        const loginList = await login.findAll({
            include: [
                {
                    model: usuarios,
                    as: 'usuario',
                    attributes: ['nome', 'email']
                }
            ],
            attributes: ['id', 'acao', 'data_hora', 'usuario_id']
        });
        res.json(loginList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar registros de login e logout' });
    }
};

export { postLogin, getLogin };