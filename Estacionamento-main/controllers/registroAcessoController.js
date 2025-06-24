import { registros } from '../models/registros.js';
import { carros } from '../models/carros.js';

const getRegistros = async (req, res) => {
    try {
        const registrosList = await registros.findAll();
        res.json(registrosList);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar registros' });
    }
};

const postRegistrosEntrada = async (req, res) => {
    try {
        const { carros_id, data_hora_entrada } = req.body;
        if (!carros_id || !data_hora_entrada) {
            return res.status(400).send({ mensagem: 'Dados de entrada incompletos' });
        }

        const carroExistente = await carros.findOne({ where: { id: carros_id } });
        if (!carroExistente) {
            return res.status(400).send({ mensagem: 'Carro não existe' });
        }

        await registros.create({ carros_id, data_hora_entrada });
        res.status(201).send({ mensagem: 'Registro de entrada criado com sucesso' });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Ocorreu um erro inesperado de entrada' });
    }
};

const postRegistrosSaida = async (req, res) => {
    try {
        const { carros_id, data_hora_saida } = req.body;
        if (!carros_id || !data_hora_saida) {
            return res.status(400).send({ mensagem: 'Dados incompletos de saída' });
        }

        const carroExistente = await carros.findOne({ where: { id: carros_id } });
        if (!carroExistente) {
            return res.status(400).send({ mensagem: 'Carro não existe' });
        }

        await registros.create({ carros_id, data_hora_saida });
        res.status(201).send({ mensagem: 'Registro de saída criado com sucesso' });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Ocorreu um erro inesperado de saída' });
    }
};

export { getRegistros, postRegistrosEntrada, postRegistrosSaida };
