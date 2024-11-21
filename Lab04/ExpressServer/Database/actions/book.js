const bookModel = require("../models/book.model").book.bookClass

const getBooks = async () => {
    try {
        const books = await bookModel.findAll()
        return {
            status: 200,
            data: books
        }
    } catch (e) {
        return {
            status: 500,
            data: {
                error: e
            }
        }
    }
}

const getBook = async (book_id) => {
    try {
        const book = await bookModel.findOne({where: {id: book_id}})
        console.log(book)
        if (book) {
            return {
                status: 200,
                data: book
            }
        }
        return {
            status: 404,
            data: {
                error: `Book not found (id: ${book_id})`,
            }
        }
    } catch (e) {
        return {
            status: 500,
            data: null
        }
    }
}

const createBook = async (ttile, author, year) => {
    try {
        const book = await bookModel.create({
            title: ttile,
            author: author,
            year: year
        })
        await book.save()
        return {
            status: 200,
            data: book
        }
    } catch (e) {
        return {
            status: 400,
            data: e
        }
    }

}

const deleteBook = async (book_id) => {
    if ((await getBook(book_id)).status !== 200) {
        return {
            status: 404,
            data: {
                error: 'Book not found'
            }
        }
    }
    try {
        await bookModel.destroy({where: {id: book_id}})
        return {
            status: 200,
            data: {
                success: `Book id: ${book_id} deleted successfully`
            }
        }
    }catch (e){
        return {status: 400, data: e};
    }
}

module.exports = {
    getBook, getBooks, createBook,deleteBook
}