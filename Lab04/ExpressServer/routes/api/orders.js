const express = require("express");
const verifyToken = require("../../JWT/auth");
const router = express.Router();
const {getUserOrders, createOrder, deleteOrder, updateOrder, getOrder} = require("../../Database/actions/order");

// GET ORDERS
router.get('/:id', verifyToken, async (req, res) => {
    console.log(req.headers);
    const UID = req.params.id;
    const dbResponse = await getUserOrders(UID)
    res.status(dbResponse.status).json(dbResponse.data);
})

router.post('/', verifyToken, async (req, res) => {
    const body = req.body;
    if(!body.book_id){
        res.status(400).json({
            error: "Book id is required",
        })
    }
    const uid = req.userId
    const dbResponse = await createOrder(uid, body.book_id, body.quantity ? body.quantity : 1);
    res.status(dbResponse.status).json(dbResponse.data);
})

router.delete('/:id', verifyToken, async (req, res) => {
    const oid = req.params.id;
    const dbResponse = await deleteOrder(oid)
    res.status(dbResponse.status).json(dbResponse.data);
})

router.patch('/:id', verifyToken, async (req, res) => {
    if (req.body.quantity){
        const dbResponse = await updateOrder(req.params.id, req.body.quantity);
        return res.status(dbResponse.status).json(dbResponse.data);
    }
    const dbResponse = await getOrder(req.params.id);
    res.status(dbResponse.status).json(dbResponse.data);
})

module.exports = router;