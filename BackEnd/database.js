import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

console.log('DATABASE URL:', process.env.DATABASE); // debug

const database = new Sequelize(process.env.DATABASE, {
    dialect: 'postgres',
    logging: false,
});

try {
    await database.authenticate();
    console.log('Conectado com sucesso');
} catch (erro) {
    console.log('Erro na conexão:', erro.message);
}

export { database };
