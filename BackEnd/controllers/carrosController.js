import { carros } from '../models/carros.js';
import { usuarios } from '../models/usuarios.js';


const getCarros = async (req, res) => {
    try {
        const carrosList = await carros.findAll();
        res.json(carrosList);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar carros' });
    }
};

const getCarrosPorUsuario = async (req, res) => {
    const usuarioId = req.params.usuarioId;
    try {
        const carrosList = await carros.findAll({
            where: { usuario_id: usuarioId }
        });
        if (carrosList.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhum carro encontrado para este usuário' });
        }
        res.json(carrosList);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar carros do usuário' });
    }
};


const postCarro = async (req, res) => {
    try {
        const { placa, modelo, cor, usuario_id } = req.body;
        if (!placa || !modelo || !cor || !usuario_id) {
            return res.status(400).send({ mensagem: 'Dados incompletos' });
        }
        const usuarioExistente = await usuarios.findOne({ where: { id: usuario_id } });
        if (!usuarioExistente) {
            return res.status(400).send({ mensagem: 'Usuário não existe' });
        }
        await carros.create({ placa, modelo, cor, usuario_id });
        res.status(201).send({ mensagem: 'Carro foi criado' });
    } catch (erroDisparado) {
        console.log(erroDisparado);
        res.status(500).send({ mensagem: 'Ocorreu um erro inesperado' });
    }
};

const deletarCarro = async (req, res) => {
    const id = req.params.id;
    try {
        const carro = await carros.findOne({ where: { id } });
        if (!carro) {
            return res.status(404).json({ mensagem: 'Carro não encontrado' });
        }
        await carros.destroy({ where: { id } });
        res.status(200).json({ mensagem: 'Carro deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar carro' });
    }
};

const atualizarCarro = async (req, res) => {
    const id = req.params.id;
    const { placa, modelo, cor, usuario_id } = req.body;
    try {
        const carro = await carros.findOne({ where: { id } });
        if (!carro) {
            return res.status(404).json({ mensagem: 'Carro não encontrado' });
        }
        if (usuario_id) {
            const usuarioExistente = await usuarios.findOne({ where: { id: usuario_id } });
            if (!usuarioExistente) {
                return res.status(400).send({ mensagem: 'Usuário não existe' });
            }
        }
        await carros.update({ placa, modelo, cor, usuario_id }, { where: { id } });
        res.status(200).json({ mensagem: 'Carro atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar carro' });
    }
};

export { getCarros, getCarrosPorUsuario, postCarro, deletarCarro, atualizarCarro };