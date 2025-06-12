import { database } from "../database.js";
import { DataTypes } from "sequelize";

const registros = database.define('registros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    carros_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'carros',
            key: 'id',
        },
    },
    data_hora_entrada: DataTypes.DATE,
    data_hora_saida: DataTypes.DATE,
    status: {
        type: DataTypes.ENUM('permitido', 'negado', 'lotado'),
    },
}, {
    tableName: 'registros',
    timestamps: false,
});

registros.associate = (models) => {
    registros.belongsTo(models.carros, { foreignKey: 'carros_id' });
};

export { registros };