require('./models/user.model')
const userModel = require("./models/user.model");
const bookModel = require("./models/book.model");
const orderModel = require("./models/order.model");

const init = async () => {
    await userModel.user.init()
    await userModel.user.userClass.sync()
    await bookModel.book.init()
    await bookModel.book.bookClass.sync()
    await orderModel.order.init()
    await orderModel.order.orderClass.sync()
}

init()