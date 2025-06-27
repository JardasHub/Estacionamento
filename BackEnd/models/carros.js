import { database } from "../database.js";
import { DataTypes } from "sequelize";

const carros = database.define('carros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    placa: {
        type: DataTypes.STRING,
        unique: true,
    },
    modelo: DataTypes.STRING,
    cor: DataTypes.STRING,
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id',
        },
    },
}, {
    tableName: 'carros',
    timestamps: false,
});

carros.associate = (models) => {
    carros.belongsTo(models.usuarios, { foreignKey: 'usuario_id' });
    carros.hasMany(models.registros, { foreignKey: 'carros_id' });
};


export { carros };