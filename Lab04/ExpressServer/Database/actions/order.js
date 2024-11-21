const {findUserByID} = require("./user");
const {getBook} = require("./book");
const orderModel = require('../models/order.model').order.orderClass

const getUserOrders = async (uid) => {
    try {
        if ((await findUserByID(uid)).status !== 200) {
            return {
                status: 404,
                message: 'User not found',
            }
        }
        const orders = await orderModel.findAll({where: {user_id: uid}})
        return {
            status: 200,
            data: orders,
        }
    } catch (e) {
        return {
            status: 400,
            data: e
        }
    }
}

const createOrder = async (uid, bid, quant) => {
    if((await getBook(bid)).status !== 200 || (await findUserByID(uid)).status !== 200){
        return {
            status: 400,
            data: {
                "error": "Invalid BID or UID",
            }
        }
    }
    const newOrder =  await orderModel.create({
        user_id: uid,
        book_id: bid,
        quantity: quant
    })

    await newOrder.save();
    return {
        status: 200,
        data: {
            id: newOrder.id,
        }
    }
}
const deleteOrder = async (oid) => {
    if ((await orderModel.findOne({where: {id: oid}})) === null){
        return {
            status: 400,
            data: {
                error: "Invalid Order ID",
            }
        }
    }
    await orderModel.destroy({where: {id: oid}})
    return {
        status: 200,
        data: {
            success: "Order " + oid +" deleted",
        }
    }
}

const updateOrder = async (OID, quantity) => {
    const order = await orderModel.findOne({where: {id: OID}})
    if (!order) {
        return {
            status: 404,
            data: {
                error: "Invalid Order ID",
            }
        }
    }
    order.quantity = quantity
    await order.save();
    return {
        status: 200,
        data: order
    }
}

const getOrder = async (oid) => {
    const order = await orderModel.findOne({where: {id: oid}})
    if (!order) {
        return {
            status: 404,
            data: {
                error: "Invalid Order ID",
            }
        }
    }
    return {
        status: 200,
        data: order
    }
}

module.exports = {getUserOrders, createOrder, deleteOrder, updateOrder, getOrder}