import express from 'express';
import cors from 'cors';
import { database } from './database.js';

// Importar models para registrar no Sequelize
import './models/index.js';

// Importar rotas
import carrosRoutes from './routes/carros.js';
import loginRoutes from './routes/login.js';
import registrosRoutes from './routes/registros.js';
import usuariosRoutes from './routes/usuarios.js';

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao banco
await database.sync({ alter: true }); // ou { force: true } para recriar

// Usar as rotas
app.use('/carros', carrosRoutes);
app.use('/login', loginRoutes);
app.use('/registros', registrosRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
// Exportar o app para testes ou outros usos