import { database } from "../database.js";
import { DataTypes } from "sequelize";


const Login = database.define('Login', {
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

Login.associate = (models) => {
    Login.belongsTo(models.usuarios, { foreignKey: 'usuario_id' });
};

export { Login };