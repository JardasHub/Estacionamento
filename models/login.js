import { database } from "../database.js";
import { DataTypes } from "sequelize";


const login = database.define('login', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    acao: DataTypes.STRING,
    data_hora: DataTypes.DATE,
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id',
        },
    },
}, {
    tableName: 'login',
    timestamps: false,
});

login.associate = (models) => {
    login.belongsTo(models.usuarios, { foreignKey: 'usuario_id' });
};

export { login };