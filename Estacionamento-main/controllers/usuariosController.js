import { usuarios } from '../models/usuarios.js';

const getUsuarios = async (req, res) => {
  try {
      const usuariosList = await usuarios.findAll();
      res.json(usuariosList);
  } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};
const postUsuarios = async (req, res) => {
  try {
      const { nome, email, senha, tipo } = req.body
      if (!nome || !email || !senha || !tipo) {
          return res.status(400).send({ mensagem: 'Dados incompletos' })
      }
      const usuarioExistente = await usuarios.findOne({ where: { email } })
      if (usuarioExistente) {
          return res.status(400).send({ mensagem: 'Usuário já existe' })
      }
      await usuarios.create({ nome, email, senha })
      res.status(201).send({ mensagem: 'Usuario foi criado' })
  } catch (erroDisparado) {
      console.log(erroDisparado)
      res.status(500).send({ mensagem: 'Ocorreu um erro inesperado' })
  }
};

const putUsuarios = async (req, res) => {
  try {
      const { nome, email, senha, tipo } = req.body;
      if (!nome || !email || !senha || !tipo) {
          return res.status(400).send({ mensagem: 'Dados incompletos' });
      }
      const usuarioExistente = await usuarios.findOne({ where: { email } });
      if (!usuarioExistente) {
          return res.status(400).send({ mensagem: 'Usuário não existe' });
      }
      await usuarios.update({ nome, email, senha }, { where: { email } });
      res.status(200).send({ mensagem: 'Usuario foi atualizado' });
  } catch (erroDisparado) {
      console.log(erroDisparado);
      res.status(500).send({ mensagem: 'Ocorreu um erro inesperado' });
  }
};

const deletarUsuario = async (req, res) => {
  const id = req.params.id;
  try {
      const usuario = await usuarios.findOne({ where: { id } });
      if (!usuario) {
          return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }
      await usuarios.destroy({ where: { id } });
      res.status(200).json({ mensagem: 'Usuário deletado com sucesso' });
  } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
}

  export{ deletarUsuario, getUsuarios, postUsuarios, putUsuarios };