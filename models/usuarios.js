import { database } from "../database.js";
import { DataTypes } from "sequelize";

const usuarios = database.define('usuarios', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    }, 
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    senha: {
        type: DataTypes.STRING
    },
    usuario_id:{
        
          autoIncrement: true,
        type: DataTypes.INTEGER
    }  ,
    tipo: {
    type: DataTypes.ENUM('aluno', 'professor', 'funcionário', 'admin'),
  },
}, {
  tableName: 'usuarios',
  timestamps: false,
});


usuarios.associate = (models) => {
  usuarios.hasMany(models.carros, { foreignKey: 'usuario_id' });
  usuarios.hasMany(models.login, { foreignKey: 'usuario_id' });
};

export { usuarios };