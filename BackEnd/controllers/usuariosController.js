import { usuarios } from '../models/usuarios.js';

// Tipos válidos de usuário
const tiposValidos = ['admin', 'professor', 'aluno', 'funcionario'];

const getUsuarios = async (req, res) => {
    try {
        const usuariosList = await usuarios.findAll();
        res.status(200).json(usuariosList);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar usuários' });
    }
};

const postUsuarios = async (req, res) => {
    try {
        const { nome, email, senha, tipo } = req.body;

        if (!nome || !email || !senha || !tipo) {
            return res.status(400).json({ mensagem: 'Dados incompletos' });
        }

        if (!tiposValidos.includes(tipo.toLowerCase())) {
            return res.status(400).json({ mensagem: 'Tipo de usuário inválido. Tipos permitidos: admin, professor, aluno, funcionario' });
        }

        const usuarioExistente = await usuarios.findOne({ where: { email } });
        if (usuarioExistente) {
            return res.status(400).json({ mensagem: 'Usuário já existe' });
        }

        await usuarios.create({ nome, email, senha, tipo: tipo.toLowerCase() });
        res.status(201).json({ mensagem: 'Usuário foi criado' });
    } catch (erroDisparado) {
        console.log(erroDisparado);
        res.status(500).json({ mensagem: 'Ocorreu um erro inesperado' });
    }
};

const putUsuarios = async (req, res) => {
    try {
        const id = req.params.id;
        const { nome, email, senha, tipo } = req.body;

        if (!nome || !email || !senha || !tipo) {
            return res.status(400).json({ mensagem: 'Dados incompletos' });
        }

        if (!tiposValidos.includes(tipo.toLowerCase())) {
            return res.status(400).json({ mensagem: 'Tipo de usuário inválido. Tipos permitidos: admin, professor, aluno, funcionario' });
        }

        const usuarioExistente = await usuarios.findByPk(id);
        if (!usuarioExistente) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        await usuarios.update(
            { nome, email, senha, tipo: tipo.toLowerCase() },
            { where: { id } }
        );
        res.status(200).json({ mensagem: 'Usuário foi atualizado' });
    } catch (erroDisparado) {
        console.log(erroDisparado);
        res.status(500).json({ mensagem: 'Ocorreu um erro inesperado' });
    }
};

const deletarUsuario = async (req, res) => {
    const id = req.params.id;
    try {
        const usuario = await usuarios.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }
        await usuarios.destroy({ where: { id } });
        res.status(200).json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensagem: 'Erro ao deletar usuário' });
    }
};

export { getUsuarios, postUsuarios, putUsuarios, deletarUsuario };