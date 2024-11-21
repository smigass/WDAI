const {Model, Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './order.db'
});


class Order extends Model {
}

const initOrderModel = async () => {
    return new Promise((resolve, reject) => {
        Order.init({
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                book_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                quantity: {
                    type: DataTypes.INTEGER,
                    defaultValue: 1,
                }
            },
            {
                sequelize,
                modelName: 'Order',
            })
        resolve()
    })
}

exports.order = {
    init: initOrderModel,
    orderClass: Order
}

