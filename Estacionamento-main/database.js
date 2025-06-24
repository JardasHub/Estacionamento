// filepath: /C:/Users/jardel_c_oliveira/Downloads/TAREFA-API-main (1)/TAREFA-API-main/tarefa api 04.06/api tarefa/database.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

const database = new Sequelize(process.env.DATABASE, {
    dialect: 'postgres',
});

try {
    await database.authenticate();
    console.log('Conectado com sucesso');
} catch (erro) {
    console.log('Erro na conexão:', erro.message);
}

export { database };