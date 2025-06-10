import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const database = new Sequelize(process.env.DATABASE)

try {
    await database.authenticate()
    console.log('Conectado ao Banco de Dados')
} catch (erro) {
    console.log('Erro ao conectar ao Banco de Dados')
}

export default database