// src/models/Admin.js
import { database } from "../database.js";
import { DataTypes } from "sequelize";

const Admin = database.define('Admin', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  nivel_acesso: {
    type: DataTypes.STRING,
    defaultValue: 'comum'
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  criado_em: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'admins',
  timestamps: false
});

export { Admin };
