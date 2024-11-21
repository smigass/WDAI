const {Model, Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './user.db'
});


class User extends Model {
}

const initUserModel = async () => {
    return new Promise((resolve, reject) => {
        User.init({
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                }
            },
            {
                sequelize,
                modelName: 'User',
            })
        resolve()
    })
}

exports.user = {
    init: initUserModel,
    userClass: User
}

