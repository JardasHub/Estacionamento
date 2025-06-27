import { carros } from './carros.js';
import { usuarios } from './usuarios.js';
import { login } from './login.js';
import { registros } from './registros.js';

const db = { carros, usuarios, login, registros };

// Executar os relacionamentos
Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
