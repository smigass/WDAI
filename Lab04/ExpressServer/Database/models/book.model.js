const {Model, Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './book.db'
});


class Book extends Model {
}

const initBookModel = async () => {
    return new Promise((resolve, reject) => {
        Book.init({
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                author: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                year: {
                    type: DataTypes.INTEGER
                }
            },
            {
                sequelize,
                modelName: 'Book',
            })
        resolve()
    })
}

exports.book = {
    init: initBookModel,
    bookClass: Book
}

