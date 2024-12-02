const express = require("express");
const verifyToken = require("../../JWT/auth");
const {getBooks, getBook, createBook, deleteBook} = require("../../Database/actions/book");
const router = express.Router();

// CREATE BOOK
router.post("/", verifyToken,async (req, res) => {
    const body = req.body;
    if (!body.title || !body.author) {
        return res.status(400).send({
            message: 'Title and Author are required'
        });
    }
    const {title, author, year} = body;
    const dbResponse = await createBook(title, author, year);
    res.status(dbResponse.status).send(dbResponse.data)
})

// GET BOOKS
router.get('/', verifyToken, async (req, res) => {
    const dbResponse = await getBooks()
    res.status(dbResponse.status).send(dbResponse.data)
})


//GET BOOK :id
router.get('/:id', verifyToken, async (req, res) => {
    const id = parseInt(req.params.id)
    const dbResponse = await getBook(id)
    res.status(dbResponse.status).send(dbResponse.data)
})

//DELETE BOOK
router.delete('/:id', verifyToken, async (req, res) => {
    const id = parseInt(req.params.id)
    const dbResponse = await deleteBook(id)
    res.status(dbResponse.status).send(dbResponse.data)
})
module.exports = router;