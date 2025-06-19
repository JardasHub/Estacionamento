import { usuarios } from '../models/usuarios.js';

export const getUsuarios = (req, res) => {
  // lógica para listar usuários
  res.send('Lista de usuários');
};

export const postUsuarios = (req, res) => {
  // lógica para criar usuário
  res.send('Usuário criado');
};

export const putUsuarios = (req, res) => {
  // lógica para atualizar usuário
  res.send('Usuário atualizado');
};

export const deletarUsuario = (req, res) => {
  // lógica para deletar usuário
  res.send('Usuário deletado');
};